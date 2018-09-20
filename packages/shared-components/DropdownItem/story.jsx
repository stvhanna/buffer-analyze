import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';

import DropdownItem from './index';
import mockProfiles from './mocks/profiles';

storiesOf(__dirname, module)
  .addDecorator(checkA11y)
  .add('should render', () => (
    <div style={{ width: '260px', display: 'flex' }}>
      <DropdownItem
        profile={mockProfiles[0]}
        handleClick={() => {}}
      />
    </div>
  ))
  .add('should selected', () => (
    <div style={{ width: '260px', display: 'flex' }}>
      <DropdownItem
        profile={mockProfiles[0]}
        handleClick={() => {}}
        selected
      />
    </div>
  ))
  .add('should be disabled', () => (
    <div style={{ width: '260px', display: 'flex' }}>
      <DropdownItem
        profile={mockProfiles[0]}
        handleClick={() => {}}
        disabled
      />
    </div>
  ))
  .add('should render properly with an empty avatarUrl', () => {
    const profile = Object.assign({}, mockProfiles[0]);
    profile.avatarUrl = '';
    return (
      <div style={{ width: '260px', display: 'flex' }}>
        <DropdownItem
          profile={profile}
          handleClick={() => {}}
        />
      </div>)
  })
  .add('should truncate long names', () => {
    const profile = Object.assign({}, mockProfiles[0], {
      username: 'a very long and meaningful name',
    });
    return (
      <div style={{ width: '160px', display: 'flex' }}>
        <DropdownItem
          profile={profile}
          handleClick={() => {}}
        />
      </div>);
  });
