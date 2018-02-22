import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import ComparisonFooter from './index';
import profiles from '../../mocks/profiles';

const profileTotals = [
  {
    currentPeriodTotal: 400,
    currentPeriodDiff: 20,
    profileId: '1',
    metric: {
      color: '#fda3f3',
      label: 'Fans',
    },
  },
  {
    currentPeriodTotal: 700,
    currentPeriodDiff: -10,
    profileId: '2',
    metric: {
      color: '#fda444',
      label: 'Followers',
    },
  },
  {
    currentPeriodTotal: 700,
    currentPeriodDiff: -10,
    profileId: '4',
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
        metricKey="audience"
        profileTotals={[profileTotals[2]]}
        profiles={profiles}
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
        metricKey="audience"
        profileTotals={profileTotals}
        profiles={profiles}
      />
    </div>
  ))
  .add('should render a coming soon message for instagram on reach metric', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <ComparisonFooter
        metricKey="reach"
        profileTotals={profileTotals}
        profiles={profiles}
      />
    </div>
  ));
