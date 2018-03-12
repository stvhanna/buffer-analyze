import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
} from '@bufferapp/components';
import ColorIcon from '../ColorIcon';

const legendItem = {
  display: 'inline-block',
  padding: '.8rem',
  margin: '0 .8rem',
};

const legendList = {
  padding: '0 1.5rem',
  marginBottom: '1.5rem',
  textAlign: 'center',
};

const Legend = ({ metric, secondaryMetric }) =>
  <ul style={legendList}>
    <li style={legendItem}>
      <ColorIcon circle />
      <Text size="small">Tweets</Text>
    </li>
    <li style={legendItem}>
      <ColorIcon metric={metric.label} circle />
      <Text size="small">{metric.label}</Text>
    </li>
    { secondaryMetric && <li style={legendItem}>
      <ColorIcon metric={secondaryMetric.label} circle />
      <Text size="small">{secondaryMetric.label}</Text>
    </li> }
  </ul>;

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
