/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import moment from 'moment';

import styles from './date-picker.less';

import DatePickerButton from '../DatePickerButton/';
import DatePickerDropdown from '../DatePickerDropdown/';
import DatePickerForm from '../DatePickerForm/';

const DatePicker = (props) => {
  const {
    isOpen,
    loading,
    startDate,
    endDate,
    // Actions
    open,
    close,
  } = props;

  const clickCatcherClass = classNames(styles.clickCatcher, {
    [styles.clickCatcherActive]: isOpen,
  });

  return (
    <div style={{ position: 'relative' }}>
      <DatePickerButton
        isOpen={isOpen}
        loading={loading}
        startDate={startDate}
        endDate={endDate}
        handleClick={() => (isOpen ? close() : open())}
      />
      { !loading &&
        <DatePickerDropdown isOpen={isOpen}>
          <DatePickerForm {...props} />
        </DatePickerDropdown>
      }

      <div tabIndex="0" role="button" onClick={close} className={clickCatcherClass} />
    </div>
  );
};

DatePicker.defaultProps = {
  customStartDate: -1,
  customEndDate: -1,
  customMonth: moment().startOf('month').unix(),
  startDate: null,
  endDate: null,
};

DatePicker.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  startDate: PropTypes.number,
  endDate: PropTypes.number,

  // Actions
  open: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
};

export default DatePicker;
