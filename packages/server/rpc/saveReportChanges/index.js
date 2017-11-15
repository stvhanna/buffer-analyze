const { method } = require('@bufferapp/micro-rpc');
const rp = require('request-promise');

module.exports = method(
  'update_report',
  'save report changes',
  ({ name, id }) =>
    rp({
      uri: `${process.env.ANALYZE_API_ADDR}/update_report`,
      method: 'POST',
      strictSSL: !(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'),
      body: {
        name,
        id,
      },
      json: true,
    }).then(result => result)
  ,
);
