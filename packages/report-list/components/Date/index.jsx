import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import {
  Text,
} from '@bufferapp/components';
import { presets } from '@bufferapp/analyze-date-picker';

const Date = styled.span`
  color: #c1c1c1;
`;


const DateComponent = ({ updated_at, small, date_range }) => {
  let date;
  if (date_range) {
    if (date_range.range) {
      date = presets.find(preset => preset.range === date_range.range).label;
    } else {
      date = `${moment.unix(date_range.start).format('MMMM D, YYYY')} to ${moment.unix(date_range.end).format('MMMM D, YYYY')}`;
    }
  } else {
    date = presets.find(preset => preset.range === 7).label;
  }
  return (
    <Text size={small ? 'small' : null}><Date>{date}</Date></Text>
  );
};

DateComponent.defaultProps = {
  small: false,
};

DateComponent.propTypes = {
  updated_at: PropTypes.number.isRequired,
  small: PropTypes.bool,
};

export default DateComponent;
