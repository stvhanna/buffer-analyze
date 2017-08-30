import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import moment from 'moment';
import Button from '@bufferapp/components/Button';

import styles from './date-picker-form.less';

import DatePickerCalendar from '../DatePickerCalendar/';
import Presets from '../Presets/';

class Form extends Component {
  componentWillUpdate (nextProps) {
    if (nextProps.startDateFocus) {
      this._startDate.focus();
    }
  }

  updateSelectedDateRange() {
    const {
      startDate,
      endDate,
      // Actions
      setDateRange,
      close,
    } = this.props;

    if (startDate !== null && endDate !== null) {
      setDateRange(startDate, endDate);
      close();
    }
  }

  applyCustomDateRange() {
    const {
      startDate,
      endDate,
      // Actions
      setDateRange,
      close,
    } = this.props;

    if (startDate !== null && endDate !== null) {
      setDateRange(startDate, endDate);
      close();
    }
  }

  render () {
    // State
    const {
      calendarOpen,
      startDate,
      endDate,
      month,
    } = this.props;

    // Actions
    const {
      focusStartDate,
      focusEndDate,
      setStartDate,
      setEndDate,
      selectPreset,
      setMonth,
      clearStartDate,
      clearEndDate,
      maxDate,
      minDate,
    } = this.props;

    const startDateFocus = startDate === null;
    const endDateFocus = startDate !== null && endDate === null;

    const dateFormat = 'MM/DD/YY';

    const startDateFormat = startDate ? `Date from: ${moment.unix(startDate).format(dateFormat)}` : '';
    const endDateFormat = endDate ? `Date to: ${moment.unix(endDate).format(dateFormat)}` : '';

    const startDateInputClass = classNames(styles.startInput, {
      [styles.inputFocus]: startDateFocus,
    });

    const endDateInputClass = classNames(styles.endInput, {
      [styles.inputFocus]: endDateFocus,
    });

    const buttonClass = classNames({
      [styles.submitButton]: (startDate !== null) && (endDate !== null),
      [styles.submitButtonDisabled]: (startDate === null) || (endDate === null),
    });

    const customDateRangeContainerClass = classNames(styles.customDateRangeContainer, {
      [styles.customDateRangeContainerOpen]: calendarOpen,
    });

    return (
      <div>
        <Presets
          selectPreset={selectPreset}
          minStartDate={minDate}
          startDate={startDate}
          endDate={endDate}
        />
        <div className={customDateRangeContainerClass}>
          <h4 className={styles.title}>Select a custom date range</h4>

          <form className={styles.form}>
            <input
              ref={(node) => { this._startDate = node; }}
              type="text"
              name="start"
              value={startDateFormat}
              placeholder="Date from:"
              onFocus={focusStartDate}
              className={startDateInputClass}
            />
            <Button
              noStyle
              onClick={(e) => {
                e.preventDefault();
                clearStartDate();
              }}
            >
              <span className={styles.inputClear}>x</span>
            </Button>
            <input
              type="text"
              name="end"
              value={endDateFormat}
              placeholder="Date to:"
              onFocus={focusEndDate}
              className={endDateInputClass}
            />
            <Button
              noStyle
              onClick={(e) => {
                e.preventDefault();
                clearEndDate();
              }}
            >
              <span className={styles.inputClear}>x</span>
            </Button>
          </form>
          <DatePickerCalendar
            isOpen
            startDate={startDate}
            endDate={endDate}
            focusStartDate={startDateFocus}
            focusEndDate={endDateFocus}
            currentMonth={month}

            maxStartDate={minDate}
            maxEndDate={maxDate}
            selectStartDate={setStartDate}
            selectEndDate={setEndDate}
            selectMonth={setMonth}
          />
          <button
            className={buttonClass}
            onClick={() => this.applyCustomDateRange()}
          >
            Apply This Date Range
          </button>
        </div>
      </div>
    );
  }
}

Form.defaultProps = {
  startDate: null,
  endDate: null,
};

Form.propTypes = {
  startDate: PropTypes.number,
  endDate: PropTypes.number,
  month: PropTypes.number.isRequired,
  calendarOpen: PropTypes.bool.isRequired,
  minDate: PropTypes.number.isRequired,
  maxDate: PropTypes.number.isRequired,

  // Actions
  selectPreset: PropTypes.func.isRequired,
  focusEndDate: PropTypes.func.isRequired,
  focusStartDate: PropTypes.func.isRequired,
  setStartDate: PropTypes.func.isRequired,
  clearStartDate: PropTypes.func.isRequired,
  setEndDate: PropTypes.func.isRequired,
  clearEndDate: PropTypes.func.isRequired,
  setDateRange: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  setMonth: PropTypes.func.isRequired,
};

export default Form;
