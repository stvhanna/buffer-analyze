import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  Text,
} from '@bufferapp/components';

const style = {
  marginLeft: 'auto',
};

const TimezoneInfo = ({ timezone }) =>
  <span style={style}>
    <Text color="nevada" size="mini">UTC {moment.tz(timezone).format('Z')}</Text>
  </span>;

TimezoneInfo.defaultProps = {
  timezone: 'America/Los_Angeles',
};

TimezoneInfo.propTypes = {
  timezone: PropTypes.string,
};

export default TimezoneInfo;
