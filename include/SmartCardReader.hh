#pragma once

#include <string>
#include <vector>
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
    bool            query(std::vector<std::string>& devices) const;

private:
    SCARDCONTEXT    mContext;
    std::string     mCardName;
};

}
