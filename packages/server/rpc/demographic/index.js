const { method } = require('@bufferapp/buffer-rpc');
const rp = require('request-promise');

module.exports = method(
  'demographic',
  'get demographic data for a profile',
  ({ profileId, startDate, endDate, state }, req) =>
    rp({
      uri: `${req.app.get('analyzeApiAddr')}/metrics/demographic`,
      method: 'POST',
      strictSSL: !(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'),
      body: {
        state,
        profile_id: profileId,
        start_date: startDate,
        end_date: endDate,
        access_token: req.session.analyze.accessToken,
      },
      json: true,
    })
      .then(({ response }) => ({
        metrics: response.metrics,
        selectedGroup: response.metrics[0].key,
      }))
      .catch(error => ({
        metrics: [],
        selectedGroup: '',
        error,
      })),
);
