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
    static NAN_METHOD(Query);

private:
    SmartCardReader mReader;
};

}
