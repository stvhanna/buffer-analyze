const { method } = require('@bufferapp/micro-rpc');

const RPC_ENDPOINTS = {
  'summary-table': require('../summary'), // eslint-disable-line global-require
};

const requestChartData = (chart, startDate, endDate, session) =>
  RPC_ENDPOINTS[chart.chart_id].fn({
    profileId: chart.profile_id,
    startDate,
    endDate,
  }, { session });

module.exports = method(
  'get_report',
  'get report details',
  ({ charts, startDate, endDate }, { session }) =>
    Promise
      .all(charts.map(chart => requestChartData(chart, startDate, endDate, session)))
      .then(chartMetrics =>
        charts.map((chart, index) => Object.assign(chart, {
          metrics: chartMetrics[index],
        })),
      )
  ,
);

