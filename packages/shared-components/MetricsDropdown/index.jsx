import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

import Dropdown, {
  DropdownTrigger,
  DropdownContent,
} from 'react-simple-dropdown';

import {
  ArrowDownIcon,
  ArrowUpIcon,
  Text,
} from '@bufferapp/components';

import { MetricIcon } from '@bufferapp/analyze-shared-components';

import {
  dropdownContainer,
  dropdownContent,
  dropdownContentActive,
  dropdownList,
  dropdownTrigger,
  dropdownTriggerActive,
} from './style.less';

import DropdownItem from './components/DropdownItem';

function renderDropdownItem(metric, selectedMetricLabel, selectMetric, iconless) {
  const onClick = () => {
    selectMetric(metric.label);
  };

  return (<DropdownItem
    key={metric.label}
    metric={metric}
    handleClick={onClick}
    selected={metric.label === selectedMetricLabel}
    iconless={iconless}
  />);
}

const MetricsDropdown = ({
  isDropdownOpen,
  metrics,
  secondary,
  selectedMetricLabel,
  selectMetric,
  openDropdown,
  closeDropdown,
  iconless,
  inHeader,
}) => {
  const selectedMetric = metrics.find(m => m.label === selectedMetricLabel);
  const contentClasses = classNames(dropdownContent, {
    [dropdownContentActive]: isDropdownOpen,
  });

  const triggerClasses = classNames(dropdownTrigger, {
    [dropdownTriggerActive]: isDropdownOpen,
  });
  if (metrics.length) {
    const dropdownListClasses = classNames(
      dropdownList,
    );

    return (
      <Dropdown
        className={dropdownContainer}
        onShow={openDropdown}
        onHide={closeDropdown}
        active={isDropdownOpen}
        style={{
          marginLeft: `${secondary ? '0.5rem' : ''}`,
          marginRight: `${inHeader ? '0.5rem' : ''}`,
        }}
      >
        <DropdownTrigger
          className={triggerClasses}
          style={{
            display: 'flex',
            height: `${inHeader ? '24px' : ''}`,
          }}
        >
          {!iconless && <MetricIcon metric={selectedMetric} />}
          <Text weight="medium" size="extra-small" color="outerSpace">{selectedMetric.label}</Text>
          <span style={{ pointerEvents: 'none', marginLeft: 'auto' }} >
            { isDropdownOpen && <ArrowUpIcon size="small" /> }
            { !isDropdownOpen && <ArrowDownIcon size="small" /> }
          </span>
        </DropdownTrigger>
        <DropdownContent className={contentClasses} >
          <ul className={dropdownListClasses} >
            { metrics.map(m => renderDropdownItem(m, selectedMetricLabel, selectMetric, iconless)) }
          </ul>
        </DropdownContent>
      </Dropdown>);
  }

  return null;
};

MetricsDropdown.propTypes = {
  metrics: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    color: PropTypes.string,
  })).isRequired,
  secondary: PropTypes.bool,
  isDropdownOpen: PropTypes.bool,
  selectedMetricLabel: PropTypes.string.isRequired,
  selectMetric: PropTypes.func.isRequired,
  openDropdown: PropTypes.func.isRequired,
  closeDropdown: PropTypes.func.isRequired,
  iconless: PropTypes.bool,
  inHeader: PropTypes.bool,
};

MetricsDropdown.defaultProps = {
  secondary: false,
  isDropdownOpen: false,
  iconless: false,
  inHeader: false,
};

export default MetricsDropdown;
