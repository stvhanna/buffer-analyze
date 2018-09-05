const { method } = require('@bufferapp/micro-rpc');
const rp = require('request-promise');
const profileParser = require('../utils/profileParser');

function getComparableUsername(username) {
  return username.replace('@', '').toUpperCase();
}

function sortProfilesByUsername(profiles) {
  return profiles.sort((a, b) =>
    getComparableUsername(a.username).localeCompare(getComparableUsername(b.username)));
}

module.exports = method(
  'profiles',
  'fetch profiles',
  ({ id }, { session }) =>
    rp({
      uri: `${process.env.API_ADDR}/1/analyze/users/${id}/get_social_accounts.json`,
      method: 'GET',
      strictSSL: !(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'),
      qs: {
        access_token: session.analyze.accessToken,
      },
    })
      .then(result => JSON.parse(result))
      .then(({ profiles }) => sortProfilesByUsername(profiles.map(profileParser))),
);
