import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styled from 'styled-components';

import {
  Text,
} from '@bufferapp/components';

const Range = styled.span``;

const Date = ({ children }) => moment(children, 'MM/DD/YYYY').format('MMMM D, YYYY');

const DateRange = ({ startDate, endDate, large }) =>
  <Text
    weight="bold"
    color="black"
    size={(large ? 'extra-large' : null)}
  >
    <Range>
      <Date>{startDate}</Date> to <Date>{endDate}</Date>
    </Range>
  </Text>;

DateRange.defaultProps = {
  large: false,
};

DateRange.propTypes = {
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  large: PropTypes.bool,
};

export default DateRange;
