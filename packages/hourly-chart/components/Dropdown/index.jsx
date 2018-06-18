import React from 'react';
import PropTypes from 'prop-types';

import {
  ArrowDownIcon,
  ArrowUpIcon,
  Text,
} from '@bufferapp/components';

import Dropdown, {
  DropdownContent,
} from '@bufferapp/analyze-shared-components/Dropdown';

import List from './List';
import ColorIcon from '../ColorIcon';

const triggerContainer = {
  padding: '5px 0',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
};

const dropdown = {
  width: '16rem',
  display: 'inline-block',
};

const MetricDropdown =
  ({ metrics, open, selectedMetric, toggleDropdown, selectMetric }) => (
    <div style={dropdown}>
      <Dropdown toggleDropdown={toggleDropdown} isDropdownOpen={open}>
        <div style={triggerContainer}>
          <ColorIcon metric={selectedMetric.label} circle />
          <Text weight="medium" size="extra-small" color="outerSpace">{selectedMetric.label}</Text>
          <span style={{ marginLeft: 'auto' }} >
            { open && <ArrowUpIcon size="small" /> }
            { !open && <ArrowDownIcon size="small" /> }
          </span>
        </div>
        <DropdownContent isDropdownOpen={open}>
          <List
            metrics={metrics}
            selectedMetric={selectedMetric}
            selectMetric={selectMetric}
          />
        </DropdownContent>
      </Dropdown>
    </div>
  );

MetricDropdown.defaultProps = {
  metrics: [],
  open: false
};

MetricDropdown.propTypes = {
  open: PropTypes.bool,
  selectedMetric: PropTypes.shape({
    label: PropTypes.string,
    hourlyMetrics: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
  selectMetric: PropTypes.func.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
  metrics: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    hourlyMetrics: PropTypes.arrayOf(PropTypes.number),
  })),
};
export default MetricDropdown;
