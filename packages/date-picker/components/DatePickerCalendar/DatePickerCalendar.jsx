import React, {
  Component,
  PropTypes
} from 'react';

import moment from 'moment';
import classNames from 'classnames';

import Month from './DatePickerCalendarMonth';

import styles from './date-picker-calendar.less';

class DatePickerCalendar extends Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    startDate: PropTypes.number.isRequired,
    endDate: PropTypes.number.isRequired,
    focusStartDate: PropTypes.bool.isRequired,
    focusEndDate: PropTypes.bool.isRequired,
    currentMonth: PropTypes.number.isRequired,
    maxStartDate: PropTypes.number,
    maxEndDate: PropTypes.number,

    // Actions
    selectStartDate: PropTypes.func.isRequired,
    selectEndDate: PropTypes.func.isRequired,
    selectMonth: PropTypes.func.isRequired
  };

  previousMonth (unixTimestamp) {
    const m = moment.unix(unixTimestamp);
    m.subtract(1, 'months');
    this.props.selectMonth(m.unix());
  }

  nextMonth (unixTimestamp) {
    const m = moment.unix(unixTimestamp);
    m.add(1, 'months');
    this.props.selectMonth(m.unix());
  }

  getHeader(unixTimestamp) {
    let m = moment.unix(unixTimestamp);
    let currentMonth = m.format('MMMM YYYY');

    let arrowLeftClass = classNames('bi-arrow-left', styles.arrowLeft);
    let arrowRightClass = classNames('bi-arrow-right', styles.arrowRight);

    return (
      <header className={styles.header}>
        <i onClick={this.previousMonth.bind(this, unixTimestamp)} className={arrowLeftClass}></i>
        {currentMonth}
        <i onClick={this.nextMonth.bind(this, unixTimestamp)} className={arrowRightClass}></i>
      </header>
    )
  }

  getMonthHeader ( ){
    let days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => {
      return (
        <li className={styles.dayHeaderListItem}
            key={index}>
          {day}
        </li>
      );
    });

    return (
      <ul className={styles.dayHeaderList}>
        {days}
      </ul>
    );
  }

  handleDayClick (day) {
    const {
      startDate,
      endDate,
      focusStartDate,
      focusEndDate,
      // Actions
      selectStartDate,
      selectEndDate
    } = this.props;

    let m = moment.unix(day.timestamp);
    let mEndDate = moment.unix(endDate);
    let mStartDate = moment.unix(startDate);

    if (focusStartDate){
      selectStartDate(day.timestamp);
    } else if (focusEndDate && (startDate === -1 || m.isAfter(mStartDate)) ){
      selectEndDate(day.timestamp);
    }
  }

  render () {
    const {
      startDate,
      endDate,
      maxStartDate,
      maxEndDate,
      isOpen,
      currentMonth
    } = this.props ;

    let header = this.getHeader(currentMonth)
    let monthHeader = this.getMonthHeader();

    var calendarClass = classNames(styles.calendar, {
      [styles.calendarOpen]: isOpen
    });

    return (
      <aside className={calendarClass}>
        {header}
        {monthHeader}
        <Month handleDayClick={this.handleDayClick.bind(this)}
               currentMonth={currentMonth}
               startDate={startDate}
               endDate={endDate}
               maxStartDate={maxStartDate}
               maxEndDate={maxEndDate} />
      </aside>
    )
  }
}

export default DatePickerCalendar;
