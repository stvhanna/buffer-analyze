const rp = require('request-promise');
const { method } = require('@bufferapp/micro-rpc');

const RPC_ENDPOINTS = {
  'summary-table': require('../summary'), // eslint-disable-line global-require
  'posts-summary': require('../postsSummary'), // eslint-disable-line global-require
  average: require('../average'), // eslint-disable-line global-require
  posts: require('../posts'), // eslint-disable-line global-require
  'contextual-compare': require('../contextual'), // eslint-disable-line global-require
  compare: require('../compare'), // eslint-disable-line global-require
  audience: require('../audience'), // eslint-disable-line global-require
};

const requestChartData = (chart, startDate, endDate, session) =>
  RPC_ENDPOINTS[chart.chart_id].fn(Object.assign({
    profileId: chart.profile_id,
    profileService: chart.service,
    startDate,
    endDate,
  }, chart.state), { session });

module.exports = method(
  'get_report',
  'get report details',
  ({ _id, startDate, endDate }, { session }) =>
    rp({
      uri: `${process.env.ANALYZE_API_ADDR}/get_report`,
      method: 'POST',
      strictSSL: !(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'),
      body: {
        id: _id,
      },
      json: true,
    }).then(report =>
      Promise
        .all(report.charts.map(chart => requestChartData(chart, startDate, endDate, session)))
        .then(chartMetrics =>
          Object.assign(report, {
            charts: report.charts.map((chart, index) => {
              if (!Array.isArray(chartMetrics[index])) {
                return Object.assign(chart, chart.state, chartMetrics[index]);
              }
              return Object.assign(chart, {
                metrics: chartMetrics[index],
              });
            }),
          })),
    )
  ,
);

