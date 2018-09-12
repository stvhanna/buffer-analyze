const { method } = require('@bufferapp/buffer-rpc');
const rp = require('request-promise');

module.exports = method(
  'create_report',
  'create a new report for Analyze',
  ({ userId, profileId, organizationId, chartId, name, state, dateRange }) =>
    rp({
      uri: `${process.env.ANALYZE_API_ADDR}/create_report`,
      method: 'POST',
      strictSSL: !(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'),
      body: {
        name,
        state,
        profile_id: profileId,
        organization_id: organizationId,
        chart_id: chartId,
        user_id: userId,
        range: dateRange.range,
        start_date: dateRange.start,
        end_date: dateRange.end,
      },
      json: true,
    }).then(result => ({
      _id: result.created._id,
      updated_at: Date.now(),
      charts: [{
        profile_id: profileId,
        chart_id: chartId,
      }],
      date_range: result.created.date_range,
      name,
    }))
  ,
);
