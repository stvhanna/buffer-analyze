import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import {
  Text,
} from '@bufferapp/components';

import {
  outerSpace,
} from '@bufferapp/components/style/color';

const Date = ({ children }) => moment(children, 'MM/DD/YYYY').format('MMMM D, YYYY');

const DateRange = ({ startDate, endDate }) =>
  <Text
    weight="semi-bold"
    color={outerSpace}
  >
    <Date>{startDate}</Date> to <Date>{endDate}</Date>
  </Text>;

DateRange.propTypes = {
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
};

export default DateRange;
