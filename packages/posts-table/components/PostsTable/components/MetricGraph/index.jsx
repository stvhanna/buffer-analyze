import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { TruncatedNumber } from '@bufferapp/analyze-shared-components';
import Text from '@bufferapp/components/Text';

const MetricBarGraph = styled.div`
  background-color: #666c72;
  // we need this to render bars in pdf
  -webkit-print-color-adjust: exact;
  display: block;
  height: 0.5rem;
  border-radius: 2px;
  font-size: 0.9em;
  font-weight: bold;
  padding: 0 0 0 0.5rem;
  background-color: ${props => props.color};
  width: ${props => props.percentage}%;

  &:hover {
    cursor: default;
  }
`;

const MetricBarGraphContainer = styled.div`
  position: relative;
  display: inline-block;
  // This is the maximum for each bar graph
  width: 95%;
  margin: 0 0 0.75rem;
`;

const MetricBarLabel = styled.div`
  margin: 0 0 0.25rem;
`;

const MetricGraph = ({ metric }) => {
  const { maxValue, value, color, key, label } = metric;

  let percentage = 0;
  if (maxValue > 0) {
    percentage = value / maxValue;
    percentage *= 100;
  }

  return (
    <div key={key}>
      <MetricBarGraphContainer>
        <MetricBarLabel>
          <Text size="small" weight="bold" color="outerSpace"><TruncatedNumber>{value}</TruncatedNumber></Text>
          <Text size="extra-small"> {label.toLowerCase()}</Text>
        </MetricBarLabel>
        <MetricBarGraph
          data-tip={label}
          color={color}
          percentage={percentage}
        />
      </MetricBarGraphContainer>
    </div>
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
