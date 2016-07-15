# SmartCardReader.node
NFC Smart Card Reader for Node.js on Windows (32 and 64 bit)

## Installation
This module is equivalent to [node-nfc](https://github.com/camme/node-nfc) but designed to work specifically on Windows, 32 and 64 bit where node-nfc fails due to driver issues.

```JS
npm install smartcardreader && node test
```

## JavaScript Usage

### `SmartCardReader`
Creates a new connection to a smart card reader. Optionally specify a reader name

```
var SmartCardReaderName = require('smartcardreader')('name of device');
var SmartCardReaderFirstFound = require('smartcardreader')();
```

### `SmartCardReader.device`
Queries the first device name attached to Windows.

**Returns:** Device name on success, undefined on failure

### `SmartCardReader.devices`
Returns the name of all connected devices

**Returns:** Array of device names

### `Events`

 - **read** emits data from the tag when a tag is successfully read
 - **connect** when a connected device is found
 - **disconnect** when a connected device is removed

### `Examples`
```
var SmartCardReader = require('smartcardreader')();

SmartCardReader.on('connect', (device) => {
  console.info(`connected: ${device}`);
});
SmartCardReader.on('disconnect', (device) => {
  console.info(`disconnected: ${device}`);
});
SmartCardReader.on('read', (data) => {
  console.info(`read: ${data}`);
});
```

> Some readers register as multiple devices. To ensure connectivity is it advised that you specify the name of the expected device

## Binding usage

### `SmartCardReader::query`
Queries the first device name attached to Windows. This is an actual native query so caller is advised to cache the result.

**Returns:** Device name on success, Empty string on failure.

### `SmartCardReader::poll`
Polls data from the device returned by `SmartCardReader::query`. Caller should call this as often as possible to capture the data. Use of `process.nextTick` is advised.

**Returns:** Read an object `{ code: 123, data: "tag" }`. *Code* is one of [values listed here](https://msdn.microsoft.com/en-us/library/ms936965.aspx). *Data* is the data read from the Smart Card (if any).

### `SmartCardReader::setup`
Re-initializes internal resources and context associated with the reader object. Calls `release` internally.

**Returns:** *true* if context is valid AND a device is found.

### `SmartCardReader::release`
Releases internal resources and context associated with the reader object.

**Returns:** thin air (void, chaos).