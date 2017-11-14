import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { action as actionLogger } from '@storybook/addon-actions';

import MultiProfileSelector from './index';
import mockProfiles from '../../mocks/profiles';
import selectedProfiles from '../../mocks/selectedProfiles';


storiesOf('MultiProfileSelector')
  .addDecorator(checkA11y)
  .add('should not render the dropdown if profiles are missing', () => (
    <div style={{ display: 'flex' }}>
      <MultiProfileSelector
        profiles={[]}
        toggleProfile={actionLogger('toggleProfile')}
        openDropdown={actionLogger('openDropdown')}
        closeDropdown={actionLogger('closeDropdown')}
        onSearchChange={actionLogger('onSearchChange')}
        compareProfiles={actionLogger('compareProfiles')}
      />
    </div>
  ))
  .add('should render the initial empty state of profile selector', () => (
    <div style={{ display: 'flex' }}>
      <MultiProfileSelector
        profiles={mockProfiles}
        toggleProfile={actionLogger('toggleProfile')}
        openDropdown={actionLogger('openDropdown')}
        closeDropdown={actionLogger('closeDropdown')}
        onSearchChange={actionLogger('onSearchChange')}
        compareProfiles={actionLogger('compareProfiles')}
        selectedProfiles={[]}
      />
    </div>
  ))
  .add('should render the selected profiles in the header of multi-profile selector', () => (
    <div style={{ display: 'flex' }}>
      <MultiProfileSelector
        profiles={mockProfiles}
        toggleProfile={actionLogger('toggleProfile')}
        openDropdown={actionLogger('openDropdown')}
        closeDropdown={actionLogger('closeDropdown')}
        onSearchChange={actionLogger('onSearchChange')}
        compareProfiles={actionLogger('compareProfiles')}
        selectedProfiles={selectedProfiles}
      />
    </div>
  ))
  .add('should open the profile selector', () => (
    <div style={{ display: 'flex' }}>
      <MultiProfileSelector
        profiles={mockProfiles}
        selectedProfiles={[mockProfiles[0], mockProfiles[2]]}
        isDropdownOpen
        toggleProfile={actionLogger('toggleProfile')}
        openDropdown={actionLogger('openDropdown')}
        closeDropdown={actionLogger('closeDropdown')}
        onSearchChange={actionLogger('onSearchChange')}
        compareProfiles={actionLogger('compareProfiles')}
      />
    </div>
  ))
  .add('Compare Profiles Button should be disabled if 5 profiles are selected', () => (
    <div style={{ display: 'flex' }}>
      <MultiProfileSelector
        profiles={mockProfiles}
        selectedProfiles={selectedProfiles}
        isDropdownOpen
        toggleProfile={actionLogger('toggleProfile')}
        openDropdown={actionLogger('openDropdown')}
        closeDropdown={actionLogger('closeDropdown')}
        onSearchChange={actionLogger('onSearchChange')}
        compareProfiles={actionLogger('compareProfiles')}
      />
    </div>
  ))
  .add('should scroll profiles if > 7', () => {
    const profiles = mockProfiles.slice(0);
    for (let id = 6; id < 16; id += 1) {
      profiles.push({
        avatarUrl: mockProfiles[0].avatarUrl,
        username: `Buffer ${id}`,
        id: `${id}`,
        service: 'twitter',
      });
    }
    return (<div style={{ display: 'flex' }}>
      <MultiProfileSelector
        profiles={profiles}
        isDropdownOpen
        toggleProfile={actionLogger('toggleProfile')}
        openDropdown={actionLogger('openDropdown')}
        closeDropdown={actionLogger('closeDropdown')}
        onSearchChange={actionLogger('onSearchChange')}
        compareProfiles={actionLogger('compareProfiles')}
      />
    </div>);
  })
  .add('should filter by profilesFilterString', () => (
    <div style={{ display: 'flex' }}>
      <MultiProfileSelector
        profiles={mockProfiles}
        isDropdownOpen
        profilesFilterString={'joel'}
        toggleProfile={actionLogger('toggleProfile')}
        openDropdown={actionLogger('openDropdown')}
        closeDropdown={actionLogger('closeDropdown')}
        onSearchChange={actionLogger('onSearchChange')}
        compareProfiles={actionLogger('compareProfiles')}
      />
    </div>
  ))
  .add('should show no match message', () => (
    <div style={{ display: 'flex' }}>
      <MultiProfileSelector
        profiles={mockProfiles}
        isDropdownOpen
        profilesFilterString={'foo'}
        toggleProfile={actionLogger('toggleProfile')}
        openDropdown={actionLogger('openDropdown')}
        closeDropdown={actionLogger('closeDropdown')}
        onSearchChange={actionLogger('onSearchChange')}
        compareProfiles={actionLogger('compareProfiles')}
      />
    </div>
  ));
