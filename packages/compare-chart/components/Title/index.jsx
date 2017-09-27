import React from 'react';
import PropTypes from 'prop-types';
import Text from '@bufferapp/components/Text';

import { PeriodPhrase } from '@bufferapp/analyze-shared-components';

const title = {
  margin: '2rem 0 1rem',
};

const Title = ({ startDate, endDate }) =>
  <h2 style={title}>
    <Text>
      Metrics breakdown over <PeriodPhrase startDate={startDate} endDate={endDate} />
    </Text>
  </h2>
;

Title.defaultProps = {
  startDate: null,
  endDate: null,
};

Title.propTypes = {
  startDate: PropTypes.number,
  endDate: PropTypes.number,
};

export default Title;

