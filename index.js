const EventEmitter = require('events').EventEmitter;
const SmartCardReader = require('bindings')('SmartCardReader');
const util = require('util');
const codes = require('./lib/codes');

module.exports = function (device) {

  var SMC = function () {
    let SMC = {};
    EventEmitter.call(SMC);
    SMC.SmartCardReader = new SmartCardReader.SmartCardReader(device);
    SMC.devices = SMC.SmartCardReader.queryAll();
    SMC.device = device || SMC.SmartCardReader.queryFirst();
    Object.assign(SMC, internal);
    SMC.device && setImmediate(() => {
      SMC.emit('connect', SMC.device)
    });
    return SMC;
  };

  let internal = {};
  Object.assign(internal, EventEmitter.prototype);

  internal.lastRead = '';
  internal.timeout = 0;

  /**
   * Clears the last id if the current id is the last id
   * @param data
   */
  function clearLast(data) {

    if (smc.lastRead === data)
      smc.lastRead = '';
  }

  /**
   * Dispatch id if not empty and not end
   * @param data
   */
  function dispatch(data) {

    if (data === '') return;
    if (data === '6300') return;

    smc.emit('read', data);
  }

  /**
   * Handles timeout from identical polling ids
   * @param data
   * @returns {*}
   */
  function flooding(data) {

    clearTimeout(smc.timeout);
    smc.timeout = setTimeout(() => {
      clearLast(data)
    }, 100);
    return setImmediate(poll);

  }

  /**
   * Polls the reader for new cards
   * @returns {*}
   */
  function poll() {

    let res = smc.SmartCardReader.poll();

    if (codes.get(res.code) === 'SCARD_E_SERVICE_STOPPED') {
      smc.emit('disconnect', smc.device);
      return reconnect();
    }

    if (smc.lastRead === res.data)
      return flooding(res.data);

    smc.lastRead = res.data;
    dispatch(res.data);
    setImmediate(poll);
  }

  /**
   * Reconnect the reader
   * @returns {*}
   */
  function reconnect() {
    let connected = smc.SmartCardReader.setup(device);
    if (connected) {
      smc.devices = smc.SmartCardReader.queryAll();
      smc.device = device || smc.SmartCardReader.queryFirst();
      smc.emit('connect', smc.device);
      return poll();
    }
    setImmediate(reconnect);
  }

  let smc = SMC();
  poll();

  return smc;
};