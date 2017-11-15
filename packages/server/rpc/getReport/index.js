const { method } = require('@bufferapp/micro-rpc');

const RPC_ENDPOINTS = {
  'summary-table': require('../summary'), // eslint-disable-line global-require
  'posts-summary': require('../postsSummary'), // eslint-disable-line global-require
  average: require('../average'), // eslint-disable-line global-require
  'hourly-engagements': require('../hourly'), // eslint-disable-line global-require
  'top-posts': require('../topPosts'), // eslint-disable-line global-require
  'contextual-compare': require('../contextual'), // eslint-disable-line global-require
  compare: require('../compare'), // eslint-disable-line global-require
};

const requestChartData = (chart, startDate, endDate, session) =>
  RPC_ENDPOINTS[chart.chart_id].fn(Object.assign({
    profileId: chart.profile_id,
    startDate,
    endDate,
  }, chart.state), { session });

module.exports = method(
  'get_report',
  'get report details',
  ({ charts, startDate, endDate }, { session }) =>
    Promise
      .all(charts.map(chart => requestChartData(chart, startDate, endDate, session)))
      .then(chartMetrics =>
        charts.map((chart, index) => {
          if (!Array.isArray(chartMetrics[index])) {
            return Object.assign(chart, chart.state, chartMetrics[index]);
          }
          return Object.assign(chart, {
            metrics: chartMetrics[index],
          });
        }))
  ,
);

