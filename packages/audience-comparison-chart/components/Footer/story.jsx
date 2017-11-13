import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import Footer from './index';

const profileTotals = [
  {
    currentPeriodTotal: 400,
    currentPeriodDiff: 20,
    profileId: '1234abcd',
    metric: {
      color: '#fda3f3',
      label: 'Fans',
    },
  },
  {
    currentPeriodTotal: 700,
    currentPeriodDiff: -10,
    profileId: '5678abcd',
    metric: {
      color: '#fda444',
      label: 'Followers',
    },
  },
];

const selectedProfile = {
  avatarUrl: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/10403026_1055367724535674_7855796462569708170_n.png?oh=39ea3ae01610ba482316d4c87ca1c14c&oe=59B58B81',
  service: 'facebook',
  timezone: 'America/Los_Angeles',
  username: 'Buffer',
};

storiesOf('Footer')
  .addDecorator(checkA11y)
  .add('should render the footer for a single profile', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <Footer
        profileTotals={[profileTotals[0]]}
        selectedProfile={selectedProfile}
      />
    </div>
  ))
  .add('should render the footer for multiple profiles', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <Footer
        profileTotals={profileTotals}
        selectedProfile={selectedProfile}
      />
    </div>
  ));
