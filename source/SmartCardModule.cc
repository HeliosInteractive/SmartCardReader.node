#include "SmartCardWrapper.hh"

#include <nan.h>

namespace helios
{

NAN_MODULE_INIT(ModuleInit)
{
    auto cls = "SmartCardReader";
    auto tpl = Nan::New<v8::FunctionTemplate>(SmartCardWrapper::New);

    tpl->SetClassName(Nan::New(cls).ToLocalChecked());
    tpl->InstanceTemplate()->SetInternalFieldCount(1);

    SetPrototypeMethod(tpl, "poll", SmartCardWrapper::Poll);
    SetPrototypeMethod(tpl, "query", SmartCardWrapper::Query);
    SetPrototypeMethod(tpl, "setup", SmartCardWrapper::Setup);
    SetPrototypeMethod(tpl, "release", SmartCardWrapper::Release);

    Nan::Set(target, Nan::New(cls).ToLocalChecked(), tpl->GetFunction());
};

}

NODE_MODULE(SmartCardReader, helios::ModuleInit)
