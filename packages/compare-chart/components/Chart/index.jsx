import PropTypes from 'prop-types';
import React from 'react';
import ReactHighcharts from 'react-highcharts';
import moment from 'moment';

import chartConfig, { highChartsSeriesPrimaryConfig } from './chartConfig';

function prepareSeries(dailyMetric, timezone, isPreviousPeriod = false) {
  let color = '#9B9FA3';
  const seriesData = Array.from(dailyMetric, (day) => {
    let value = 0;
    if (day.metric) {
      if (isPreviousPeriod) {
        value = day.metric.previous_value;
      } else {
        value = day.metric.value;
        color = day.metric.color;
      }
    }
    return {
      x: moment(Number(day.day)).endOf('day').valueOf(),
      y: value,
      metric_data: day.metric,
      timezone,
      pointPlacement: 24 * 3600 * 1000,
    };
  });

  const seriesConfig = Object.assign({}, highChartsSeriesPrimaryConfig, {
    marker: {
      fillColor: ReactHighcharts.Highcharts.Color(color).brighten(0.1).get('rgba'),
      lineColor: color,
    },
    fillColor: {
      linearGradient: [0, 0, 0, 300],
      stops: [
        [0, ReactHighcharts.Highcharts.Color(color).setOpacity(0.3).get('rgba')],
        [1, ReactHighcharts.Highcharts.Color(color).setOpacity(0).get('rgba')],
      ],
    },
    lineColor: color,
    data: seriesData,
  });

  return seriesConfig;
}

function prepareChartOptions(dailyMetric, timezone) {
  const config = Object.assign({}, chartConfig);
  config.series = [
    prepareSeries(dailyMetric, timezone),
    prepareSeries(dailyMetric, timezone, true),
  ];
  return config;
}

const Chart = ({ dailyData, timezone }) => {
  const charOptions = prepareChartOptions(dailyData);
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
      previous_value: PropTypes.number.isRequired,
      posts_count: PropTypes.number.isRequired,
    }),
  })).isRequired,
  timezone: PropTypes.string.isRequired,
};

export default Chart;
