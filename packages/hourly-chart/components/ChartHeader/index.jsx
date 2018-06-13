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

const SecondaryMetricToggle = (props) => {
  if (props.metric) {
    return (<span style={toggleWrapper}>
      <Dropdown
        secondary
        selectMetric={props.selectMetric}
        open={props.secondaryDropdownOpen}
        toggleDropdown={props.toggleSecondaryDropdown}
        metrics={props.metrics}
        selectedMetric={props.metric}
      />
      <span style={toggleWrapper}>
        <Button
          onClick={props.hideSecondaryDropdown}
          noStyle
        >
          <CloseIcon size="small" />
        </Button>
      </span>
    </span>);
  }
  return (<span style={toggleWrapper}>
    <Button onClick={props.showSecondaryDropdown} noStyle>
      <span style={openButton}><PlusIcon size="small" /></span>
    </Button>
  </span>);
};

SecondaryMetricToggle.defaultProps = {
  metric: null,
};

SecondaryMetricToggle.propTypes = {
  showSecondaryDropdown: PropTypes.func.isRequired,
  toggleSecondaryDropdown: PropTypes.func.isRequired,
  hideSecondaryDropdown: PropTypes.func.isRequired,
  secondaryDropdownOpen: PropTypes.bool.isRequired,
  selectMetric: PropTypes.func.isRequired,
  metric: PropTypes.shape({
    label: PropTypes.string,
    hourlyMetrics: PropTypes.arrayOf(PropTypes.number),
  }),
  metrics: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    hourlyMetrics: PropTypes.arrayOf(PropTypes.number),
  })).isRequired,
};

const ChartHeader = (props) => {
  const metrics = props.metrics.filter(metric => (
    metric.label !== props.selectedMetric.label &&
      (!props.secondaryMetric || metric.label !== props.secondaryMetric.label)
  ));

  return (
    <section style={chartHeader}>
      <Dropdown
        metrics={metrics}
        selectMetric={props.selectMetric}
        open={props.dropdownOpen}
        toggleDropdown={props.toggleDropdown}
        selectedMetric={props.selectedMetric}
      />
      <TimezoneInfo timezone={props.timezone} />
    </section>
  );
};

ChartHeader.defaultProps = {
  secondaryMetric: null,
};

ChartHeader.propTypes = {
  selectedMetric: PropTypes.shape({
    label: PropTypes.string,
    color: PropTypes.string,
    hourlyMetrics: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
  secondaryMetric: PropTypes.shape({
    label: PropTypes.string,
    color: PropTypes.string,
    hourlyMetrics: PropTypes.arrayOf(PropTypes.number),
  }),
  timezone: PropTypes.string.isRequired,
  showSecondaryDropdown: PropTypes.func.isRequired,
  toggleSecondaryDropdown: PropTypes.func.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
  hideSecondaryDropdown: PropTypes.func.isRequired,
  dropdownOpen: PropTypes.bool.isRequired,
  secondaryDropdownOpen: PropTypes.bool.isRequired,
  selectMetric: PropTypes.func.isRequired,
  metrics: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    color: PropTypes.string,
    hourlyMetrics: PropTypes.arrayOf(PropTypes.number),
  })).isRequired,
};

export default ChartHeader;
