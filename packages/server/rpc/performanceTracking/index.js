const { method } = require('@bufferapp/micro-rpc');
const rp = require('request-promise');

module.exports = method(
  'performance',
  'track performance',
  ({ data }, { session }) => {
    if (!data.tags) data.tags = [];
    data.tags.push('product:analyze');

    return rp({
      uri: `${process.env.API_ADDR}/1/performance.json`,
      method: 'POST',
      strictSSL: !(process.env.NODE_ENV === 'development'),
      qs: Object.assign({
        access_token: session.analyze.accessToken,
      }, data),
    })
      .then(result => JSON.parse(result));
  });
