const { method } = require('@bufferapp/micro-rpc');

module.exports = method(
  'create_report',
  'create a new report for Analyze',
  () => Promise.resolve('yay'),
);
