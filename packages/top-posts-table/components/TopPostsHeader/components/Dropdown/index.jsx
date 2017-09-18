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

function renderDropdownItem(metric, selectedMetric, selectMetric) {
  const onClick = () => {
    selectMetric({ metric });
  };

  return (<DropdownItem
    key={metric.key}
    metric={metric}
    handleClick={onClick}
    selected={metric.key === selectedMetric.key}
  />);
}

const Drowdown = ({
  isDropdownOpen,
  metrics,
  selectMetric,
  selectedMetric,
  toggleDropdown,
}) => {
  console.log(metrics);
  const currentSelectedMetric = metrics.find(m => m.key === selectedMetric.key);

  const contentClasses = classNames(dropdownContent, {
    [dropdownContentActive]: isDropdownOpen,
  });

  const triggerClasses = classNames(dropdownTrigger, {
    [dropdownTriggerActive]: isDropdownOpen,
  });

  if (metrics.length) {
    const dropdownListClasses = classNames(dropdownList);

    return (
      <Dropdown
        className={dropdownContainer}
        onShow={toggleDropdown}
        onHide={toggleDropdown}
      >
        <DropdownTrigger className={triggerClasses} style={{ display: 'flex' }} >
          <Text size="small">{currentSelectedMetric.label}</Text>
          <span style={{ marginLeft: 'auto' }} >
            { isDropdownOpen && <ArrowUpIcon /> }
            { !isDropdownOpen && <ArrowDownIcon /> }
          </span>
        </DropdownTrigger>
        <DropdownContent className={contentClasses} >
          <ul className={dropdownListClasses} >
            { metrics.map(p => renderDropdownItem(p, currentSelectedMetric, selectMetric)) }
          </ul>
        </DropdownContent>
      </Dropdown>);
  }

  return null;
};

Drowdown.propTypes = {
  metrics: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
  isDropdownOpen: PropTypes.bool,
  selectMetric: PropTypes.func.isRequired,
  selectedMetric: PropTypes.shape({
    key: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  toggleDropdown: PropTypes.func.isRequired,
};

Drowdown.defaultProps = {
  isDropdownOpen: false,
};

export default Drowdown;
