import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { ProfileBadge, DropdownItem } from '@bufferapp/analyze-shared-components';
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
  dropdownListScrollable,
  dropdownTrigger,
  dropdownTriggerActive,
} from './style.less';

function renderDropdownItem(profile, selectedProfileId, selectProfile) {
  const onClick = () => {
    selectProfile({
      id: profile.id,
      service: profile.service,
    });
  };

  return (<DropdownItem
    key={profile.id}
    profile={profile}
    handleClick={onClick}
    selected={profile.id === selectedProfileId}
  />);
}

const ProfileSelectorDropdown = ({
  isDropdownOpen,
  onSearchChange,
  profiles,
  profilesFilterString,
  selectProfile,
  selectedProfileId,
  openDropdown,
  closeDropdown,
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
    const filteredProfiles = profiles.filter(
      p => p.username.toLowerCase().match(profilesFilterString),
    );

    const dropdownListClasses = classNames(
      dropdownList,
      { [`${dropdownListScrollable}`]: filteredProfiles.length > 7 },
    );

    return (
      <Dropdown
        className={dropdownContainer}
        onShow={openDropdown}
        onHide={closeDropdown}
      >
        <DropdownTrigger className={triggerClasses} style={{ display: 'flex' }} >
          <ProfileBadge
            avatarUrl={selectedProfile.avatarUrl}
            service={selectedProfile.service}
            avatarSize={24}
            socialIconSize={11}
          />
          <Text weight="bold" size="small">{selectedProfile.username}</Text>
          <span style={{ pointerEvents: 'none', marginLeft: 'auto' }} >
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
            { filteredProfiles.length === 0 &&
              <div style={{ marginTop: '10px' }}>
                <Text weight="bold" size="small">No Results</Text>
              </div>
            }
          </div>
          { filteredProfiles.length > 0 &&
            <ul className={dropdownListClasses} >
              { filteredProfiles.map(p => renderDropdownItem(p, selectedProfileId, selectProfile)) }
            </ul>
          }
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
  onSearchChange: PropTypes.func.isRequired,
  profilesFilterString: PropTypes.string,
  selectProfile: PropTypes.func.isRequired,
  selectedProfileId: PropTypes.string.isRequired,
  openDropdown: PropTypes.func.isRequired,
  closeDropdown: PropTypes.func.isRequired,
};

ProfileSelectorDropdown.defaultProps = {
  isDropdownOpen: false,
  profilesFilterString: '',
};

export default ProfileSelectorDropdown;
