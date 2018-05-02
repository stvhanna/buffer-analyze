import React from 'react';
import PropTypes from 'prop-types';
import {
  ProfileBadge,
  DropdownItem,
} from '@bufferapp/analyze-shared-components';
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

const dropdownContainerStyle = {
  position: 'relative',
  display: 'inline-block',
  zIndex: 1,
  width: '360px',
  height: '34px',
};

const dropdownContentStyle = {
  zIndex: 2,
  display: 'none',
  position: 'absolute',
  width: '100%',
  top: '2.25rem',
  background: '#FFFFFF',
  border: '1px solid #D5E3EF',
  borderWidth: '0 1px 1px',
  borderRadius: 3,
  padding: '0.5rem 1rem',
  boxSizing: 'border-box',
  boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
};

const dropdownContentActiveStyle = {
  ...dropdownContentStyle,
  display: 'block',
};

const dropdownSearchHolderStyle = {
  padding: '0 0 0.5rem',
};

const dropdownListStyle = {
  margin: 0,
  padding: '0 0 0.5rem',
};

const dropdownListScrollableStyle = {
  ...dropdownListStyle,
  maxHeight: '240px',
  overflowY: 'scroll',
};

const buttonStyle = {
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  padding: '0.5rem 1rem',
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

const noResultsContainerStyle = {
  margin: '0.5rem 0 0',
};

const buttonDisabledStyle = {
  ...buttonStyle,
  opacity: 0.2,
  pointerEvents: 'none',
};

const arrowHolderStyle = {
  pointerEvents: 'none',
  marginLeft: 'auto',
};

function renderDropdownItem(profile, selectedProfileId, selectProfile) {
  const onClick = () => {
    selectProfile(profile);
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

  if (profiles.length && selectedProfile) {
    const filteredProfiles = profiles.filter(
      p => p.username.toLowerCase().match(profilesFilterString),
    );

    return (
      <Dropdown
        style={dropdownContainerStyle}
        onShow={openDropdown}
        onHide={closeDropdown}
      >
        <DropdownTrigger style={(loading ? buttonDisabledStyle : buttonStyle)}>
          <ProfileBadge
            avatarUrl={selectedProfile.avatarUrl}
            service={selectedProfile.service}
            avatarSize={22}
            socialIconSize={13}
          />
          <Text weight="bold" size="small">{selectedProfile.username}</Text>
          <span style={arrowHolderStyle}>
            { isDropdownOpen && <ArrowUpIcon size="small" /> }
            { !isDropdownOpen && <ArrowDownIcon size="small" /> }
          </span>
        </DropdownTrigger>
        <DropdownContent
          style={(isDropdownOpen ? dropdownContentActiveStyle : dropdownContentStyle)}
        >
          <div style={dropdownSearchHolderStyle}>
            <Input
              placeholder={'Search'}
              input={{ onChange: onSearchChange }}
            />
            { filteredProfiles.length === 0 &&
              <div style={noResultsContainerStyle}>
                <Text weight="bold" size="small">No Results</Text>
              </div>
            }
          </div>
          { filteredProfiles.length > 0 &&
            <ul
              style={(filteredProfiles.length > 7 ?
                dropdownListScrollableStyle : dropdownListStyle)}
            >
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
  loading: PropTypes.bool.isRequired,
  isDropdownOpen: PropTypes.bool,
  onSearchChange: PropTypes.func.isRequired,
  profilesFilterString: PropTypes.string,
  selectProfile: PropTypes.func.isRequired,
  selectedProfileId: PropTypes.string,
  openDropdown: PropTypes.func.isRequired,
  closeDropdown: PropTypes.func.isRequired,
};

ProfileSelectorDropdown.defaultProps = {
  isDropdownOpen: false,
  profilesFilterString: '',
  selectedProfileId: '',
};

export default ProfileSelectorDropdown;
