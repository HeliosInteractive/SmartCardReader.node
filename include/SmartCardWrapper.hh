#pragma once

#include "SmartCardReader.hh"

#include <nan.h>

namespace helios
{

class SmartCardWrapper : public Nan::ObjectWrap
{
public:
    static NAN_METHOD(New);
    static NAN_METHOD(Poll);
    static NAN_METHOD(QueryFirstDevice);
    static NAN_METHOD(QueryAllDevices);
    static NAN_METHOD(Setup);
    static NAN_METHOD(Release);

private:
    SmartCardWrapper(const std::string& device);

private:
    SmartCardReader mReader;
};

}
