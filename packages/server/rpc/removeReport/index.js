const { method } = require('@bufferapp/buffer-rpc');
const rp = require('request-promise');

module.exports = method(
  'remove_report',
  'remove a report',
  ({ id }) =>
    rp({
      uri: `${process.env.ANALYZE_API_ADDR}/remove_report`,
      method: 'POST',
      strictSSL: !(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'),
      body: {
        id,
      },
      json: true,
    }).then(result => Object.assign(result, { id }))
  ,
);
