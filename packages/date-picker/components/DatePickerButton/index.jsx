import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ArrowDownIcon from '@bufferapp/components/Icon/Icons/ArrowDownIcon';
import ArrowUpIcon from '@bufferapp/components/Icon/Icons/ArrowUpIcon';

import styles from './date-picker-button.less';
import {
  button,
} from '../styleGuide/components/ButtonSquareSecondary/button-square-secondary.less';

import { Title, Subtitle } from './Titles';

const DatePickerButton = ({ isOpen, loading, startDate, endDate, handleClick }) => {
  const buttonClass = classNames(button, styles.button, {
    [styles.disabled]: loading,
  });

  return (
    <button
      disabled={loading}
      className={buttonClass}
      onClick={handleClick}
    >
      <Title loading={loading} startDate={startDate} endDate={endDate} />
      <span className={styles.rightSide}>
        <Subtitle startDate={startDate} endDate={endDate} />
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
