let SmartCardReader = require('./index');
let SmartCardReader2 = require('./index');

console.info(`Connected device: ${SmartCardReader.device}`);

SmartCardReader.on('read', (data) => {
	console.info(`1 data`);
});
SmartCardReader2.on('read', (data) => {
	console.info(`2 data`);
});