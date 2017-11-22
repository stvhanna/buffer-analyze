import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '@bufferapp/components/Text';

const TitleWrapper = styled.h2`
  margin: 0;
  padding: 0;
`;

const ComparisonTitle = ({ chartName }) =>
  <TitleWrapper>
    <Text weight="bold" size="large">
      {chartName} comparison
    </Text>
  </TitleWrapper>
;

ComparisonTitle.propTypes = {
  chartName: PropTypes.string.isRequired,
};

export default ComparisonTitle;

