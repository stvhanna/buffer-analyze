import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import styles from './date-picker-button.less';

const formatDate = (date, dateFormat = 'MM/DD/YY') =>
  moment.unix(date).format(dateFormat);

const PRESETS = [
  {
    name: '90 Days',
    label: 'Past 90 Days',
    range: 90,
  },
  {
    name: '30 Days',
    label: 'Past 30 Days',
    range: 30,
  },
  {
    name: '28 Days',
    label: 'Past 28 Days',
    range: 28,
  },
  {
    name: '7 Days',
    label: 'Past 7 Days',
    range: 7,
  },
  {
    name: 'Yesterday',
    label: 'Yesterday',
    range: 1,
  },
  {
    name: 'Custom',
    label: 'Custom',
    range: Infinity,
  },
];

const isRangeSelected = (range, start, end) => {
  const rangeEnd = moment().subtract(1, 'day').format('MM/DD/YYYY');
  const rangeStart = moment().subtract(range, 'days').format('MM/DD/YYYY');

  const rangesMatch = (
    rangeStart === moment.unix(start).format('MM/DD/YYYY') &&
    rangeEnd === moment.unix(end).format('MM/DD/YYYY')
  );

  return (rangesMatch || range === Infinity);
};

const Title = ({ loading, startDate, endDate }) => {
  let title;
  if (loading) {
    title = 'Loading...';
  } else {
    const selectedRange = PRESETS.find(preset => isRangeSelected(preset.range, startDate, endDate));
    if (selectedRange.label === 'Custom' && startDate && endDate) {
      const from = formatDate(startDate);
      const to = formatDate(endDate);
      title = `From: ${from} - To: ${to}`;
    } else {
      title = selectedRange.label;
    }
  }
  return (<span>{title}</span>);
};

Title.defaultProps = {
  loading: false,
  startDate: 0,
  endDate: 0,
};

Title.propTypes = {
  startDate: PropTypes.number,
  endDate: PropTypes.number,
  loading: PropTypes.bool,
};


const Subtitle = ({ startDate, endDate }) => {
  let subtitle = '';
  const selectedRange = PRESETS.find(preset => isRangeSelected(preset.range, startDate, endDate));
  if (selectedRange.label !== 'Custom' && startDate && endDate) {
    const from = formatDate(startDate);
    const to = formatDate(endDate);

    if (from !== to) {
      subtitle = `${from} to ${to}`;
    }
  }

  return (<span className={styles.dateRange}>{subtitle}</span>);
};

Subtitle.defaultProps = {
  startDate: 0,
  endDate: 0,
};

Subtitle.propTypes = {
  startDate: PropTypes.number,
  endDate: PropTypes.number,
};


export { Title, Subtitle };
