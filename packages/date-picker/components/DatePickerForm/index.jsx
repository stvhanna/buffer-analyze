import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import moment from 'moment';

import styles from './date-picker-form.less';

import DatePickerCalendar from '../DatePickerCalendar/';
import Presets from '../Presets/';


class DatePickerForm extends Component {

  static propTypes = {
    profileId: PropTypes.string.isRequired,
    presetOptions: PropTypes.array.isRequired,
    selectPreset: PropTypes.number.isRequired,
    startDateFocus: PropTypes.bool.isRequired,
    endDateFocus: PropTypes.bool.isRequired,
    customStartDate: PropTypes.number.isRequired,
    customEndDate: PropTypes.number.isRequired,
    startDate: PropTypes.number.isRequired,
    endDate: PropTypes.number.isRequired,
    customMonth: PropTypes.number.isRequired,
    customFormOpen: PropTypes.bool.isRequired,
    minDate: PropTypes.number.isRequired,
    maxDate: PropTypes.number.isRequired,

    // Actions
    selectPreset: PropTypes.func.isRequired,
    focusEndDate: PropTypes.func.isRequired,
    focusStartDate: PropTypes.func.isRequired,
    selectCustomStartDate: PropTypes.func.isRequired,
    selectCustomEndDate: PropTypes.func.isRequired,
    setAnalyticsDateRange: PropTypes.func.isRequired,
    setDatePickerDateRange: PropTypes.func.isRequired,
    closeDatePicker: PropTypes.func.isRequired,
    setCustomMonth: PropTypes.func.isRequired
  };

  updateSelectedDateRange() {
    const {
      profileId,
      startDate,
      endDate,
      // Actions
      setAnalyticsDateRange,
      closeDatePicker
    } = this.props;

    if (startDate !== -1 && endDate !== -1) {
      // set the analytics start and end date to the date pickers start and end date
      setAnalyticsDateRange(profileId, startDate, endDate);
      closeDatePicker( );
    }
  }

  handleApplyCustomDateRangeButtonClick (event) {
    const {
      profileId,
      startDate,
      endDate,
      // Actions
      setAnalyticsDateRange,
      setDatePickerDateRange,
      closeDatePicker
    } = this.props;

    if (startDate !== -1 && endDate !== -1) {
      // set the analytics start and end date to the date pickers start and end date
      setAnalyticsDateRange(profileId, startDate, endDate);
      setDatePickerDateRange(startDate, endDate);
      closeDatePicker( );
    }
  }

  handleHeaderItemClick(index, option, selectPreset) {
    selectPreset(index, option.range);
  }

  componentWillUpdate (nextProps) {
    if (nextProps.startDateFocus) {
      this._startDate.focus();
    }
  }

  render () {
    // State
    const {
      startDateFocus,
      endDateFocus,
      customFormOpen,
      startDate,
      endDate,
      customMonth,
      minStartDate,
    } = this.props;

    // Actions
    const {
      focusStartDate,
      focusEndDate,
      selectCustomStartDate,
      selectCustomEndDate,
      selectPreset,
      setCustomMonth,
      clearCustomStartDate,
      clearCustomEndDate,
      maxDate,
      minDate,
    } = this.props;

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
      [styles.submitButton]: (startDate !== -1) && (endDate !== -1),
      [styles.submitButtonDisabled]: (startDate === -1) || (endDate === -1),
    });

    const customDateRangeContainerClass = classNames(styles.customDateRangeContainer, {
      [styles.customDateRangeContainerOpen]: customFormOpen,
    });

    return (
      <div>
        <Presets selectPreset={selectPreset} minStartDate={minStartDate} startDate={startDate} endDate={endDate} />
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
            <span role="button" className={styles.inputClear} onClick={clearCustomStartDate}>x</span>
            <input
              type="text"
              name="end"
              value={endDateFormat}
              placeholder="Date to:"
              onFocus={focusEndDate}
              className={endDateInputClass}
            />
            <span role="button" className={styles.inputClear} onClick={clearCustomEndDate}>x</span>
          </form>
          <DatePickerCalendar
            isOpen
            startDate={startDate}
            endDate={endDate}
            focusStartDate={startDateFocus}
            focusEndDate={endDateFocus}
            currentMonth={customMonth}

            maxStartDate={minDate}
            maxEndDate={maxDate}
            selectStartDate={selectCustomStartDate}
            selectEndDate={selectCustomEndDate}
            selectMonth={setCustomMonth}
          />
          <button
            className={buttonClass}
            onClick={this.handleApplyCustomDateRangeButtonClick.bind(this)}
          >
            Apply This Date Range
          </button>
        </div>
      </div>
    );
  }
}

export default DatePickerForm;
