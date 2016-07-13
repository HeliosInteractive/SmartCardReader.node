# SmartCardReader.node
NFC Smart Card Reader for Node.js on Windows (32 and 64 bit)

##Usage
This module is equivalent to [node-nfc](https://github.com/camme/node-nfc) but designed to work specifically on Windows, 32 and 64 bit where node-nfc fails due to driver issues.

```JS
npm install smartcardreader && node test
```

##API usage

###`SmartCardReader::query`
Queries the first device name attached to Windows. This is an actual native query so caller is advised to cache the result.

**Returns:** Device name on success, Empty string on failure.

###`SmartCardReader::poll`
Polls data from the device returned by `SmartCardReader::query`. Caller should call this as often as possible to capture the data. Use of `process.nextTick` is advised.
