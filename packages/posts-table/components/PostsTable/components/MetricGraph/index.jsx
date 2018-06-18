import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  TruncatedNumber,
  MetricIcon,
} from '@bufferapp/analyze-shared-components';

import Text from '@bufferapp/components/Text';

const Container = styled.div`
  display: inline-block;
  width: 95%;
  margin: 0 0 0.75rem;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const MetricText = styled.span`
  display: inline-block;
  margin: 0 0 0 0.25rem;
`;

const MetricGraph = ({ metric }) => {
  const { value, key, label } = metric;

  return (
    <Container key={key}>
      <MetricIcon metric={metric} />
      <MetricText>
        <Text size="small" weight="bold" color="outerSpace"><TruncatedNumber>{value}</TruncatedNumber></Text>
        <Text size="small"> {label.toLowerCase()}</Text>
      </MetricText>
    </Container>
  );
};

MetricGraph.propTypes = {
  metric: PropTypes.shape({
    maxValue: PropTypes.number,
    value: PropTypes.number,
    color: PropTypes.String,
    key: PropTypes.String,
    label: PropTypes.String,
  }).isRequired,
};

export default MetricGraph;
