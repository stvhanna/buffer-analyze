const { method } = require('@bufferapp/micro-rpc');
const rp = require('request-promise');

module.exports = method(
  'list_reports',
  'get reports list for user',
  () =>
    rp({
      uri: `${process.env.ANALYZE_API_ADDR}/list_reports`,
      method: 'POST',
      strictSSL: !(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'),
      body: {
        user_id: '56c20bd3bd3816f63c94c73f',
      },
      json: true,
    }).then(result => result)
  ,
);

