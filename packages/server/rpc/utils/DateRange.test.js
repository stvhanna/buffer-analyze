const moment = require('moment');
const DateRange = require('./DateRange');

describe('rpc tools DateRange', () => {
  it('should return the previous 7 days range', () => {
    const end = '01/31/2018';
    const start = '01/25/2018';
    const dateRange = new DateRange(start, end);
    const previousDateRange = dateRange.getPreviousDateRange();
    expect(previousDateRange.start)
      .toBe('01/18/2018');
    expect(previousDateRange.end)
      .toBe('01/24/2018');
  });

  it('should return the previous period for an arbitrary range', () => {
    const end = '01/31/2018';
    const start = '01/21/2018';
    const dateRange = new DateRange(start, end);
    const previousDateRange = dateRange.getPreviousDateRange();
    expect(previousDateRange.start)
      .toBe('01/10/2018');
    expect(previousDateRange.end)
      .toBe('01/20/2018');
  });
});
