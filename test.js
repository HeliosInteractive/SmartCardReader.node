let SmartCardReader = require('./index');

console.info(`Connected device: ${SmartCardReader.device}`);

SmartCardReader.on('read', (data) => {
	console.info(`read: ${data}`);
});