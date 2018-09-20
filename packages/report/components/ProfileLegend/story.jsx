import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import ProfileLegend from './index';

const profile = {
  id: '55938b24a431237a32318707',
  avatarUrl: 'https://pbs.twimg.com/profile_images/899569910128553985/89LaWvpV_normal.jpg',
  service: 'twitter',
  timezone: 'Europe/London',
  username: '@moreofmorris',
};

storiesOf(__dirname, module)
  .addDecorator(checkA11y)
  .add('renders the profile legend', () => (
    <ProfileLegend profile={profile} />
  ));
