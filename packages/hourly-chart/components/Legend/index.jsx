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

const Legend = ({ metric }) =>
  <ul style={legendList}>
    <li style={legendItem}>
      <ColorIcon circle />
      <Text size="small">Tweets</Text>
    </li>
    <li style={legendItem}>
      <ColorIcon metric={metric.label} circle />
      <Text size="small">{metric.label}</Text>
    </li>
  </ul>;

Legend.propTypes = {
  metric: PropTypes.shape({
    label: PropTypes.string,
  }).isRequired
};

export default Legend;
