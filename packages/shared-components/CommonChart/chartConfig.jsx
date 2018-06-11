import React from 'react';
import reactDOM from 'react-dom/server';
import numeral from 'numeral';

import ChartTooltip from './components/ChartTooltip';

export function truncateNumber() {
  let number = parseFloat(this.value);

  if (number > 1000000) {
    number = numeral(number).format('0.[00]a');
  } else if (number >= 10000) {
    number = numeral(number).format('0.0a');
  } else if (number < 1 && number > 0) {
    number = numeral(number).format('0,0.0');
  } else {
    number = numeral(number).format('0,0');
  }

  return number;
}

export const getXAxis = () => ({
  gridLineColor: '#F3F5F7',
  gridLineWidth: 1,
  lineColor: '#E6EBEF',
  maxPadding: 0.05,
  minPadding: 0.05,
  minorGridLineColor: '#F3F5F7',
  minorGridLineWidth: 1,
  title: { text: null },
  type: 'datetime',
  labels: {
    align: 'left',
    format: '{value:%e %b}',
    x: 5,
    y: 25,
    style: {
      'font-size': '11px',
      'font-weight': 'normal',
      'font-family': 'Roboto, sans serif',
    },
  },
});

export const getYAxis = () => ([
  {
    title: { text: null },
    gridLineWidth: 1,
    max: null,
    min: 0,
    softMin: 0,
    maxPadding: 0.1,
    minPadding: 0.1,
    allowDecimals: false,
    gridLineColor: '#F3F5F7',
    lineColor: '#E6EBEF',
    showLastLabel: false,
    labels: {
      x: 0,
      y: -3,
      align: 'left',
      format: '{value}',
      formatter: truncateNumber,
      style: {
        'font-size': '11px',
        'font-weight': 'normal',
        'font-family': 'Roboto, sans serif',
      },
    },
  }, {
    title: { text: null },
    gridLineWidth: 1,
    max: null,
    min: 0,
    softMin: 0,
    maxPadding: 0.1,
    minPadding: 0.1,
    allowDecimals: false,
    gridLineColor: '#F3F5F7',
    lineColor: '#E6EBEF',
    showLastLabel: false,
    labels: {
      x: 0,
      y: -3,
      align: 'right',
      format: '{value}',
      formatter: truncateNumber,
      style: {
        'font-size': '11px',
        'font-weight': 'normal',
        'font-family': 'Roboto, sans serif',
      },
    },
    opposite: true,
  },
]);

export const highChartsSeriesPrimaryConfig = {
  type: 'areaspline',
  lineWidth: 2,
  states: {
    hover: {
      lineWidth: 2,
    },
  },
  data: null,
};

export default () => ({
  title: null,
  xAxis: getXAxis(),
  yAxis: getYAxis(),
  chart: {
    marginLeft: 20,
    marginRight: 20,
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
        lineWidth: 2,
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
