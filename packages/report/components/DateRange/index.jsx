import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  Text,
} from '@bufferapp/components';
import styled from 'styled-components';

const Range = styled.span``;

const Date = ({ children }) => moment(children, 'MM/DD/YYYY').format('MMMM D, YYYY');

const DateRange = ({ startDate, endDate }) =>
  <Text weight="bold" color="black">
    <Range>
      <Date>{startDate}</Date> to <Date>{endDate}</Date>
    </Range>
  </Text>;

DateRange.propTypes = {
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
};

export default DateRange;
