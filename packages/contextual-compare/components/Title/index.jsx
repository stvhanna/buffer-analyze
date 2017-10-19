import React from 'react';
import PropTypes from 'prop-types';
import Text from '@bufferapp/components/Text';

import { PeriodPhrase } from '@bufferapp/analyze-shared-components';

function getStartDate(dailyData) {
  return dailyData.length ? dailyData[0].day / 1000 : null;
}

function getEndDate(dailyData) {
  return dailyData.length ? dailyData[dailyData.length - 1].day / 1000 : null;
}

const title = {
  margin: '2rem 0 1rem',
};

const Title = ({ dailyData }) =>
  <h2 style={title}>
    <Text>
      Engagement & Audience over <PeriodPhrase
        startDate={getStartDate(dailyData)}
        endDate={getEndDate(dailyData)}
      />
    </Text>
  </h2>
;

Title.defaultProps = {
  startDate: null,
  endDate: null,
};

Title.propTypes = {
  dailyData: PropTypes.arrayOf(PropTypes.shape({
    day: PropTypes.string.isRequired,
  })).isRequired,
};

export default Title;

