#pragma once

#include <string>
#include <winscard.h>

namespace helios
{

class SmartCardReader
{
public:
    SmartCardReader();
    ~SmartCardReader();

    bool            poll(std::string& data);
    bool            query(std::string& name);

private:
    SCARDCONTEXT    mContext;
    SCARDHANDLE	    mHandle;
    std::string     mCardName;
};

}
