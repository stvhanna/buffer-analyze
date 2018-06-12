import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TruncatedNumber } from '@bufferapp/analyze-shared-components';
import Text from '@bufferapp/components/Text';

const Container = styled.div`
  display: inline-block;
  width: 95%;
  margin: 0 0 0.75rem;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const Color = styled.div`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 8px;
  margin: 0 0.75rem 0 0;
  background: ${props => props.color};
`;

const MetricGraph = ({ metric }) => {
  const { color, value, key, label } = metric;

  return (
    <Container key={key}>
      <Color color={color} />
      <Text size="small" weight="bold" color="outerSpace"><TruncatedNumber>{value}</TruncatedNumber></Text>
      <Text size="small"> {label.toLowerCase()}</Text>
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
