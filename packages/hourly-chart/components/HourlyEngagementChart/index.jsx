import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import ReactHighcharts from 'react-highcharts';

import {
  color,
} from '@bufferapp/analyze-shared-components/style';

import {
  chartConfig,
  primarySeriesConfig,
  secondarySeriesConfig,
} from './config';

const HourlyEngagementChart = ({ metric, secondaryMetric, posts, timezone, chartRef }) => {
  let hour = moment().startOf('day').subtract(1, 'hour');
  ReactHighcharts.Highcharts.setOptions(
    {
      global: {
        getTimezoneOffset: timestamp => -moment.tz(timestamp, timezone).utcOffset(),
      },
    },
  );
  const metricByHour = metric.hourlyMetrics.map((hourlyMetric, index) => {
    hour.add(1, 'hour');
    return {
      x: hour.valueOf(),
      y: hourlyMetric,
      totalUpdates: posts[index],
      color: color[metric.label],
    };
  });
  const config = {
    ...chartConfig,
    series: [{
      ...primarySeriesConfig,
      color: color[metric.label],
      name: metric.label,
      data: metricByHour,
    }],
  };
  if (secondaryMetric) {
    hour = moment().startOf('day').subtract(1, 'hour');
    const secondaryMetricByHour = secondaryMetric.hourlyMetrics.map((hourlyMetric, index) => {
      hour.add(1, 'hour');
      return {
        x: hour.valueOf(),
        y: hourlyMetric,
        totalUpdates: posts[index],
        color: color[secondaryMetric.label],
      };
    });
    const baseColor = ReactHighcharts.Highcharts.Color(color[secondaryMetric.label]);
    const fillColor = baseColor ? baseColor.brighten(0.1).get('rgba') : null;
    config.series.push({
      ...secondarySeriesConfig,
      yAxis: (secondaryMetric.label === 'Impressions') ? 1 : 0,
      marker: {
        lineColor: color[secondaryMetric.label],
        fillColor,
      },
      color: color[secondaryMetric.label],
      name: secondaryMetric.label,
      data: secondaryMetricByHour,
    });
  }

  return <ReactHighcharts ref={chartRef} isPureConfig config={config} />;
};

HourlyEngagementChart.defaultProps = {
  posts: [],
  metric: {},
  secondaryMetric: {
    hourlyMetrics: [],
  },
  timezone: 'America/Los_Angeles',
};

HourlyEngagementChart.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.number),
  metric: PropTypes.shape({
    label: PropTypes.string,
    hourlyMetrics: PropTypes.arrayOf(PropTypes.number),
  }),
  secondaryMetric: PropTypes.shape({
    label: PropTypes.string,
    hourlyMetrics: PropTypes.arrayOf(PropTypes.number),
  }),
  chartRef: PropTypes.func.isRequired,
  timezone: PropTypes.string,
};

export default HourlyEngagementChart;
