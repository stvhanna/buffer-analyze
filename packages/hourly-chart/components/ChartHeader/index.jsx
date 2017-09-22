import React from 'react';
import PropTypes from 'prop-types';

import {
  Text,
  Button,
} from '@bufferapp/components';


import {
  PlusIcon,
} from '@bufferapp/components/Icon/Icons';

import Dropdown from '../Dropdown';
import TimezoneInfo from '../TimezoneInfo';

const chartHeader = {
  display: 'flex',
  alignItems: 'center',
  padding: '1.25rem',
};

const toggleWrapper = {
  marginLeft: '1.25rem',
};

const closeButton = {
  marginTop: 'auto',
  marginBottom: 'auto',
  marginLeft: '10px',
  cursor: 'pointer',
  lineHeight: '1',
};

const openButton = {
  display: 'inline-block',
  padding: '7px 11px',
  border: '1px solid #ced7df',
  borderRadius: '3px',
  cursor: 'pointer',
};

const SecondaryMetricToggle = ({ metric, metrics }) => (
  <span style={toggleWrapper}>
    { metric && <Dropdown metrics={metrics} selectedMetric={metric} />}
    { metric && <Button noStyle><Text size="small" color="geyser"><span style={closeButton}>x</span></Text></Button>}
    { !metric && <Button noStyle><span style={openButton}><PlusIcon size="small" /></span></Button>}
  </span>
);

SecondaryMetricToggle.defaultProps 

SecondaryMetricToggle.propTypes = {
  metric: PropTypes.string,
  metrics: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    color: PropTypes.string,
    hourlyMetrics: PropTypes.arrayOf(PropTypes.number),
  })),
};

const ChartHeader = ({ metrics, selectedMetric, secondaryMetric, timezone }) => (
  <section style={chartHeader}>
    <Dropdown metrics={metrics} selectedMetric={selectedMetric} />
    <SecondaryMetricToggle metric={secondaryMetric} metrics={metrics} />
    <TimezoneInfo timezone={timezone} />
  </section>
);

ChartHeader.propTypes = {
  selectedMetric: PropTypes.string,
  secondaryMetric: PropTypes.string,
  timezone: PropTypes.string.isRequired,
  metrics: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    color: PropTypes.string,
    hourlyMetrics: PropTypes.arrayOf(PropTypes.number),
  })),
};

export default ChartHeader;
