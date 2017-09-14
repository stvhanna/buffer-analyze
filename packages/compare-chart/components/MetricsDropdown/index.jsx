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

import {
  dropdownContainer,
  dropdownContent,
  dropdownContentActive,
  dropdownList,
  dropdownTrigger,
  dropdownTriggerActive,
} from './style.less';


import DropdownItem from './components/DropdownItem';

function renderDropdownItem(metric, selectedMetricLabel, selectMetric) {
  const onClick = () => {
    selectMetric({ label: metric.label });
  };

  return (<DropdownItem
    key={metric.label}
    metric={metric}
    handleClick={onClick}
    selected={metric.label === selectedMetricLabel}
  />);
}

const MetricsDropdown = ({
  isDropdownOpen,
  metrics,
  selectedMetricLabel,
  selectMetric,
  toggleDropdown,
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
        onShow={toggleDropdown}
        onHide={toggleDropdown}
      >
        <DropdownTrigger className={triggerClasses} style={{ display: 'flex' }} >
          <Text weight="bold" size="small">{selectedMetric.label}</Text>
          <span style={{ marginLeft: 'auto' }} >
            { isDropdownOpen && <ArrowUpIcon /> }
            { !isDropdownOpen && <ArrowDownIcon /> }
          </span>
        </DropdownTrigger>
        <DropdownContent className={contentClasses} >
          <ul className={dropdownListClasses} >
            { metrics.map(m => renderDropdownItem(m, selectedMetricLabel, selectMetric)) }
          </ul>
        </DropdownContent>
      </Dropdown>);
  }

  return null;
};

MetricsDropdown.propTypes = {
  metrics: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  })).isRequired,
  isDropdownOpen: PropTypes.bool,
  selectedMetricLabel: PropTypes.string.isRequired,
  selectMetric: PropTypes.func.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
};

MetricsDropdown.defaultProps = {
  isDropdownOpen: false,
};

export default MetricsDropdown;
