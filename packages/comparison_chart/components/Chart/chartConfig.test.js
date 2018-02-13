import { truncateNumber } from './chartConfig';

describe('ComparisonChart: chartConfig truncate number', () => {
  it('should truncate 100000 into 100.0k', () => {
    const _this = {
      value: 100000,
    };
    expect(truncateNumber.apply(_this))
      .toBe('100.0k');
  });
  it('should truncate 10000 into 10.0k', () => {
    const _this = {
      value: 10000,
    };
    expect(truncateNumber.apply(_this))
      .toBe('10.0k');
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
