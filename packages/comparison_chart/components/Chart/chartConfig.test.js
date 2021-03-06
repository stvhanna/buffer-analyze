import { truncateNumber, xAxisLabelFormatter } from './chartConfig';

describe('ComparisonChart: ChartConfig x-axis label formatter', () => {
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

describe('ComparisonChart: chartConfig truncate number', () => {
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
