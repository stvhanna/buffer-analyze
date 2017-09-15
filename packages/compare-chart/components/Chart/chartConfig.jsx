import React from 'react';
import reactDOM from 'react-dom/server';

import ChartTooltip from '../ChartTooltip';

export const highChartsConfigXAxis = {
  title: { text: null },
  type: 'datetime',
  gridLineWidth: 1,
  gridLineColor: '#F3F5F7',
  lineColor: '#E6EBEF',
  minorGridLineWidth: 1,
  minorGridLineColor: '#F3F5F7',
  endOnTick: false,
  startOnTick: false,
  maxPadding: 0.05,
  minPadding: 0.05,
  labels: {
    align: 'left',
    x: 5,
    y: 25,
    style: {
      'font-size': '12px',
      'font-weight': 'lighter',
    },
  },
};

export const highChartsConfigYAxis = [
  {
    title: { text: null },
    gridLineWidth: 1,
    max: null,
    min: 0,
    softMin: 0,
    minRange: 8,
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
      style: {
        'font-size': '12px',
        'font-weight': 'lighter',
        'font-family': 'Open Sans, Helvetica Neue, Helvetica, Arial, sans serif',
      },
    },
  }, {
    title: { text: null },
    gridLineWidth: 1,
    max: null,
    min: 0,
    softMin: 0,
    minRange: 8,
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
      style: {
        'font-size': '12px',
        'font-weight': 'lighter',
        'font-family': 'Open Sans, Helvetica Neue, Helvetica, Arial, sans serif',
      },
    },
    opposite: true,
  },
];

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

export default {
  title: null,
  xAxis: highChartsConfigXAxis,
  yAxis: highChartsConfigYAxis,
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
  },
  tooltip: {
    shared: true,
    crosshairs: true,
    formatter() {
      const point = this.points[0].point;
      return reactDOM.renderToStaticMarkup(
        <ChartTooltip day={point.x} metric={point.metric_data} />,
      );
    },
    dateTimeLabelFormats: {
      millisecond: '%A, %b %e, %H:%M:%S.%L',
      second: '%A, %b %e, %H:%M:%S',
      minute: '%A, %b %e, %H:%M',
      hour: '%A, %B %e',
      day: '%A, %B %e',
      week: 'Week from %A, %b %e, %Y',
      month: '%B %Y',
      year: '%Y',
    },
    backgroundColor: '#343E46',
    borderRadius: 4,
    borderWidth: 0,
    pointFormatter: () => `${this.series.name}: <b>${this.y}</b><br/>`,
    shadow: false,
    useHTML: true,
    style: {
      maxWidth: '175px',
      width: '175px',
      padding: 18,
      color: '#fff',
      cursor: 'default',
      fontSize: '9pt',
      fontFamily: 'Open Sans, Helvetica Neue, Helvetica, Arial, sans serif',
      pointerEvents: 'none',
      whiteSpace: 'normal',
    },
  },
  series: [],
};
