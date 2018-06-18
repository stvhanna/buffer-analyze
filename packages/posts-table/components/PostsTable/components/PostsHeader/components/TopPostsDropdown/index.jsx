import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
  MetricIcon,
} from '@bufferapp/analyze-shared-components';

import {
  dropdownContainer,
  dropdownContent,
  dropdownContentActive,
  dropdownList,
  dropdownTrigger,
  dropdownTriggerActive,
} from './style.less';

import DropdownItem from './components/DropdownItem';

const MetricText = styled.span`
  display: inline-block;
  margin: 0 0 0 0.2rem;
`;

const TopPostsDropdown = ({
  metrics,
  selectedMetric,
  isDropdownOpen,
  selectMetric,
  toggleDropdown,
}) => {
  const contentClasses = classNames(dropdownContent, {
    [dropdownContentActive]: isDropdownOpen,
  });

  const triggerClasses = classNames(dropdownTrigger, {
    [dropdownTriggerActive]: isDropdownOpen,
  });

  if (metrics.length) {
    const dropdownListClasses = classNames(dropdownList);
    return (
      <div style={{ marginLeft: 'auto', marginRight: '1em' }}>
        <Text size="extra-small">Sort by</Text>
        <Dropdown
          className={dropdownContainer}
          onShow={toggleDropdown}
          onHide={toggleDropdown}
        >
          <DropdownTrigger className={triggerClasses} style={{ display: 'flex' }} >
            <MetricIcon metric={selectedMetric} />
            <MetricText>
              <Text size="extra-small" color="outerSpace" weight="medium">{selectedMetric.label}</Text>
            </MetricText>
            <span>&nbsp;</span>
            <span style={{ marginLeft: 'auto' }} >
              { isDropdownOpen && <ArrowUpIcon size="small" /> }
              { !isDropdownOpen && <ArrowDownIcon size="small" /> }
            </span>
          </DropdownTrigger>
          <DropdownContent className={contentClasses}>
            <ul className={dropdownListClasses}>
              {
                metrics.map(metric =>
                  (
                    <span key={metric.key}>
                      <DropdownItem
                        key={`${metric.key}_desc`}
                        metric={metric}
                        handleClick={() => selectMetric({ metric })}
                        selected={metric.key === selectedMetric.key}
                      />
                    </span>
                  ))
              }
            </ul>
          </DropdownContent>
        </Dropdown>
      </div>);
  }

  return null;
};

TopPostsDropdown.propTypes = {
  metrics: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
  selectedMetric: PropTypes.shape({
    key: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  isDropdownOpen: PropTypes.bool,
  // actions
  selectMetric: PropTypes.func.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
};

TopPostsDropdown.defaultProps = {
  isDropdownOpen: false,
};

export default TopPostsDropdown;
