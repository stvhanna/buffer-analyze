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
  Input,
  Text,
} from '@bufferapp/components';
import {
  white,
  curiousBlue,
} from '@bufferapp/components/style/color';
import {
  fontFamily,
} from '@bufferapp/components/style/font';
import {
  transitionAnimationTime,
  transitionAnimationType,
} from '@bufferapp/components/style/animation';

import {
  dropdownContainer,
  dropdownContent,
  dropdownContentActive,
  dropdownContentInputHolder,
  dropdownList,
  dropdownTrigger,
  dropdownTriggerActive,
} from './style.less';

import DropdownItem, { ProfileBadge } from './components/DropdownItem';

function renderDropdownItem(profile, selectedProfileId, selectProfile) {
  const onClick = () => {
    selectProfile({ id: profile.id });
  };

  return (<DropdownItem
    key={profile.id}
    profile={profile}
    handleClick={onClick}
    selected={profile.id === selectedProfileId}
  />);
}

const ProfileSelectorDropdown = ({
  profiles,
  isDropdownOpen,
  selectProfile,
  toggleDropdown,
  selectedProfileId,
  onSearchChange,
}) => {
  const selectedProfile = profiles.find(p => p.id === selectedProfileId);

  const contentClasses = classNames(dropdownContent, {
    [dropdownContentActive]: isDropdownOpen,
  });

  const triggerClasses = classNames(dropdownTrigger, {
    [dropdownTriggerActive]: isDropdownOpen,
  });

  const manageAccountsStyle = {
    display: 'inline-block',
    margin: '0',
    padding: '0.4rem 0',
    fontFamily,
    fontSize: '0.8rem',
    color: curiousBlue,
    backgroundColor: 'transparent',
    border: 'solid 1px',
    boxSizing: 'border-box',
    borderRadius: '3px',
    cursor: 'pointer',
    outline: 'none',
    width: '100%',
    transition: `background-color ${transitionAnimationTime} ${transitionAnimationType}`,
    textAlign: 'center',
    textDecoration: 'none',
  };

  if (profiles.length) {
    return (
      <Dropdown
        className={dropdownContainer}
        onShow={toggleDropdown}
        onHide={toggleDropdown}
      >
        <DropdownTrigger className={triggerClasses} style={{ display: 'flex' }} >
          <ProfileBadge avatarUrl={selectedProfile.avatarUrl} service={selectedProfile.service} />
          <Text weight="bold" size="small">{selectedProfile.username}</Text>
          <span style={{ marginLeft: 'auto' }} >
            { isDropdownOpen && <ArrowUpIcon /> }
            { !isDropdownOpen && <ArrowDownIcon /> }
          </span>
        </DropdownTrigger>
        <DropdownContent className={contentClasses} >
          <div
            className={dropdownContentInputHolder}
            style={{
              padding: '10px',
            }}
          >
            <Input
              placeholder={'Search'}
              input={{ onChange: onSearchChange }}
            />
          </div>
          <ul className={dropdownList}>
            {profiles.map(p => renderDropdownItem(p, selectedProfileId, selectProfile))}
          </ul>
          <div
            style={{
              marginTop: '10px',
              padding: '10px',
            }}
          >
            <a href={'//buffer.com/manage'} style={manageAccountsStyle} >Manage accounts</a>
          </div>
        </DropdownContent>
      </Dropdown>);
  }

  return null;
};

ProfileSelectorDropdown.propTypes = {
  profiles: PropTypes.arrayOf(PropTypes.shape({
    service: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
  isDropdownOpen: PropTypes.bool,
  selectedProfileId: PropTypes.string.isRequired,
  selectProfile: PropTypes.func.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
};

ProfileSelectorDropdown.defaultProps = {
  isDropdownOpen: false,
};

export default ProfileSelectorDropdown;
