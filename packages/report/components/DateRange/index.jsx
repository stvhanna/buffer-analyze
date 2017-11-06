import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  Text,
} from '@bufferapp/components';
import styled from 'styled-components';

const DateString = styled.span`
  color: #717A86;
`;

const Range = styled.span`
  color: #343E47;
`;

const Date = ({ children }) => moment.unix(children).format('MMMM D, YYYY');

const DateRange = ({ startDate, endDate }) =>
  <Text weight="bold">
    <DateString>Showing for dates</DateString> <Range>
      <Date>{startDate}</Date> to <Date>{endDate}</Date>
    </Range>
  </Text>;

DateRange.propTypes = {
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
};

export default DateRange;
