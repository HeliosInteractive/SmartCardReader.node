var SmartCardReader = require("./index.js").SmartCardReader
var SmartCardDevice = SmartCardReader.query();

if (SmartCardDevice == '') {
	console.log('No Smart Card Reader found.');
}
else {
	console.log('Using Smart Card Reader: ' + SmartCardDevice);
}

var poll = function() {
	var read = SmartCardReader.poll();
	if (read.data != '')
		console.log(read);
	process.nextTick(poll);
}

poll();
