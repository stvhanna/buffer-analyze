import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { ProfileBadge } from '@bufferapp/analyze-shared-components';
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


import DropdownItem from './components/DropdownItem';

function renderDropdownItem(profile, selectedProfiles, toggleProfile) {
  const onClick = () => {
    toggleProfile({
      id: profile.id,
      service: profile.service,
    });
  };

  const selectedProfileIds = selectedProfiles.map(p => p.id);

  return (<DropdownItem
    key={profile.id}
    profile={profile}
    handleClick={onClick}
    selected={selectedProfileIds.indexOf(profile.id) !== -1}
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
        <DropdownTrigger className={triggerClasses} style={{ display: 'flex' }} >
          { selectedProfiles.length > 0 &&
            selectedProfiles.map(p =>
              <ProfileBadge
                avatarUrl={p.avatarUrl}
                service={p.service}
                avatarSize={24}
                socialIconSize={11}
                key={p.id}
              />,
            )
          }
          { selectedProfiles.length === 0 &&
            <Text weight="bold" size="small">Please choose an account</Text>
          }
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
              { filteredProfiles.map(p => renderDropdownItem(p, selectedProfiles, toggleProfile)) }
            </ul>
          }
          <div
            style={{
              marginTop: '10px',
              padding: '10px',
            }}
          >
            <Button fillContainer onClick={() => compareProfiles()} >
              Compare Profiles
            </Button>
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
