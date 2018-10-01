import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import MultiProfileLegends from './index';

const profiles = [
  {
    id: '55938b24a431237a32318707',
    avatarUrl: 'https://pbs.twimg.com/profile_images/899569910128553985/89LaWvpV_normal.jpg',
    service: 'twitter',
    timezone: 'Europe/London',
    username: '@moreofmorris',
  },
  {
    id: '55d9c9e3e550614f0d8b4568',
    avatarUrl: 'https://pbs.twimg.com/profile_images/525376800612823040/TxgwAyT__normal.jpeg',
    service: 'twitter',
    timezone: 'Europe/London',
    username: '@roughquest',
  },
  {
    id: '55ffe1bc7a94aed55791f309',
    avatarUrl: 'https://graph.facebook.com/115696331776742/picture',
    service: 'facebook',
    timezone: 'Europe/London',
    username: 'Roughquest',
  },
  {
    id: '57e28aed50c758cc1c8b4569',
    avatarUrl: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png',
    service: 'twitter',
    timezone: 'Europe/London',
    username: '@james918273',
  },
  {
    id: '57ea87b0cbe846921d527791',
    avatarUrl: 'https://scontent.cdninstagram.com/t51.2885-19/s150x150/13671157_1037908072965434_1192538389_a.jpg',
    service: 'instagram',
    timezone: 'Europe/London',
    username: 'moreofmorris',
  },
  {
    id: '57ea87e8ac4d66284e02e0a1',
    avatarUrl: 'https://scontent-dft4-2.cdninstagram.com/t51.2885-19/11906329_960233084022564_1448528159_a.jpg',
    service: 'instagram',
    timezone: 'Europe/London',
    username: 'james918273',
  },
];

const comparedProfileIds = [
  '55938b24a431237a32318707',
  '55d9c9e3e550614f0d8b4568',
  '55ffe1bc7a94aed55791f309',
];

storiesOf('MultiProfileLegends', module)
  .addDecorator(checkA11y)
  .add('renders the multi profile legends', () => (
    <MultiProfileLegends
      profiles={profiles}
      comparedProfileIds={comparedProfileIds}
    />
  ));
