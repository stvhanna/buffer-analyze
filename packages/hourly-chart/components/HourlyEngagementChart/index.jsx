import React from 'react';
import ReactDOM from 'react-dom/server';
import PropTypes from 'prop-types';
import moment from 'moment';
import ReactHighcharts from 'react-highcharts';

import Tooltip from '../Tooltip';

const xAxis = {
  title: {
    text: null,
  },
  type: 'datetime',
  gridLineWidth: 1,
  gridLineColor: '#F3F5F7',
  lineColor: '#E6EBEF',
  min: moment().startOf('day').valueOf(),
  max: moment().endOf('day').valueOf(),
  minorTickWidth: 0,
  minorGridLineWidth: 1,
  minorGridLineColor: '#F3F5F7',
  minorTickInterval: 3600 * 1000,
  maxPadding: 0.05,
  minPadding: 0.05,
  tickInterval: 6 * 3600 * 1000, // Show label every six hours
  tickPixelInterval: 24 * 3600 * 1000,
  tickLength: 0,
  endOnTick: false,
  startOnTick: false,
  labels: {
    enabled: false,
    align: 'left',
    x: 10,
    y: 20,
    style: {
      'font-size': '12px',
      'font-weight': 'lighter',
    },
  },
};

const yAxisConfig = {
  title: {
    text: null,
  },
  max: null,
  min: null,
  allowDecimals: false,
  gridLineWidth: 1,
  beginOnTick: true,
  showLastLabel: false,
  gridLineColor: '#F3F5F7',
  minorTickWidth: 0,
  minorGridLineWidth: 1,
  minorGridLineColor: '#F3F5F7',
};

const yAxis = [{
  ...yAxisConfig,
  endOnTick: true,
  minPadding: 0.2,
  maxPadding: 0.3,
  labels: {
    align: 'left',
    x: -10,
    y: -2,
    style: {
      'font-size': '12px',
      'font-weight': 'lighter',
      'font-family': 'Open Sans, Helvetica Neue, Helvetica, Arial, sans serif',
    },
  },
},
{
  ...yAxisConfig,
  opposite: true,
  endOnTick: false,
  minPadding: 0.05,
  maxPadding: 0.3,
  labels: {
    align: 'right',
    x: 10,
    y: -2,
    style: {
      'font-size': '12px',
      'font-weight': 'lighter',
      'font-family': 'Open Sans, Helvetica Neue, Helvetica, Arial, sans serif',
    },
  },
}];

const chartConfig = {
  title: null,
  chart: {
    spacingBottom: 15,
    marginLeft: 25,
    marginRight: 25,
  },
  xAxis,
  yAxis,
  plotOptions: {
    column: {
      borderWidth: 0,
      borderRadius: 2,
    },
  },
  legend: {
    enabled: false,
  },
  credits: {
    enabled: false,
  },
  tooltip: {
    shared: true,
    crosshairs: true,
    formatter: function () {
      return ReactDOM.renderToString(<Tooltip points={this.points} />);
    },
    dateTimeLabelFormats: {
      minute: '%l %p',
      hour: '%l %p',
      day: '%l %p',
    },
    backgroundColor: '#343E46',
    borderRadius: 4,
    borderWidth: 0,
    pointFormatter: function() {
      return `${this.series.name}: <b>${this.y}</b><br/>`;
    },
    shadow: false,
    useHTML: true,
    style: {
      'max-width': '200px',
      width: '200px',
      padding: 18,
      color: '#fff',
      cursor: 'default',
      'font-size': '9pt',
      'font-family': 'Open Sans, Helvetica Neue, Helvetica, Arial, sans serif',
      'pointer-events': 'none',
      'white-space': 'nowrap',
    },
  },
};

const seriesConfig = {
  pointInterval: 3600 * 1000, // one hour
  pointWidth: 21,
  pointPlacement: 0.5,
};

const primarySeriesConfig = {
  ...seriesConfig,
  type: 'column',
  states: {
    hover: {
      enabled: false,
    },
  },
};

const secondarySeriesConfig = {
  ...seriesConfig,
  type: 'spline',
  zIndex: 2,
};

const HourlyEngagementChart = ({ metric, secondaryMetric, posts, timezone }) => {
  let hour = moment().startOf('day').subtract(1, 'hour');
  const metricByHour = metric.hourlyMetrics.map((hourlyMetric, index) => {
    hour.add(1, 'hour');
    return {
      x: hour.valueOf(),
      y: hourlyMetric,
      totalUpdates: posts[index],
      color: metric.color,
    };
  });
  hour = moment().startOf('day').subtract(1, 'hour');
  const secondaryMetricByHour = secondaryMetric.hourlyMetrics.map((hourlyMetric, index) => {
    hour.add(1, 'hour');
    return {
      x: hour.valueOf(),
      y: hourlyMetric,
      totalUpdates: posts[index],
      color: secondaryMetric.color,
    };
  });
  const baseColor = ReactHighcharts.Highcharts.Color(secondaryMetric.color);
  const fillColor = baseColor ? baseColor.brighten(.1).get('rgba') : null;
  const config = {
    ...chartConfig,
    getTimezoneOffset: timestamp => -moment.tz(timestamp, timezone).utcOffset(),
    series: [{
      ...primarySeriesConfig,
      color: metric.color,
      name: metric.label,
      data: metricByHour,
    }, {
      ...secondarySeriesConfig,
      yAxis: (secondaryMetric.label === 'Impressions') ? 1 : 0,
      marker: {
        lineColor: secondaryMetric.color,
        lineWidth: 2,
        radius: 4,
        symbol: 'circle',
        states: {
          hover: {
            radiusPlus: 1.5,
          },
        },
        fillColor,
      },
      color: secondaryMetric.color,
      name: secondaryMetric.label,
      data: secondaryMetricByHour,
    }],
  };

  ReactHighcharts.Highcharts.setOptions({
    global: {
      timezoneOffset: -moment.tz(timezone).utcOffset(),
    },
  });
  return <ReactHighcharts isPureConfig neverReflow config={config} />;
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
    color: PropTypes.string,
    hourlyMetrics: PropTypes.arrayOf(PropTypes.number),
  }),
  secondaryMetric: PropTypes.shape({
    label: PropTypes.string,
    color: PropTypes.string,
    hourlyMetrics: PropTypes.arrayOf(PropTypes.number),
  }),
  timezone: PropTypes.string,
};

export default HourlyEngagementChart;
