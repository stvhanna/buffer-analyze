import PropTypes from 'prop-types';
import React from 'react';
import ReactHighcharts from 'react-highcharts';
import moment from 'moment';

import chartConfig, { highChartsSeriesPrimaryConfig } from './chartConfig';

function getMarkerFillColor(color) {
  const highchartColor = ReactHighcharts.Highcharts.Color(color);
  return highchartColor ?
    highchartColor.brighten(0.1).get('rgba') :
    color;
}

function fadeColor(color, opacity) {
  const highchartColor = ReactHighcharts.Highcharts.Color(color);
  return highchartColor ?
    highchartColor.setOpacity(opacity).get('rgba') :
    color;
}

function prepareSeries(dailyMetric, timezone, visualizePreviousPeriod, isPreviousPeriod = false) {
  let color = '#9B9FA3';
  const seriesData = Array.from(dailyMetric, (day) => {
    let value = 0;
    if (day.metric) {
      if (isPreviousPeriod) {
        value = day.metric.previousValue;
      } else {
        value = day.metric.value;
        color = day.metric.color;
      }
    }
    return {
      x: moment(Number(day.day)).endOf('day').valueOf(),
      y: value,
      metricData: Object.assign({}, day.metric, {
        visualizePreviousPeriod,
      }),
      timezone,
      pointPlacement: 24 * 3600 * 1000,
    };
  });

  const seriesConfig = Object.assign({}, highChartsSeriesPrimaryConfig, {
    marker: {
      fillColor: getMarkerFillColor(color),
      lineColor: color,
    },
    fillColor: {
      linearGradient: [0, 0, 0, 300],
      stops: [
        [0, fadeColor(color, 0.3)],
        [1, fadeColor(color, 0)],
      ],
    },
    lineColor: color,
    data: seriesData,
  });

  return seriesConfig;
}

function prepareChartOptions(dailyMetric, timezone, visualizePreviousPeriod) {
  const config = Object.assign({}, chartConfig);
  config.series = [
    prepareSeries(dailyMetric, timezone, visualizePreviousPeriod),
    (visualizePreviousPeriod ? prepareSeries(
      dailyMetric,
      timezone,
      visualizePreviousPeriod,
      true,
    ) : null),
  ].filter(e => e !== null);
  return config;
}

const Chart = ({ dailyData, timezone, visualizePreviousPeriod }) => {
  const charOptions = prepareChartOptions(dailyData, timezone, visualizePreviousPeriod);
  return (<ReactHighcharts config={charOptions} timezone={timezone} />);
};

Chart.propTypes = {
  dailyData: PropTypes.arrayOf(PropTypes.shape({
    day: PropTypes.string.isRequired,
    metric: PropTypes.shape({
      color: PropTypes.string.isRequired,
      diff: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      previousValue: PropTypes.number.isRequired,
      postsCount: PropTypes.number.isRequired,
    }),
  })).isRequired,
  timezone: PropTypes.string.isRequired,
  visualizePreviousPeriod: PropTypes.bool,
};

Chart.defaultProps = {
  visualizePreviousPeriod: false,
};

export default Chart;
