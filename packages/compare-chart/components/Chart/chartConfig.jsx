import React from 'react';
import reactDOM from 'react-dom/server';
import numeral from 'numeral';
import moment from 'moment';

import ChartTooltip from '../ChartTooltip';

export function truncateNumber() {
  let number = parseFloat(this.value);

  console.log(this);

  if (number > 1000000) {
    number = numeral(number).format('0.[00]a');
  } else if (number >= 10000) {
    number = numeral(number).format('0.[0]a');
  } else if (number < 1 && number > 0) {
    number = numeral(number).format('0,0.0');
  } else {
    number = numeral(number).format('0,0');
  }

  return number;
}

export const getXAxis = () => ({
  gridLineColor: '#F3F5F7',
  gridLineWidth: 0,
  lineColor: '#E6EBEF',
  maxPadding: 0,
  minPadding: 0,
  minorGridLineColor: '#F3F5F7',
  minorGridLineWidth: 0,
  minorTickWidth: 0,
  minorTickLength: 0,
  tickLength: 0,
  title: { text: null },
  type: 'datetime',
  labels: {
    align: 'center',
    formatter: function() {
      var date = moment(new Date(this.value)).utc();
      var isFirstOfMonth = date.date() === 1;
      if (this.isFirst || isFirstOfMonth) {
        return date.format('MMM D');
      }
      return date.format('D');
    },
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
    allowDecimals: false,
    gridLineColor: '#F3F5F7',
    lineColor: '#E6EBEF',
    showLastLabel: true,
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
    spacingLeft: 25,
    spacingRight:40,
    spacingTop:20
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
        radius: 4,
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
      const point = this.points[0].point;
      return reactDOM.renderToStaticMarkup(
        <ChartTooltip {...point.metricData} day={point.x} />,
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
