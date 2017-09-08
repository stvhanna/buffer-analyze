import React from 'react';
import PropTypes from 'prop-types';
import ReactHighcharts from 'react-highcharts';
import moment from 'moment';

import chartConfig from './chartConfig';

function prepareSeries(dailyMetric) {
  const seriesData = Array.from(dailyMetric, day => ({
    x: moment(Number(day.day)).endOf('day').valueOf(),
    // TODO select the correct metric
    y: day.metrics[0].value,
    label: day.metrics[0].label,
    color: {
      linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
      stops: [
        [0, 'rgb(255, 220, 175)'],
        [1, 'rgb(255, 240, 215)'],
      ],
    },
    states: {
      hover: {
        color: '#FFC880',
        brightness: 0.0,
      },
    },
  }));

  let pointWidth = 30;
  if (dailyMetric.length >= 90) {
    pointWidth = 1;
  } else if (dailyMetric.length >= 30) {
    pointWidth = 5;
  } else if (dailyMetric.length >= 28) {
    pointWidth = 6;
  }
  return [{
    data: seriesData,
    pointWidth,
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
    metrics: PropTypes.arrayOf(PropTypes.shape({
      diff: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })),
  })).isRequired,
};

export default GridItemChart;
