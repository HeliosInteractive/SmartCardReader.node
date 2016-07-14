const EventEmitter = require('events').EventEmitter;
const SmartCardReader = require('bindings')('SmartCardReader');

var SMC = function() {
  let SMC = {};
  EventEmitter.call(SMC);
  SMC.SmartCardReader = new SmartCardReader.SmartCardReader();
  SMC.device = SMC.SmartCardReader.query();
  Object.assign(SMC, internal);
  return SMC;
};
let internal = {};
Object.assign(internal, EventEmitter.prototype);

internal.lastRead = '';
internal.timeout = 0;

internal.dispatch = function(data){

  if (data === '') return;
  if (data === '6300') return;

  smc.emit('read', data);
};

internal.poll = function() {

  let data = smc.SmartCardReader.poll();

  if( smc.lastRead === data )
    clearTimeout(smc.timeout);

  smc.lastRead = data;
  smc.timeout = setTimeout(() => {
    smc.dispatch(data)
  }, 50);

  setImmediate(smc.poll);
};

let smc = SMC();
smc.poll();

module.exports = smc;