import PropTypes from 'prop-types';
import React from 'react';
import ReactHighcharts from 'react-highcharts';
import moment from 'moment-timezone';

import chartConfig from './chartConfig';

function prepareSeries(dailyMetric) {
  const seriesData = Array.from(dailyMetric, (day) => {
    const dayStartTimestamp = moment.utc(Number(day.day)).startOf('day').valueOf();
    return {
      x: dayStartTimestamp,
      y: day.metric ? day.metric.value : 0,
      label: day.metric ? day.metric.label : '',
      metricKey: day.metric ? day.metric.metricKey : '',
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

function preparePlotOptions(dailyMetric) {
  let options = {};
  if (dailyMetric.length <= 15) {
    options = {
      column: {
        pointPlacement: 'between',
        borderColor: '#FBC699',
        pointWidth: null,
        pointPadding: 0.2,
        borderWidth: 1,
        groupPadding: null,
      },
    };
  } else if (dailyMetric.length > 15 && dailyMetric.length <= 80) {
    options = {
      column: {
        pointPlacement: 'between',
        borderColor: '#FBC699',
        pointWidth: null,
        pointPadding: null,
        borderWidth: 1,
        groupPadding: null,
      },
    };
  } else if (dailyMetric.length > 80) {
    options = {
      column: {
        pointPlacement: 'on',
        pointWidth: null,
        pointPadding: 0,
        borderWidth: 0,
        groupPadding: 0,
      },
    };
  }
  return options;
}

function prepareChartOptions(dailyMetric) {
  const config = Object.assign({}, chartConfig);
  config.plotOptions = preparePlotOptions(dailyMetric);
  config.series = prepareSeries(dailyMetric);
  return config;
}

const GridItemChart = ({ dailyData }) => {
  const charOptions = prepareChartOptions(dailyData);
  return (<ReactHighcharts config={charOptions} />);
};

GridItemChart.propTypes = {
  dailyData: PropTypes.arrayOf(PropTypes.shape({
    day: PropTypes.string,
    metric: PropTypes.shape({
      diff: PropTypes.number,
      label: PropTypes.string,
      value: PropTypes.number,
    }),
  })).isRequired,
};

export default GridItemChart;
