import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Dropdown, {
  DropdownTrigger as Trigger,
  DropdownContent as Content,
} from 'react-simple-dropdown';

import {
  dropdownContainer,
  dropdownContent,
  dropdownContentActive,
  dropdownTrigger,
  dropdownTriggerActive,
} from './style.less';

export default ({ children, toggleDropdown, isDropdownOpen }) => {
  const triggerClasses = classNames(dropdownTrigger, {
    [dropdownTriggerActive]: isDropdownOpen,
  });
  return (
    <Dropdown
      className={dropdownContainer}
      onShow={toggleDropdown}
      onHide={toggleDropdown}
    >
      <Trigger className={triggerClasses} style={{ display: 'flex' }} >
        {children}
      </Trigger>
    </Dropdown>
  );
};

export const DropdownTrigger = ({ children, isDropdownOpen }) => {
  const triggerClasses = classNames(dropdownTrigger, {
    [dropdownTriggerActive]: isDropdownOpen,
  });
  return (
    <Trigger className={triggerClasses} style={{ display: 'flex' }} >
      {children}
    </Trigger>
  );
};

DropdownTrigger.propTypes = {
  children: PropTypes.node.isRequired,
  isDropdownOpen: PropTypes.bool.isRequired,
};

export const DropdownContent = ({ children, isDropdownOpen }) => {
  const contentClasses = classNames(dropdownContent, {
    [dropdownContentActive]: isDropdownOpen,
  });

  return (
    <Content className={contentClasses}>
      {children}
    </Content>
  );
};

DropdownContent.propTypes = {
  children: PropTypes.node.isRequired,
  isDropdownOpen: PropTypes.bool.isRequired,
};
