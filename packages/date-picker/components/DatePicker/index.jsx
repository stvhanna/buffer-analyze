/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Button from '../DatePickerButton/';
import Dropdown from '../DatePickerDropdown/';
import Form from '../DatePickerForm/';

const containerStyle = {
  position: 'relative',
  width: '16rem',
};

const catcherStyle = {
  display: 'none',
  position: 'fixed',
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  zIndex: 1,
};

const catcherOpenStyle = {
  ...catcherStyle,
  display: 'block',
};

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

  return (
    <div style={containerStyle}>
      <Button
        isOpen={isOpen}
        loading={loading}
        startDate={startDate}
        endDate={endDate}
        handleClick={() => (isOpen ? close() : open())}
      />
      <Dropdown isOpen={isOpen}>
        <Form {...props} />
      </Dropdown>

      <div
        style={(isOpen ? catcherOpenStyle : catcherStyle)}
        tabIndex="0"
        role="button"
        onClick={close}
      />
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
