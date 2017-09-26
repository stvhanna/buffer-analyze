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
      <ColorIcon />
      <Text size="mini">Tweets</Text>
    </li>
    <li style={legendItem}>
      <ColorIcon metric={metric.label} />
      <Text size="mini">{metric.label}</Text>
    </li>
    { secondaryMetric && <li style={legendItem}>
      <ColorIcon circle metric={secondaryMetric.label} />
      <Text size="mini">{secondaryMetric.label}</Text>
    </li> }
  </ul>;

Legend.propTypes = {
  metric: PropTypes.shape({
    label: PropTypes.string,
  }).isRequired,
  secondaryMetric: PropTypes.shape({
    label: PropTypes.string,
  }).isRequired,
};

export default Legend;
