#pragma once

#include <string>
#include <winscard.h>

namespace helios
{

class SmartCardReader
{
public:
    SmartCardReader(const std::string& device = "");
    ~SmartCardReader();

    bool            setup(const std::string& device = "");
    void            release();
    long            poll(std::string& data) const;
    bool            query(std::string& name) const;

private:
    SCARDCONTEXT    mContext;
    std::string     mCardName;
};

}
