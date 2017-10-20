const { method } = require('@bufferapp/micro-rpc');
const rp = require('request-promise');

module.exports = method(
  'list_reports',
  'get reports list for user',
  ({ userId }) =>
    rp({
      uri: `${process.env.ANALYZE_API_ADDR}/list_reports`,
      method: 'POST',
      strictSSL: !(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'),
      body: {
        user_id: userId,
      },
      json: true,
    }).then(result => result)
  ,
);

