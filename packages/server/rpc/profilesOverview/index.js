const { method } = require('@bufferapp/buffer-rpc');
const rp = require('request-promise');

module.exports = method(
  'profiles_overview',
  'fetch profiles overview',
  ({ profiles }, req) =>
    rp({
      uri: `${req.app.get('analyzeApiAddr')}/overview`,
      method: 'POST',
      strictSSL: !(process.env.NODE_ENV === 'development'),
      qs: {
        access_token: req.session.analyze.accessToken,
        profiles,
      },
      json: true,
    })
      .then(({ response }) => response),
);
