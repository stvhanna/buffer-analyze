import React from 'react';
import PropTypes from 'prop-types';
import Text from '@bufferapp/components/Text';

import { PeriodPhrase } from '@bufferapp/analyze-shared-components';

const title = {
  margin: '2rem 0 1rem',
};

const Title = ({ profileService, startDate, endDate }) =>
  <h2 style={title}>
    <Text>
      {profileService === 'twitter' ? 'Tweet performance ' : 'Performance '}
      for <PeriodPhrase startDate={startDate} endDate={endDate} /> compared to the previous period
    </Text>
  </h2>
;

Title.defaultProps = {
  startDate: null,
  endDate: null,
};

Title.propTypes = {
  profileService: PropTypes.string.isRequired,
  startDate: PropTypes.number,
  endDate: PropTypes.number,
};

export default Title;

