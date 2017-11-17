import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import ComparisonFooter from './index';

const profileTotals = [
  {
    currentPeriodTotal: 400,
    currentPeriodDiff: 20,
    profileId: '1234abcd',
    username: 'Buffer',
    metric: {
      color: '#fda3f3',
      label: 'Fans',
    },
  },
  {
    currentPeriodTotal: 700,
    currentPeriodDiff: -10,
    profileId: '5678abcd',
    username: 'Buffer',
    metric: {
      color: '#fda444',
      label: 'Followers',
    },
  },
  {
    currentPeriodTotal: 700,
    currentPeriodDiff: -10,
    profileId: '5678abcd',
    username: 'LifeIsAwesome',
    service: 'instagram',
    metric: {
      color: '#fda444',
      label: 'Impressions',
    },
  },
];

storiesOf('ComparisonFooter')
  .addDecorator(checkA11y)
  .add('should render the footer for a single profile', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <ComparisonFooter
        profileTotals={[profileTotals[2]]}
      />
    </div>
  ))
  .add('should render coming soon if the profile is instagram and metric is Impressions', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <ComparisonFooter
        profileTotals={[profileTotals[0]]}
      />
    </div>
  ))
  .add('should render the footer for multiple profiles', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <ComparisonFooter
        profileTotals={profileTotals}
      />
    </div>
  ));
