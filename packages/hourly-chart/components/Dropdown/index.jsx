import React from 'react';
import PropTypes from 'prop-types';
import {
  ArrowDownIcon,
  ArrowUpIcon,
  Text,
} from '@bufferapp/components';

import Dropdown, {
  DropdownTrigger,
  DropdownContent,
} from '@bufferapp/analyze-shared-components/Dropdown';

import List from './List';
import ColorIcon from './ColorIcon';

const triggerContainer = {
  padding: '5px 0',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
};

const dropdown = {
  width: '10rem',
  display: 'inline-block',
};

const MetricDropdown = ({ metrics, open, selectedMetric }) => (
  <div style={dropdown}>
    <Dropdown>
      <DropdownTrigger isDropdownOpen={open}>
        <div style={triggerContainer}>
          <ColorIcon color={metrics[selectedMetric].color} />
          <Text size="small">{metrics[selectedMetric].label}</Text>
          <span style={{ marginLeft: 'auto' }} >
            { open && <ArrowUpIcon size="small" /> }
            { !open && <ArrowDownIcon size="small" /> }
          </span>
        </div>
      </DropdownTrigger>
      <DropdownContent isDropdownOpen={open}>
        <List metrics={metrics} selectedMetric={selectedMetric} />
      </DropdownContent>
    </Dropdown>
  </div>
);

MetricDropdown.defaultProps = {
  metrics: [],
  open: false,
  selectedMetric: 0,
};

MetricDropdown.propTypes = {
  open: PropTypes.bool,
  selectedMetric: PropTypes.number,
  metrics: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    color: PropTypes.string,
    hourlyMetrics: PropTypes.arrayOf(PropTypes.number),
  })),
};
export default MetricDropdown;
