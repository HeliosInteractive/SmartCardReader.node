var SmartCardReader = require("./index.js").SmartCardReader
var SmartCardDevice = SmartCardReader.query();

if (SmartCardDevice == '') {
	console.log('No Smart Card Reader found.');
}
else {
	console.log('Using Smart Card Reader: ' + SmartCardDevice);
}

var poll = function() {
	var data = SmartCardReader.poll();
	if (data != '') {
		console.log('Read data: ' + data);
	}
	process.nextTick(poll);
}

poll();
