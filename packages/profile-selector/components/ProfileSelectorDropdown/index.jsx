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
} from './style.less';

import DropdownItem, { ProfileBadge } from './components/DropdownItem';

function renderDropdownItem(profile, selectedProfileId, selectProfile) {
  const onClick = () => {
    selectProfile({ id: profile.id });
  };

  if (profile.id !== selectedProfileId) {
    return (<DropdownItem
      key={profile.id}
      profile={profile}
      handleClick={onClick}
    />);
  }

  return null;
}

const ProfileSelectorDropdown = ({
  profiles,
  isDropdownOpen,
  selectProfile,
  toggleDropdown,
  selectedProfileId,
}) => {
  const selectedProfile = profiles.find(p => p.id === selectedProfileId);

  const contentClasses = classNames(dropdownContent, {
    [dropdownContentActive]: isDropdownOpen,
  });

  if (profiles.length) {
    return (
      <Dropdown
        className={dropdownContainer}
        onShow={toggleDropdown}
        onHide={toggleDropdown}
      >
        <DropdownTrigger className={dropdownTrigger} style={{ display: 'flex' }} >
          <ProfileBadge avatarUrl={selectedProfile.avatarUrl} service={selectedProfile.service} />
          <Text weight="bold" size="small">{selectedProfile.username}</Text>
          <span style={{ marginLeft: 'auto' }} >
            { isDropdownOpen && <ArrowUpIcon /> }
            { !isDropdownOpen && <ArrowDownIcon /> }
          </span>
        </DropdownTrigger>
        <DropdownContent className={contentClasses}>
          <ul className={dropdownList}>
            {profiles.map(p => renderDropdownItem(p, selectedProfileId, selectProfile))}
          </ul>
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
  toggleDropdown: PropTypes.func.isRequired,
};

ProfileSelectorDropdown.defaultProps = {
  isDropdownOpen: false,
};

export default ProfileSelectorDropdown;
