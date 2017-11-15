import React from 'react';
import PropTypes from 'prop-types';

import ArrowDownIcon from '@bufferapp/components/Icon/Icons/ArrowDownIcon';
import ArrowUpIcon from '@bufferapp/components/Icon/Icons/ArrowUpIcon';

import Title from './Title';

const styleButton = {
  cursor: 'pointer',
  display: 'flex',
  boxSizing: 'border-box',
  margin: 0,
  padding: '1rem',
  fontFamily: '"Roboto", sans-serif',
  fontSize: '1rem',
  color: '#333333',
  textDecoration: 'none',
  textShadow: 'none',
  textAlign: 'left',
  border: '1px solid #AAAAAA',
  borderRadius: '3px',
  width: '100%',
};

const styleButtonDisabled = {
  ...styleButton,
  opacity: 0.2,
  pointerEvents: 'none',
};

const DatePickerButton = ({ isOpen, exporting, handleClick }) => {
  return (
    <button
      style={(exporting) ? styleButtonDisabled : styleButton}
      disabled={exporting}
      onClick={handleClick}
    >
      <Title exporting={exporting} />
      <span style={{ marginLeft: 'auto' }}>
        { isOpen ?
          <ArrowUpIcon size="small" /> :
          <ArrowDownIcon size="small" /> }
      </span>
    </button>
  );
};

DatePickerButton.defaultProps = {
  startDate: 0,
  endDate: 0,
  exporting: false,
};

DatePickerButton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  exporting: PropTypes.bool,
};

export default DatePickerButton;
