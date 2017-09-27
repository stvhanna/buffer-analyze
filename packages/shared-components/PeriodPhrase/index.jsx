import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const formatDateRange = (startDate, endDate) => {
  const start = moment.unix(startDate);
  const end = moment.unix(endDate);

  const daysFrom = end.diff(start, 'days') + 1;
  const yearsFrom = end.diff(start, 'years');

  const range = {
    start: 'Today',
    end: 'Yesterday',
    dayRange: daysFrom,
  };

  if (daysFrom === 0) {
    range.start = 'today';
    range.end = 'yesterday';
  } else if (daysFrom === 1) {
    range.start = 'yesterday';
    range.end = moment().subtract(2, 'days').startOf('day').format('dddd');
  } else if (daysFrom > 1 && daysFrom < 345) {
    range.start = `${daysFrom} days`;
    range.end = `${daysFrom} days`;
  } else if (daysFrom > 345) {
    const yearPrefix = yearsFrom === 1 ? 'year' : 'years';
    range.start = `${yearsFrom} ${yearPrefix}`;
    range.end = `${yearsFrom} ${yearPrefix}`;
  }

  return range;
};

const PeriodPhrase = ({ startDate, endDate, previous }) => {
  const range = formatDateRange(startDate, endDate);
  if (range.start.match(/today|yesterday/)) {
    return (<span>{range.start}</span>);
  }
  return (<span>the { previous ? 'previous' : 'selected' } {range.start}</span>);
};

PeriodPhrase.defaultProps = {
  startDate: null,
  endDate: null,
  previous: false,
};

PeriodPhrase.propTypes = {
  startDate: PropTypes.number,
  endDate: PropTypes.number,
  previous: PropTypes.bool,
};

export default PeriodPhrase;
