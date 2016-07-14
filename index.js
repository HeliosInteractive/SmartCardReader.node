const EventEmitter = require('events').EventEmitter;
const SmartCardReader = require('bindings')('SmartCardReader');
const util = require('util');

const codes = new Map();
codes.set(-2146435042, 'SCARD_E_SERVICE_STOPPED');

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

function poll() {

  let res = smc.SmartCardReader.poll();

  if( codes.has(res.code) )
    if( codes.get(res.code) === 'SCARD_E_SERVICE_STOPPED' )
      return reconnect();

  if( smc.lastRead === res.data )
    clearTimeout(smc.timeout);

  smc.lastRead = res.data;
  smc.timeout = setTimeout(() => {
    smc.dispatch(res.data)
  }, 50);

  setImmediate(poll);
};

function reconnect(){
  let connected = smc.SmartCardReader.setup();
  if( connected ){
    smc.device = smc.SmartCardReader.query();
    return poll();
  }
  setImmediate(reconnect);
}

let smc = SMC();
poll();

module.exports = smc;