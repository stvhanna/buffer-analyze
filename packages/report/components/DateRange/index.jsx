import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import {
  Text,
} from '@bufferapp/components';

const Date = ({ children }) => moment(children, 'MM/DD/YYYY').format('MMMM D, YYYY');

const DateRange = ({ startDate, endDate }) =>
  <Text
    weight="medium"
    color="black"
  >
    <Date>{startDate}</Date> to <Date>{endDate}</Date>
  </Text>;

DateRange.propTypes = {
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
};

export default DateRange;
