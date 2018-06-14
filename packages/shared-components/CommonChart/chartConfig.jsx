import React from 'react';
import reactDOM from 'react-dom/server';
import numeral from 'numeral';
import moment from 'moment';

import ChartTooltip from './components/ChartTooltip';

export function truncateNumber() {
  let number = parseFloat(this.value);

  if (number > 1000000) {
    number = numeral(number).format('0.[00]a');
  } else if (number >= 10000) {
    number = numeral(number).format('0.[0]a');
  } else if (number < 2 && number > 0) {
    number = numeral(number).format('0,0.0');
  } else {
    number = numeral(number).format('0,0');
  }

  return number;
}

export function xAxisLabelFormatter() {
  var date = moment(new Date(this.value)).utc();
  if (!date.isValid()) return this.value;
  var isFirstOfMonth = date.date() === 1;
  if (this.isFirst || isFirstOfMonth) {
    return date.format('MMM D');
  }
  return date.format('D');
}

export const getXAxis = () => ({
  gridLineWidth: 0,
  lineColor: '#F3F5F7',
  lineWidth: 2,
  maxPadding: 0,
  minPadding: 0,
  tickLength: 0,
  minorGridLineWidth: 0,
  title: { text: null },
  type: 'datetime',
  labels: {
    align: 'center',
    formatter: xAxisLabelFormatter,
    x: 0,
    y: 25,
    style: {
      'font-size': '0.875rem',
      'font-weight': '400',
      'font-family': 'Roboto, sans serif',
      'whiteSpace': 'nowrap'
    },
  }
});

export const getYAxis = () => ([
  {
    title: { text: null },
    gridLineWidth: 2,
    max: null,
    min: 0,
    softMin: 0,
    minRange: 8,
    maxPadding: 0.1,
    minPadding: 0.1,
    gridLineColor: '#F3F5F7',
    lineColor: '#F3F5F7',
    showLastLabel: true,
    endOnTick: true,
    labels: {
      x: -15,
      y: 4,
      align: 'right',
      format: '{value}',
      formatter: truncateNumber,
      style: {
        'font-size': '0.875rem',
        'font-weight': '400',
        'font-family': 'Roboto, sans serif',
      },
    },
  }, {
    title: { text: null },
    gridLineWidth: 2,
    max: null,
    min: 0,
    softMin: 0,
    minRange: 8,
    maxPadding: 0.1,
    minPadding: 0.1,
    gridLineColor: '#F3F5F7',
    lineColor: '#F3F5F7',
    showLastLabel: true,
    labels: {
      x: 15,
      y: 4,
      align: 'left',
      format: '{value}',
      formatter: truncateNumber,
      style: {
        'font-size': '0.875rem',
        'font-weight': '400',
        'font-family': 'Roboto, sans serif',
      },
    },
    opposite: true,
  },
]);

export const highChartsSeriesPrimaryConfig = {
  type: 'areaspline',
  lineWidth: 3,
  states: {
    hover: {
      lineWidth: 3,
    },
  },
  data: null,
};

export default () => ({
  title: null,
  xAxis: getXAxis(),
  yAxis: getYAxis(),
  chart: {
    marginLeft: 65,
    marginRight: 65,
    spacingTop: 30
  },
  legend: {
    enabled: false,
  },
  credits: {
    enabled: false,
  },
  plotOptions: {
    series: {
      marker: {
        enabled: false,
        lineWidth: 3,
        radius: 3,
        symbol: 'circle',
      },
      states: {
        hover: {
          radiusPlus: 1.5,
        },
      },
    },
    column: {
      colorByPoint: true,
    },
  },
  tooltip: {
    shared: true,
    crosshairs: true,
    formatter() {
      let primaryMetric = this.points[0].point;
      let secondaryMetric = this.points.length > 1 ? this.points[1].point : null;
      // on the tooltip for presets the post_count metric should always be the seconday one
      if (!primaryMetric.isCustomMode && secondaryMetric && primaryMetric.metricData.key === 'posts_count') {
        primaryMetric = secondaryMetric;
        secondaryMetric = this.points[0].point;
      }
      return reactDOM.renderToStaticMarkup(
        <ChartTooltip
          day={primaryMetric.x}
          secondaryMetric={secondaryMetric ? secondaryMetric.metricData : null}
          {...primaryMetric}
        />,
      );
    },
    backgroundColor: '#343E46',
    borderRadius: 4,
    borderWidth: 0,
    pointFormatter: () => `${this.series.name}: <b>${this.y}</b><br/>`,
    shadow: false,
    useHTML: true,
  },
  series: [],
});
