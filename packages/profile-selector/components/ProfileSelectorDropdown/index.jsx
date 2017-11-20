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
  dropdownContainer,
  dropdownContent,
  dropdownContentActive,
  dropdownContentInputHolder,
  dropdownList,
  dropdownListScrollable,
  dropdownTrigger,
  dropdownTriggerActive,
} from './style.less';

const styleButton = {
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  padding: '0.5rem 1rem',
  fontFamily: '"Roboto", sans-serif',
  fontSize: '0.75rem',
  fontWeight: 'bold',
  color: '#333333',
  textDecoration: 'none',
  textShadow: 'none',
  textAlign: 'left',
  border: '1px solid #D5E3EF',
  borderRadius: '3px',
  width: '100%',
  boxSizing: 'border-box',
  boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
  outline: '0 none',
};

const styleButtonDisabled = {
  ...styleButton,
  opacity: 0.2,
  pointerEvents: 'none',
};

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
  loading,
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
        <DropdownTrigger style={(loading ? styleButtonDisabled : styleButton)}>
          <ProfileBadge
            avatarUrl={selectedProfile.avatarUrl}
            service={selectedProfile.service}
            avatarSize={22}
            socialIconSize={11}
          />
          <Text weight="bold" size="small">{selectedProfile.username}</Text>
          <span style={{ pointerEvents: 'none', marginLeft: 'auto' }} >
            { isDropdownOpen && <ArrowUpIcon size="small" /> }
            { !isDropdownOpen && <ArrowDownIcon size="small" /> }
          </span>
        </DropdownTrigger>
        <DropdownContent className={contentClasses} >
          <div
            className={dropdownContentInputHolder}
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
            <ul className={dropdownListClasses} style={{ paddingBottom: '0.5rem' }}>
              { filteredProfiles.map(p => renderDropdownItem(p, selectedProfileId, selectProfile)) }
            </ul>
          }
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
