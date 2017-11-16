import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ArrowDownIcon from '@bufferapp/components/Icon/Icons/ArrowDownIcon';
import ArrowUpIcon from '@bufferapp/components/Icon/Icons/ArrowUpIcon';

import styles from './date-picker-button.less';
import {
  button,
} from '../styleGuide/components/ButtonSquareSecondary/button-square-secondary.less';


const styleButton = {
  cursor: 'pointer',
  display: 'flex',
  padding: '0.75rem 1rem',
  fontFamily: '"Roboto", sans-serif',
  fontSize: '0.75rem',
  fontWeight: 'bold',
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

const styleButtonDisabled = {
  ...styleButton,
  opacity: 0.2,
  pointerEvents: 'none',
};

import { Title, Subtitle } from './Titles';


        // <Subtitle startDate={startDate} endDate={endDate} />

const DatePickerButton = ({ isOpen, loading, startDate, endDate, handleClick }) => {
  const buttonClass = classNames(button, styles.button, {
    [styles.disabled]: loading,
  });

  return (
    <button
      style={(loading ? styleButtonDisabled : styleButton)}
      disabled={loading}
      onClick={handleClick}
    >
      <Title loading={loading} startDate={startDate} endDate={endDate} />
      <span className={styles.rightSide}>
        <span style={{ marginLeft: '5px' }}>
          { isOpen ?
            <ArrowUpIcon size="small" /> :
            <ArrowDownIcon size="small" /> }
        </span>
      </span>
    </button>
  );
};

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
