#include "SmartCardWrapper.hh"

namespace helios
{

NAN_METHOD(SmartCardWrapper::New)
{
    Nan::HandleScope scope;
    
    if (info.IsConstructCall())
    {
        (new SmartCardWrapper())->Wrap(info.This());
        info.GetReturnValue().Set(info.This());
    }
    else
    {
        return Nan::ThrowError("New must be called as a constructor.");
    }
}

NAN_METHOD(SmartCardWrapper::Poll)
{
    Nan::HandleScope scope;

    if (auto self = Nan::ObjectWrap::Unwrap<SmartCardWrapper>(info.This()))
    {
        std::string data;
        v8::Local<v8::Object> object = Nan::New<v8::Object>();
        object->Set(Nan::New("code").ToLocalChecked(), Nan::New(self->mReader.poll(data)));
        object->Set(Nan::New("data").ToLocalChecked(), Nan::New(data).ToLocalChecked());
        info.GetReturnValue().Set(object);
    }
    else
    {
        return Nan::ThrowError("Unable to unwrap the native instance.");
    }
}

NAN_METHOD(SmartCardWrapper::Query)
{
    Nan::HandleScope scope;

    if (auto self = Nan::ObjectWrap::Unwrap<SmartCardWrapper>(info.This()))
    {
        std::string name;

        if (self->mReader.query(name))
        {
            info.GetReturnValue().Set(Nan::New(name).ToLocalChecked());
        }
        else
        {
            info.GetReturnValue().SetEmptyString();
        }
    }
    else
    {
        return Nan::ThrowError("Unable to unwrap the native instance.");
    }
}

NAN_METHOD(SmartCardWrapper::Setup)
{
    Nan::HandleScope scope;

    if (auto self = Nan::ObjectWrap::Unwrap<SmartCardWrapper>(info.This()))
    {
        info.GetReturnValue().Set(self->mReader.setup());
    }
    else
    {
        return Nan::ThrowError("Unable to unwrap the native instance.");
    }
}

NAN_METHOD(SmartCardWrapper::Release)
{
    Nan::HandleScope scope;

    if (auto self = Nan::ObjectWrap::Unwrap<SmartCardWrapper>(info.This()))
    {
        self->mReader.release();
        info.GetReturnValue().SetUndefined();
    }
    else
    {
        return Nan::ThrowError("Unable to unwrap the native instance.");
    }
}

}
