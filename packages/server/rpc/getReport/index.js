const moment = require('moment-timezone');
const rp = require('request-promise');
const { method } = require('@bufferapp/micro-rpc');
const profileParser = require('../utils/profileParser');

const RPC_ENDPOINTS = {
  'summary-table': require('../summary'), // eslint-disable-line global-require
  'posts-summary': require('../postsSummary'), // eslint-disable-line global-require
  average: require('../average'), // eslint-disable-line global-require
  posts: require('../posts'), // eslint-disable-line global-require
  'contextual-compare': require('../contextual'), // eslint-disable-line global-require
  compare: require('../compare'), // eslint-disable-line global-require
  audience: require('../audience'), // eslint-disable-line global-require
  comparison: require('../comparison'), // eslint-disable-line global-require
};

function calculateDateRange(range, timezone) {
  moment.tz.setDefault(timezone);
  const startDate = moment().startOf('day').subtract(range, 'days').unix();
  const endDate = moment().startOf('day').subtract(1, 'days').unix();
  moment.tz.setDefault();

  return { startDate, endDate };
}

function requestChartData (chart, dateRange, session) {
  if (RPC_ENDPOINTS[chart.chart_id] === undefined) return;
  const { startDate, endDate } = dateRange;

  return RPC_ENDPOINTS[chart.chart_id].fn(Object.assign({
    profileId: chart.profile_id,
    profileService: chart.service,
    startDate,
    endDate,
  }, chart.state), { session });
}

module.exports = method(
  'get_report',
  'get report details',
  ({ _id, timezone }, { session }) =>
    rp({
      uri: `${process.env.ANALYZE_API_ADDR}/get_report`,
      method: 'POST',
      strictSSL: !(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'),
      body: {
        id: _id,
      },
      json: true,
    }).then((report) => {
      let dateRange;
      if (report.date_range.range) {
        dateRange = calculateDateRange(report.date_range.range, timezone);
      } else {
        dateRange = {
          startDate: report.date_range.start,
          endDate: report.date_range.end,
        };
      }

      return Promise
        .all(report.charts.map(chart => requestChartData(chart, dateRange, session)))
        .then(chartMetrics =>
          Object.assign(report, {
            date_range: {
              startDate: dateRange.startDate,
              endDate: dateRange.endDate,
              range: report.date_range.range,
            },
            charts: report.charts
              .map((chart, index) => {
                chart.profile = profileParser(chart.profile);
                if (!Array.isArray(chartMetrics[index])) {
                  return Object.assign(chart, chart.state, chartMetrics[index]);
                }
                return Object.assign(chart, {
                  metrics: chartMetrics[index],
                });
              })
              .filter(chart => RPC_ENDPOINTS[chart.chart_id] !== undefined),
          }));
    }),
);

