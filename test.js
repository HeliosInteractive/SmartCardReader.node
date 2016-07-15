let SmartCardReader = require('./index')();
//let SmartCardReader = require('./index')('OMNIKEY CardMan 5x21-CL 0');

SmartCardReader.on('connect', (device) => {
  console.info(`connected: ${device}`);
});
SmartCardReader.on('disconnect', (device) => {
  console.info(`disconnected: ${device}`);
});
SmartCardReader.on('read', (data) => {
	console.info(`read: ${data}`);
});