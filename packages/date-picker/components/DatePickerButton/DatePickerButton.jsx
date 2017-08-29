import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ArrowDownIcon from '@bufferapp/components/Icon/Icons/ArrowDownIcon';
import ArrowUpIcon from '@bufferapp/components/Icon/Icons/ArrowUpIcon';

import styles from './date-picker-button.less';
import {
  button,
} from '../styleGuide/components/ButtonSquareSecondary/button-square-secondary.less';

const Title = ({ loading, options }) => {
  if (loading) {
    return 'Loading...';
  } else {
    const selectedRange = options.find(range => range.selected);
    return selectedRange.label;
  }
};

const DatePickerButton = ({ isOpen, loading, title, subtitle, handleClick }) => {
  const buttonClass = classNames(button, styles.button, {
    [styles.disabled]: loading,
  });

  return (
    <button
      disabled={loading}
      className={buttonClass}
      onClick={handleClick}
    >
      <i className="bi-calendar" />
      <span>{title}</span>
      <span className={styles.rightSide}>
        <span className={styles.dateRange}>{subtitle}</span>
        <span style={{marginLeft: '5px'}}>
          { isOpen ?
            <ArrowUpIcon size="small" /> :
            <ArrowDownIcon size="small" /> }
        </span>
      </span>
    </button>
  );
};

DatePickerButton.defaultProps = {
  loading: false,
};

DatePickerButton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

export default DatePickerButton;
