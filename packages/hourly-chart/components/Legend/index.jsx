import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Text,
} from '@bufferapp/components';
import ColorIcon from '../ColorIcon';

const LegendList = styled.ul`
  padding: 1rem 1.5rem 0.75rem;
  margin: 0 0 1rem;
  text-align: center;
`;

const LegendItem = styled.li`
  display: inline-block;
  padding: 0.8rem;
  margin: 0 .8rem;
`;

const Legend = ({ metric, secondaryMetric }) =>
  <LegendList>
    <LegendItem>
      <ColorIcon circle />
      <Text size="small">Tweets</Text>
    </LegendItem>
    <LegendItem>
      <ColorIcon metric={metric.label} circle />
      <Text size="small">{metric.label}</Text>
    </LegendItem>
    { secondaryMetric && <LegendItem>
      <ColorIcon metric={secondaryMetric.label} circle />
      <Text size="small">{secondaryMetric.label}</Text>
    </LegendItem> }
  </LegendList>;

Legend.defaultProps = {
  secondaryMetric: null,
};

Legend.propTypes = {
  metric: PropTypes.shape({
    label: PropTypes.string,
  }).isRequired,
  secondaryMetric: PropTypes.shape({
    label: PropTypes.string,
  }),
};

export default Legend;
