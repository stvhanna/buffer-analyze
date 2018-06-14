import classNames from 'classnames';
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
  Button,
} from '@bufferapp/components';

import {
  dropdownContainer,
  dropdownContent,
  dropdownContentActive,
  dropdownContentInputHolder,
  dropdownList,
  dropdownListScrollable,
} from './style.less';

const MAX_SELECTABLEPROFILES = 4;

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

function renderDropdownItem(profile, selectedProfiles, toggleProfile) {
  const onClick = () => {
    toggleProfile({
      id: profile.id,
      service: profile.service,
    });
  };

  const selectedProfileIds = selectedProfiles.map(p => p.id);

  const selected = selectedProfileIds.indexOf(profile.id) !== -1;
  const disabled = !selected && selectedProfileIds.length === MAX_SELECTABLEPROFILES;

  return (<DropdownItem
    key={profile.id}
    profile={profile}
    handleClick={onClick}
    selected={selected}
    disabled={disabled}
  />);
}

const MultiProfileSelector = ({
  isDropdownOpen,
  onSearchChange,
  profiles,
  profilesFilterString,
  toggleProfile,
  openDropdown,
  closeDropdown,

  selectedProfiles,
  compareProfiles,
}) => {
  const contentClasses = classNames(dropdownContent, {
    [dropdownContentActive]: isDropdownOpen,
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
        <DropdownTrigger style={styleButton}>
          { selectedProfiles.length > 0 &&
            selectedProfiles.slice(0, 5).map(p =>
              <ProfileBadge
                avatarUrl={p.avatarUrl}
                service={p.service}
                avatarSize={22}
                socialIconSize={11}
                key={p.id}
              />,
            )
          }
          { selectedProfiles.length === 0 &&
            <div style={{ margin: '4px 0' }}><Text color="outerSpace" size="extra-small" weight="medium">Please choose an account</Text></div>
          }
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
                <Text weight="bold" size="extra-small">No Results</Text>
              </div>
            }
          </div>
          { filteredProfiles.length > 0 &&
            <ul className={dropdownListClasses} >
              { filteredProfiles.map(p => renderDropdownItem(p, selectedProfiles, toggleProfile)) }
            </ul>
          }
          <div
            style={{
              marginTop: '10px',
              padding: '10px',
            }}
          >
            {
              (selectedProfiles.length >= 2 && selectedProfiles.length <= 5) ?
                <Button fillContainer onClick={() => compareProfiles(selectedProfiles)} >
                  Compare Profiles
                </Button>
                :
                <Button disabled fillContainer>
                  Compare Profiles
                </Button>
            }
          </div>
        </DropdownContent>
      </Dropdown>);
  }
  return null;
};

MultiProfileSelector.propTypes = {
  profiles: PropTypes.arrayOf(PropTypes.shape({
    service: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
  isDropdownOpen: PropTypes.bool,
  onSearchChange: PropTypes.func.isRequired,
  profilesFilterString: PropTypes.string,
  openDropdown: PropTypes.func.isRequired,
  closeDropdown: PropTypes.func.isRequired,
  selectedProfiles: PropTypes.arrayOf(PropTypes.shape({
    service: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })),
  toggleProfile: PropTypes.func.isRequired,
  compareProfiles: PropTypes.func.isRequired,
};

MultiProfileSelector.defaultProps = {
  isDropdownOpen: false,
  profilesFilterString: '',
  selectedProfiles: [],
};

export default MultiProfileSelector;
