const { method } = require('@bufferapp/buffer-rpc');
const rp = require('request-promise');

module.exports = method(
  'followers',
  'fetch profile followers count',
  ({ profileId }, { session }) =>
    rp({
      uri: `${process.env.API_ADDR}/1/profiles/${profileId}/analytics/current_follower_count.json`,
      method: 'GET',
      strictSSL: !(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'),
      qs: {
        access_token: session.analyze.accessToken,
      },
      json: true,
    })
      .then(result => result.response),
);
