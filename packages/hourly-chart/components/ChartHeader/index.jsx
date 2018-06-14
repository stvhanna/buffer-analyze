import React from 'react';
import PropTypes from 'prop-types';

import {
  Button,
} from '@bufferapp/components';


import {
  PlusIcon,
  CloseIcon,
} from '@bufferapp/components/Icon/Icons';

import Dropdown from '../Dropdown';
import TimezoneInfo from '../TimezoneInfo';

const chartHeader = {
  display: 'flex',
  alignItems: 'center',
  padding: '1.25rem',
};

const toggleWrapper = {
  marginLeft: '0.75rem',
};

const openButton = {
  display: 'inline-block',
  padding: '7px 11px',
  border: '1px solid #ced7df',
  borderRadius: '3px',
  cursor: 'pointer',
};

const ChartHeader = (props) => {
  return (
    <section style={chartHeader}>
      <Dropdown
        metrics={props.metrics}
        selectMetric={props.selectMetric}
        open={props.dropdownOpen}
        toggleDropdown={props.toggleDropdown}
        selectedMetric={props.selectedMetric}
      />
      <TimezoneInfo timezone={props.timezone} />
    </section>
  );
};

ChartHeader.propTypes = {
  selectedMetric: PropTypes.shape({
    label: PropTypes.string,
    color: PropTypes.string,
    hourlyMetrics: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
  timezone: PropTypes.string.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
  dropdownOpen: PropTypes.bool.isRequired,
  selectMetric: PropTypes.func.isRequired,
  metrics: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    color: PropTypes.string,
    hourlyMetrics: PropTypes.arrayOf(PropTypes.number),
  })).isRequired,
};

export default ChartHeader;
