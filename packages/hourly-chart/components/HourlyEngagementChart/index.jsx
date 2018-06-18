import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import ReactHighcharts from 'react-highcharts';
import {
  color,
} from '@bufferapp/analyze-shared-components/style';
import {
  chartConfig,
  primarySeriesConfig
} from './config';

class HourlyEngagementChart extends PureComponent {
  render() {
    const { metric, posts, chartRef } = this.props;
    let hour = moment().startOf('day').subtract(1, 'hour');
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

    return <ReactHighcharts ref={chartRef} isPureConfig config={config} />;
  }
}

HourlyEngagementChart.defaultProps = {
  posts: [],
  metric: {}
};

HourlyEngagementChart.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.number),
  metric: PropTypes.shape({
    label: PropTypes.string,
    hourlyMetrics: PropTypes.arrayOf(PropTypes.number),
  }),
  chartRef: PropTypes.func.isRequired,
};

export default HourlyEngagementChart;
