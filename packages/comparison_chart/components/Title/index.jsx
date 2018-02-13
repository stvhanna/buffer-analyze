import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '@bufferapp/components/Text';

function capitalizeMetricName(name) {
  return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
}

const TitleWrapper = styled.h2`
  margin: 0;
  padding: 0;
`;

const ComparisonTitle = ({ metricKey }) =>
  <TitleWrapper>
    <Text weight="bold" size="large">
      {capitalizeMetricName(metricKey)} comparison
    </Text>
  </TitleWrapper>
;

ComparisonTitle.propTypes = {
  metricKey: PropTypes.string.isRequired,
};

export default ComparisonTitle;

