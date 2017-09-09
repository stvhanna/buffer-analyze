import PropTypes from 'prop-types';
import React from 'react';
import ReactHighcharts from 'react-highcharts';
import moment from 'moment';

import chartConfig from './chartConfig';

function prepareSeries(dailyMetric) {
  const seriesData = Array.from(dailyMetric, day => ({
    x: moment(Number(day.day)).endOf('day').valueOf(),
    y: day.metric.value,
    label: day.metric.label,
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
  }));

  return [{
    data: seriesData,
  }];
}

function prepareChartOptions(dailyMetric) {
  const config = Object.assign({}, chartConfig);
  config.series = prepareSeries(dailyMetric);
  return config;
}

const GridItemChart = ({ dailyData }) => {
  const charOptions = prepareChartOptions(dailyData);
  return (<ReactHighcharts config={charOptions} />);
};

GridItemChart.propTypes = {
  dailyData: PropTypes.arrayOf(PropTypes.shape({
    day: PropTypes.string.isRequired,
    metric: PropTypes.shape({
      diff: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    }).isRequired,
  })).isRequired,
};

export default GridItemChart;
