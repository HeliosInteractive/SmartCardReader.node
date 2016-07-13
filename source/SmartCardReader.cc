#include "SmartCardReader.hh"

#include <iomanip>
#include <sstream>
#include <algorithm>

namespace {

struct ScopedCardConnect
{
    ScopedCardConnect(SCARDHANDLE& ctx) : context(ctx) { /* no-op */ }
    ~ScopedCardConnect() {
        if (context != NULL) {
            ::SCardDisconnect(context, SCARD_RESET_CARD);
            context = NULL;
        }
    }
    SCARDHANDLE& context;
};

}

namespace helios
{

SmartCardReader::SmartCardReader()
    : mContext(NULL)
{
    setup();
}

SmartCardReader::~SmartCardReader()
{
    release();
}

bool SmartCardReader::setup()
{
    release();

    auto status = ::SCardEstablishContext(SCARD_SCOPE_SYSTEM, NULL, NULL, &mContext);

    if (status == SCARD_S_SUCCESS)
    {
        query(mCardName);
    }

    return !mCardName.empty();
}

void SmartCardReader::release()
{
    if (mContext != NULL)
    {
        ::SCardReleaseContext(mContext);
        mContext = NULL;
    }

    if (!mCardName.empty())
        mCardName.clear();
}

long SmartCardReader::poll(std::string& data)const
{
    if (mContext == NULL || mCardName.empty())
        return -1;

    SCARDHANDLE mHandle = NULL;
    bool invalid_context = false;
    unsigned long dwActiveProtocol = 0;

    long status = ::SCardConnectA(
        mContext,
        mCardName.c_str(),
        SCARD_SHARE_SHARED,
        SCARD_PROTOCOL_T0 | SCARD_PROTOCOL_T1,
        &mHandle, &dwActiveProtocol);

    ScopedCardConnect scoped_handle(mHandle);

    if (status == SCARD_S_SUCCESS)
    {
        SCARD_IO_REQUEST pioSendPci{ 0 };
        switch (dwActiveProtocol)
        {
        case SCARD_PROTOCOL_T0:
            pioSendPci = *SCARD_PCI_T0;
            break;

        case SCARD_PROTOCOL_T1:
            pioSendPci = *SCARD_PCI_T1;
            break;

        case SCARD_PROTOCOL_UNDEFINED:
        default:
            invalid_context = true;
            break;
        }

        if (!invalid_context)
        {
            byte pbRecvBuffer[10]{ 0 };
            byte ReadUIDCmd[] = { 0xFF, 0xCA, 0x00, 0x00, 0x00 }; // Gets the card's UID
            auto dwRecvLength = sizeof(pbRecvBuffer);
            auto minRecvLength = sizeof(DWORDLONG);

            status = ::SCardBeginTransaction(mHandle);
            status = ::SCardTransmit(mHandle, &pioSendPci, ReadUIDCmd, sizeof(ReadUIDCmd), 0, pbRecvBuffer, reinterpret_cast<LPDWORD>(&dwRecvLength));
            status = ::SCardEndTransaction(mHandle, SCARD_LEAVE_CARD);

            if (status == SCARD_S_SUCCESS)
            {
                std::stringstream data_read_buf;

                auto loopCount = std::min(minRecvLength, dwRecvLength);
                for (decltype(loopCount) i = 0; i < loopCount; i++)
                {
                    data_read_buf
                        << std::uppercase
                        << std::hex
                        << std::setfill('0')
                        << std::setw(2)
                        << (int)pbRecvBuffer[i];
                }

                if (!data_read_buf.str().empty())
                {
                    data = data_read_buf.str();
                }
            }
        }
    }

    return status;
}

bool SmartCardReader::query(std::string& name) const
{
    bool succeed = false;

    if (!name.empty())
        name.clear();

    if (mContext != NULL)
    {
        LPTSTR pmszReaders = nullptr;
        LPTSTR pReader = nullptr;
        LONG   lReturn = 0, lReturn2 = 0;
        DWORD  cch = SCARD_AUTOALLOCATE;

        lReturn = ::SCardListReaders(
            mContext,
            nullptr, (LPTSTR)&pmszReaders, &cch);

        if (lReturn == SCARD_S_SUCCESS)
        {
            pReader = pmszReaders;
            if ('\0' != *pReader && pReader != nullptr)
            {
                name = std::string(pReader);
                succeed = true;
            }
        }

        if (pmszReaders != nullptr)
        {
            // may fail but there is nothing we can do about it!
            ::SCardFreeMemory(mContext, pmszReaders);
        }
    }

    return succeed;
}

}
