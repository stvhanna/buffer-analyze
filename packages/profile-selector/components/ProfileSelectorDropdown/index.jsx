import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import Dropdown, {
  DropdownTrigger,
  DropdownContent,
} from  'react-simple-dropdown';
import {
  ArrowDownIcon,
  Text,
} from  '@bufferapp/components';
import {
  dropdownContainer,
  dropdownContent,
  dropdownContentActive,
  dropdownList,
  dropdownTrigger,
} from './style.less';

import DropdownItem, { ProfileBadge } from './components/DropdownItem';

function renderDropdownItems(profiles) {
  const items = [];

  for (const profile of profiles) {
    const handleClick = () => {
      // TODO
    };

    if(!profile.selected) items.push(<DropdownItem profile={profile} />);
  }

  return items;
}

const ProfileSelectorDropdown = ({ profiles, open }) => {
  const selectedProfile = profiles.find(p => p.selected);

  const contentClasses = classNames(dropdownContent, {
    [dropdownContentActive]: open,
  });

  return (<Dropdown className={dropdownContainer} >
    <DropdownTrigger className={dropdownTrigger} style={{ display: 'flex' }} >
      <ProfileBadge avatarUrl={selectedProfile.avatarUrl} service={selectedProfile.service} />
      <Text weight="bold" size="small">{selectedProfile.handle}</Text>
      <span style={{ marginLeft: 'auto' }} >
        <ArrowDownIcon />
      </span>
    </DropdownTrigger>
    <DropdownContent className={contentClasses}>
      <ul className={dropdownList}>
        {renderDropdownItems(profiles)}
      </ul>
    </DropdownContent>
  </Dropdown>);
};

ProfileSelectorDropdown.propTypes = {
  profiles: PropTypes.arrayOf(PropTypes.shape({
    service: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
    handle: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
  })).isRequired,
};

export default ProfileSelectorDropdown;
