import React from 'react';
import PropTypes from 'prop-types';

import ArrowDownIcon from '@bufferapp/components/Icon/Icons/ArrowDownIcon';
import ArrowUpIcon from '@bufferapp/components/Icon/Icons/ArrowUpIcon';

import Text from '@bufferapp/components/Text';

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
  opacity: 0.2,
  pointerEvents: 'none',
};

const DatePickerButton = ({ isOpen, loading, exporting, handleClick }) => {
  return (
    <button
      style={(loading || exporting ? buttonDisabledStyle : buttonStyle)}
      disabled={(exporting || exporting)}
      onClick={handleClick}
    >
      <Text size="small" weight="bold">{(exporting ? 'Exporting...' : 'Export as...')}</Text>
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
  loading: false,
};

DatePickerButton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  exporting: PropTypes.bool,
  loading: PropTypes.bool,
};

export default DatePickerButton;
