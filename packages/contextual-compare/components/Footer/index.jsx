import React from 'react';
import PropTypes from 'prop-types';

import {
  Text,
} from '@bufferapp/components';

import {
  MetricIcon,
} from '@bufferapp/analyze-shared-components';

const Metric = ({ metric }) => (
  <li
    style={{
      margin: '0 0.5rem',
    }}
  >
    <MetricIcon metric={metric} />
    <Text weight="bold" size="small">{metric.label}</Text>
  </li>
);

Metric.propTypes = {
  metric: PropTypes.shape({
    label: PropTypes.string,
  }).isRequired,
};


const Footer = ({ selectedMetrics }) => (
  <ul
    style={{
      alignItems: 'center',
      boxSizing: 'border-box',
      display: 'flex',
      position: 'relative',
      padding: '5px 10px',
      listStyle: 'none',
      justifyContent: 'center',
    }}
  >
    {selectedMetrics.map(metric => <Metric key={`contextual-footer-${metric.label}`} metric={metric} />)}
  </ul>
);

Footer.defaultProps = {
  loading: false,
};

Footer.propTypes = {
  selectedMetrics: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
  })).isRequired,
};

export default Footer;

