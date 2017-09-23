import PropTypes from 'prop-types';
import React from 'react';
import ReactHighcharts from 'react-highcharts';
import moment from 'moment-timezone';

import chartConfig from './chartConfig';

function prepareSeries(dailyMetric, timezone) {
  const seriesData = Array.from(dailyMetric, (day) => {
    // This is needed cause charts time need to be in utc to snap markers on the grid
    // but we want to display the data in the profile timezone
    const chartTime = moment.utc(Number(day.day)).startOf('day');
    const dayWithTimezone = moment.tz(Number(day.day), timezone).startOf('day');
    if (dayWithTimezone.utcOffset() < 0) {
      chartTime.subtract(1, 'day');
    }

    return {
      x: chartTime.valueOf(),
      y: day.metric ? day.metric.value : 0,
      tooltipTime: Number(day.day),
      label: day.metric ? day.metric.label : '',
      timezone,
      color: {
        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
        stops: [
          [0, 'rgb(255, 220, 175)'],
          [1, 'rgb(255, 240, 215)'],
        ],
      },
      states: {
        hover: {
          color: {
            linearGradient: { x1: 0, y1: 0 },
            stops: [
              [0, '#FFc880'],
            ],
          },
          brightness: 0.0,
        },
      },
    };
  });

  return [{
    data: seriesData,
  }];
}

function prepareChartOptions(dailyMetric, timezone) {
  const config = Object.assign({}, chartConfig);
  config.series = prepareSeries(dailyMetric, timezone);
  return config;
}

const GridItemChart = ({ dailyData, timezone }) => {
  const charOptions = prepareChartOptions(dailyData, timezone);
  return (<ReactHighcharts config={charOptions} />);
};

GridItemChart.propTypes = {
  dailyData: PropTypes.arrayOf(PropTypes.shape({
    day: PropTypes.string.isRequired,
    metric: PropTypes.shape({
      diff: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    }),
  })).isRequired,
  timezone: PropTypes.string.isRequired,
};

export default GridItemChart;
