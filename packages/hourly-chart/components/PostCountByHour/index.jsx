import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import ReactHighcharts from 'react-highcharts';

const highChartsTweetsConfigXAxis = {
  title: {
    text: null,
  },
  type: 'datetime',
  gridLineWidth: 1,
  gridLineColor: '#F3F5F7',
  lineColor: '#E6EBEF',
  minorTickWidth: 0,
  minorGridLineWidth: 1,
  minorGridLineColor: '#F3F5F7',
  minorTickInterval: 3600 * 1000,
  maxPadding: 0.0,
  minPadding: 0.0,
  tickInterval: 6 * 3600 * 1000, // Show label every six hours
  tickPixelInterval: 3600 * 24 * 1000,
  tickLength: 20,
  showLastLabel: false,
  endOnTick: true,
  startOnTick: false,
  labels: {
    formatter: function() { // eslint-disable-line object-shorthand
      /* istanbul ignore next */
      return moment(new Date(this.value)).format('h A');
    },
    align: 'left',
    x: 10,
    y: 25,
    style: {
      'font-size': '12px',
      'font-weight': 'lighter',
    },
  },
};

const chartConfig = {
  title: null,
  chart: {
    spacingTop: 10,
    spacingBottom: 0,
    height: 100,
    marginLeft: 25,
    marginRight: 25,
  },
  xAxis: highChartsTweetsConfigXAxis,
  yAxis: {
    showLastLabel: false,
    showFirstLabel: false,
  },
  plotOptions: {
    column: {
      borderWidth: 0,
      borderRadius: 2,
      states: {
        hover: {
          animation: false,
          color: '#E7F0F8',
        },
      },
    },
  },
  legend: {
    enabled: false,
  },
  credits: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  series: [],
};

const seriesConfig = {
  type: 'column',
  color: '#ced7df',
  pointInterval: 3600 * 1000, // one hour
  pointWidth: 21,
  pointPlacement: 0.5,
  name: 'Tweets',
};

const PostCountByHour = ({ posts, timezone }) => {
  const hour = moment().startOf('day');
  const postsByHour = posts.map((postCount) => {
    const post = {
      x: hour.valueOf(),
      y: postCount,
      color: '#ced7df',
    };
    hour.add(1, 'hour');
    return post;
  });
  const config = {
    ...chartConfig,
    getTimezoneOffset: timestamp => -moment.tz(timestamp, timezone).utcOffset(),
    series: [{
      ...seriesConfig,
      data: postsByHour,
    }],
  };

  ReactHighcharts.Highcharts.setOptions({
    global: {
      timezoneOffset: -moment.tz(timezone).utcOffset(),
    },
  });
  return <ReactHighcharts isPureConfig config={config} />;
};

PostCountByHour.defaultProps = {
  posts: [],
  timezone: 'America/Los_Angeles',
};

PostCountByHour.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.number),
  timezone: PropTypes.string,
};

export default PostCountByHour;
