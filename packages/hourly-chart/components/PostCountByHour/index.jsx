import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import ReactHighcharts from 'react-highcharts';

const highChartsTweetsConfigXAxis = {
  title: {
    text: null,
  },
  type: 'datetime',
  gridLineWidth: 0,
  gridLineColor: '#F3F5F7',
  lineColor: '#F3F5F7',
  lineWidth: '2',
  min: moment().startOf('day').valueOf(),
  max: moment().endOf('day').valueOf(),
  minorTickWidth: 0,
  minorGridLineWidth: 0,
  minorGridLineColor: '#F3F5F7',
  minorTickInterval: 3600 * 1000,
  maxPadding: 0.0,
  minPadding: 0.0,
  tickInterval: 6 * 3600 * 1000, // Show label every six hours
  tickPixelInterval: 3600 * 24 * 1000,
  tickLength: 25,
  tickWidth: 2,
  tickColor: '#F3F5F7',
  showLastLabel: true,
  endOnTick: false,
  startOnTick: false,
  labels: {
    formatter: function() { // eslint-disable-line object-shorthand
      /* istanbul ignore next */
      return moment(new Date(this.value)).format('h A');
    },
    align: 'left',
    x: 10,
    y: 20,
    style: {
      'font-size': '0.875rem',
      'font-weight': '400',
      'font-family': 'Roboto, sans serif',
    },
  },
};

const chartConfig = {
  title: null,
  chart: {
    spacingTop: 10,
    spacingBottom: 0,
    height: 100,
    marginLeft: 65,
    spacingRight: 40,
  },
  xAxis: highChartsTweetsConfigXAxis,
  yAxis: {
    showLastLabel: false,
    showFirstLabel: false,
    title: {
      text: null
    },
    lineWidth: '0',
    gridLineColor: '#F3F5F7',
    gridLineWidth: 2,
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

const mouseOut = chart => {
  chart.tooltip.hide();
  //manually remove hover state from all points except this one
  for (var i in chart.series[0].points) {
    let point = chart.series[0].points[i];
    point.setState('');
  }
};

const PostCountByHour = ({ posts, hourlyChart }) => {
  const hour = moment().startOf('day');
  const postsByHour = posts.map((postCount) => {
    const post = {
      x: hour.valueOf(),
      y: postCount,
      color: '#ced7df',
      events: {
        mouseOver: function() { // eslint-disable-line object-shorthand

          const chart = hourlyChart.getChart();
          const index = this.series.data.indexOf(this);
          const pointsToRefresh = [chart.series[0].points[index]];

          if (chart.series[1] && chart.series[1].visible) {
            pointsToRefresh.push(chart.series[1].points[index]);
          }

          chart.tooltip.refresh(pointsToRefresh);
        },
        mouseOut: (() => mouseOut(hourlyChart.getChart())),
      },
    };
    hour.add(1, 'hour');
    return post;
  });
  const config = {
    ...chartConfig,
    series: [{
      ...seriesConfig,
      data: postsByHour,
    }],
  };

  return <ReactHighcharts isPureConfig config={config} />;
};

PostCountByHour.defaultProps = {
  posts: [],
  hourlyChart: null,
};

PostCountByHour.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.number),
  hourlyChart: PropTypes.shape({
    getChart: PropTypes.func,
  }),
};

export default PostCountByHour;
