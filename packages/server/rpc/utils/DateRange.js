const moment = require('moment');

module.exports = class DateRange {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  getDaysInRange() {
    const end = moment(this.end, 'MM/DD/YYYY');
    const start = moment(this.start, 'MM/DD/YYYY');
    return end.diff(start, 'days');
  }

  getPreviousDateRange() {
    const daysInRange = this.getDaysInRange() + 1;
    const end = moment(this.end, 'MM/DD/YYYY').subtract(daysInRange, 'days').format('MM/DD/YYYY');
    const start = moment(this.start, 'MM/DD/YYYY').subtract(daysInRange, 'days').format('MM/DD/YYYY');
    return new DateRange(start, end);
  }
};
