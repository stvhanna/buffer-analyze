import React from 'react';
import PropTypes from 'prop-types';

import ArrowDownIcon from '@bufferapp/components/Icon/Icons/ArrowDownIcon';
import ArrowUpIcon from '@bufferapp/components/Icon/Icons/ArrowUpIcon';

import { Title } from './Titles';

const buttonStyle = {
  cursor: 'pointer',
  display: 'flex',
  padding: '0.75rem 1rem',
  color: '#333333',
  textDecoration: 'none',
  textShadow: 'none',
  textAlign: 'left',
  border: '1px solid #D5E3EF',
  borderRadius: '3px',
  width: '100%',
  boxSizing: 'border-box',
  boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
  outline: '0 none',
};

const buttonDisabledStyle = {
  ...buttonStyle,
  pointerEvents: 'none',
};

const DatePickerButton = ({ isOpen, loading, startDate, endDate, handleClick }) => (
  <button
    style={(loading ? buttonDisabledStyle : buttonStyle)}
    disabled={loading}
    onClick={handleClick}
  >
    <Title loading={loading} startDate={startDate} endDate={endDate} />
    { !loading ?
      <span style={{ marginLeft: 'auto' }}>
        { isOpen ?
          <ArrowUpIcon size="small" /> :
          <ArrowDownIcon size="small" /> }
      </span> : null}
  </button>
);

DatePickerButton.defaultProps = {
  startDate: 0,
  endDate: 0,
  loading: false,
};

DatePickerButton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  startDate: PropTypes.number,
  endDate: PropTypes.number,
};

export default DatePickerButton;
