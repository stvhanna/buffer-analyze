import { truncateNumber, xAxisLabelFormatter, tooltipFormatter, pointFormatter } from './chartConfig';
import React from 'react';
import reactDOM from 'react-dom/server';
import ChartTooltip from '../ChartTooltip';
import mockDailyData from '../../mocks/dailyData';

describe('ChartConfig point formatter', () => {
  it('should format point HTML to \'Impressions: <b>50</b><br />\'', () => {
    const _this = {
      y: 50,
      series: { 
        name: 'Impressions'
      }
    };
    expect(pointFormatter.apply(_this))
      .toBe('Impressions: <b>50</b><br/>');
  });
});

describe('ChartConfig tooltip formatter', () => {
  it('should generate static tooltip markup', () => {
    
    const point = {
      metricData: mockDailyData[0],
      x: 1504137600000
    };

    const _this = {
      points: [{ point: point }]
    };
    
    const tooltip = reactDOM.renderToStaticMarkup(
      <ChartTooltip {...point.metricData} day={point.x} />,
    );

    expect(tooltipFormatter.apply(_this))
      .toBe(tooltip);
  });
});

describe('ChartConfig x-axis label formatter', () => {
  it('should convert unix time 1527811200000 to Jun 1', () => {
    const _this = {
      value: 1527811200000,
    };
    expect(xAxisLabelFormatter.apply(_this))
      .toBe('Jun 1');
  });
  it('should convert unix time 1527897600000 to 2', () => {
    const _this = {
      value: 1527897600000,
    };
    expect(xAxisLabelFormatter.apply(_this))
      .toBe('2');
  });
  it('shouldn\'t convert invalid date', () => {
    const _this = {
      value: 'Wednesday',
    };
    expect(xAxisLabelFormatter.apply(_this))
      .toBe('Wednesday');
  });
});

describe('ChartConfig truncate number', () => {
  it('should truncate 1000000 into 1m', () => {
    const _this = {
      value: 1000000,
    };
    expect(truncateNumber.apply(_this))
      .toBe('1m');
  });
  it('should truncate 1500000 into 1.5m', () => {
    const _this = {
      value: 1500000,
    };
    expect(truncateNumber.apply(_this))
      .toBe('1.5m');
  });
  it('should truncate 1570000 into 1.57m', () => {
    const _this = {
      value: 1570000,
    };
    expect(truncateNumber.apply(_this))
      .toBe('1.57m');
  });
  it('should truncate 1751234 into 1.75m', () => {
    const _this = {
      value: 1751234,
    };
    expect(truncateNumber.apply(_this))
      .toBe('1.75m');
  });
  it('should truncate 100500 into 100.5k', () => {
    const _this = {
      value: 100500,
    };
    expect(truncateNumber.apply(_this))
      .toBe('100.5k');
  });
  it('should truncate 100000 into 100k', () => {
    const _this = {
      value: 100000,
    };
    expect(truncateNumber.apply(_this))
      .toBe('100k');
  });
  it('should truncate 10500 into 10.5k', () => {
    const _this = {
      value: 10500,
    };
    expect(truncateNumber.apply(_this))
      .toBe('10.5k');
  });
  it('should truncate 10000 into 10k', () => {
    const _this = {
      value: 10000,
    };
    expect(truncateNumber.apply(_this))
      .toBe('10k');
  });
  it('should format decimals < 1', () => {
    const _this = {
      value: 0.5,
    };
    expect(truncateNumber.apply(_this))
      .toBe('0.5');
  });
  it('should round up decimals', () => {
    const _this = {
      value: 10.5,
    };
    expect(truncateNumber.apply(_this))
      .toBe('11');
  });
});
