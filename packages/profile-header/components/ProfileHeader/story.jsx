import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import ProfileHeader from './index';

import mockProfiles from '../../mocks/profiles';

storiesOf('ProfileHeader')
  .addDecorator(checkA11y)
  .add('should render twitter followers', () => (
    <div>
      <ProfileHeader
        profile={mockProfiles[0]}
        followersCount={777}
      />
    </div>
  ))
  .add('should render facebook fans', () => (
    <div>
      <ProfileHeader
        profile={mockProfiles[2]}
        followersCount={122566}
      />
    </div>
  ));
