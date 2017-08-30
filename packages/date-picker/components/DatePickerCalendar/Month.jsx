import React, {
  Component,
  PropTypes
} from 'react';

import ReactTooltip from 'react-tooltip';

import moment from 'moment';

import styles from './date-picker-calendar.less';
import Day from './Day';

class DatePickerCalendarMonth extends Component {
  static propTypes = {
    currentMonth: PropTypes.number.isRequired,
    startDate: PropTypes.number.isRequired,
    endDate: PropTypes.number.isRequired,
    maxStartDate: PropTypes.number.isRequired,
    maxEndDate: PropTypes.number.isRequired,
    // Actions
    handleDayClick: PropTypes.func,
  }

  getFirstDayOfWeek (unixTimestamp) {
    var m = moment.unix(unixTimestamp).startOf('month');
    var dayOfWeek = m.day();

    // If the start of the month is not a monday
    // subtract days until last monday
    if (dayOfWeek !== 1) {
      var daysFromMonday = (dayOfWeek-1);
      m.subtract(daysFromMonday, 'days');
    }

    return m.unix();
  }

  isInRange(unixTimestamp) {

    const {
      startDate,
      endDate
    } = this.props;

    let mStartDate = moment.unix(startDate);
    let mEndDate   = moment.unix(endDate);

    let mTestDate = moment.unix(unixTimestamp);

    if (mStartDate.isSame(mTestDate, 'day')) {
      return -1;
    } else if (mTestDate.isBetween(mStartDate, mEndDate) && startDate !== -1 && endDate !== -1) {
      return 0;
    } else if (mEndDate.isSame(mTestDate, 'day')){
      return 1;
    }

    return false;
  }

  isSelectedBetween (unixTimestamp) {
    return this.isInRange(unixTimestamp) === 0;
  }

  isSelectedStart (unixTimestamp) {
    return this.isInRange(unixTimestamp) === -1;
  }

  isSelectedEnd (unixTimestamp) {
    return this.isInRange(unixTimestamp) === 1;
  }

  isInValidRange(unixTimestamp) {
    const {
      maxStartDate,
      maxEndDate
    } = this.props;

    let m = moment.unix(unixTimestamp);

    // start date should always be inclusive
    let mMaxStartDate = moment.unix(maxStartDate).subtract(1, 'days');
    let mMaxEndDate   = moment.unix(maxEndDate);

    return m.isBetween(mMaxStartDate, mMaxEndDate);
  }

  formatMonth(unixTimestamp) {
    let month = moment.unix(unixTimestamp).startOf('month').month();
    let year = moment.unix(unixTimestamp).year();
    let m = moment.unix(this.getFirstDayOfWeek(unixTimestamp));
    let grid = [[]];

    const {
      startDate,
      endDate,
      maxStartDate,
      maxEndDate
    } = this.props;

    let endOfMonthGrid = false;
    let endOfWeek  = false;
    let endOfMonth = false;

    var time = moment().unix();

    let mMaxStartDate = moment.unix(maxStartDate);

    while (!endOfMonthGrid) {
      var weekIndex = grid.length - 1;

      let showTooltip = m.isBefore(mMaxStartDate);

      grid[weekIndex].push({
        timestamp: m.unix(),
        day: m.date(),
        today: m.isSame(moment(), 'day'),
        inMonth: m.month() === month,
        selectedBetween: this.isSelectedBetween(m.unix()),
        selectedStart: this.isSelectedStart(m.unix()),
        selectedEnd: this.isSelectedEnd(m.unix()),
        isDisabled: !this.isInValidRange(m.unix()),
        disabledText: showTooltip ? `We don't have data prior to ${mMaxStartDate.format('MM/DD/YY')}`: '',
        startDate: startDate,
        endDate: endDate
      });

      endOfWeek  = m.day() === 0;
      endOfMonth = m.month() > month || m.year() > year;

      if (endOfWeek && endOfMonth) {
        endOfMonthGrid = true;
      } else if (endOfWeek) {
        grid.push([]);
      }

      m.add(1, 'day');
    }

    return grid;
  }

  getDays(weekList) {
    var handleDayClick = this.props.handleDayClick;
    var _this = this;

    return weekList.map((day, index) => {
      return (<Day {...day}
                   key={index}
                   handleClick={handleDayClick.bind(_this, day)} />);
    });
  }

  getMonth (unixTimestamp) {
    const {
      startDate,
      endDate,
      maxStartDate,
      maxEndDate
    } = this.props;

    let monthGrid = this.formatMonth(unixTimestamp, startDate, endDate, maxStartDate, maxEndDate);

    return monthGrid.map((weekList, index) => {
      let days = this.getDays(weekList);
      return (
        <div className={styles.week} key={index}>
          {days}
        </div>
      );
    });
  }

  componentDidUpdate(nextProps) {
    if (this.props.currentMonth !== nextProps.currentMonth) {
      ReactTooltip.rebuild();
    }
  }

  render () {
    const {
      currentMonth
    } = this.props;

    return (
      <div>
        {this.getMonth(currentMonth)}
      </div>
    )
  }
}

export default DatePickerCalendarMonth;
