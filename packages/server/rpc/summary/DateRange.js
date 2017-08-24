const moment = require('moment');

module.exports = class DateRange {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  getPreviousDateRange() {
    const end = moment(this.end, 'MM/DD/YYYY').subtract(7, 'days').format('MM/DD/YYYY');
    const start = moment(this.start, 'MM/DD/YYYY').subtract(7, 'days').format('MM/DD/YYYY');
    return new DateRange(start, end);
  }
};
