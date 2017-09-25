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

const SecondaryMetricToggle = ({ metric, metrics, toggleSecondaryDropdown, showSecondaryDropdown, hideSecondaryDropdown, secondaryDropdownOpen, selectMetric }) => (
  <span style={toggleWrapper}>
    { metric && <Dropdown secondary selectMetric={selectMetric} open={secondaryDropdownOpen} toggleDropdown={toggleSecondaryDropdown} metrics={metrics} selectedMetric={metric} />}
    { metric && <Button onClick={hideSecondaryDropdown} noStyle><Text size="small" color="geyser"><span style={closeButton}>x</span></Text></Button>}
    { !metric && <Button onClick={showSecondaryDropdown} noStyle><span style={openButton}><PlusIcon size="small" /></span></Button>}
  </span>
);

SecondaryMetricToggle.propTypes = {
  metric: PropTypes.string,
  metrics: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    color: PropTypes.string,
    hourlyMetrics: PropTypes.arrayOf(PropTypes.number),
  })),
};

const ChartHeader = (props) => {
  const metrics = props.metrics.filter(metric => (
    metric.label !== props.selectedMetric.label &&
      (!props.secondaryMetric || metric.label !== props.secondaryMetric.label)
  ));
  return (
    <section style={chartHeader}>
      <Dropdown metrics={metrics} selectMetric={props.selectMetric} open={props.dropdownOpen} toggleDropdown={props.toggleDropdown} selectedMetric={props.selectedMetric} />
      <SecondaryMetricToggle
        metric={props.secondaryMetric}
        metrics={metrics}
        secondaryDropdownOpen={props.secondaryDropdownOpen}
        toggleSecondaryDropdown={props.toggleSecondaryDropdown}
        showSecondaryDropdown={props.showSecondaryDropdown}
        hideSecondaryDropdown={props.hideSecondaryDropdown}
        selectMetric={props.selectMetric}
      />
      <TimezoneInfo timezone={props.timezone} />
    </section>
  );
}

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
