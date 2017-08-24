import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import ProfileSelectorDropdown from './index';

import mockProfiles from '../../mocks/profiles';


storiesOf('ProfileSelectorDropdown')
  .addDecorator(checkA11y)
  .add('should render the dropdown', () => (
    <div style={{ width: '260px', display: 'flex' }}>
      <ProfileSelectorDropdown
        profiles={mockProfiles}
        selectProfile={() => {}}
        toggleDropdown={() => {}}
      />
    </div>
  ))
  .add('should open the dropdown', () => (
    <div style={{ width: '260px', display: 'flex' }}>
      <ProfileSelectorDropdown
        profiles={mockProfiles}
        isDropdownOpen
        selectProfile={() => {}}
        toggleDropdown={() => {}}
      />
    </div>
  ));
