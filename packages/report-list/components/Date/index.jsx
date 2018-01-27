import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import {
  Text,
} from '@bufferapp/components';

const Date = styled.span`
  color: #c1c1c1;
`;


const DateComponent = ({ updated_at, small }) =>
  <Text size={small ? 'small' : null}><Date>{moment(updated_at, 'x').format('MMMM D, YYYY')}</Date></Text>;

DateComponent.defaultProps = {
  small: false,
};

DateComponent.propTypes = {
  updated_at: PropTypes.number.isRequired,
  small: PropTypes.bool,
};

export default DateComponent;
