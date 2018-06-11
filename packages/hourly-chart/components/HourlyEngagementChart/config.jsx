import React from 'react';
import ReactDOM from 'react-dom/server';
import moment from 'moment';
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
      'font-size': '11px',
      'font-weight': 'normal',
      'font-family': 'Roboto, sans serif',
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
      'font-size': '11px',
      'font-weight': 'normal',
      'font-family': 'Roboto, sans serif',
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
      'font-size': '11px',
      'font-weight': 'normal',
      'font-family': 'Roboto, sans serif',
    },
  },
}];

export const chartConfig = {
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
    formatter: function () { // eslint-disable-line object-shorthand
      /* istanbul ignore next */
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
    pointFormatter: function() { // eslint-disable-line object-shorthand
      /* istanbul ignore next */
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
      'font-family': 'Roboto, sans serif',
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

export const primarySeriesConfig = {
  ...seriesConfig,
  type: 'column',
  states: {
    hover: {
      enabled: false,
    },
  },
};

export const secondarySeriesConfig = {
  ...seriesConfig,
  type: 'spline',
  zIndex: 2,
  marker: {
    lineWidth: 2,
    radius: 4,
    symbol: 'circle',
    states: {
      hover: {
        radiusPlus: 1.5,
      },
    },
  },
};
