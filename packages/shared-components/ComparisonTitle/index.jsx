import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '@bufferapp/components/Text';

const TitleWrapper = styled.h2`
  margin: '2rem 0 1rem',
`;

const ComparisonTitle = ({ chartName }) =>
  <TitleWrapper>
    <Text weight="bold" size="extra-large">
      {chartName} comparison
    </Text>
  </TitleWrapper>
;

ComparisonTitle.propTypes = {
  chartName: PropTypes.string.isRequired,
};

export default ComparisonTitle;

