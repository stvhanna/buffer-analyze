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

storiesOf('ComparisonFooter', module)
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
  .add('should render the footer for 3 profiles', () => (
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
  .add('should render the footer for 4 profiles', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <ComparisonFooter
        metricKey="audience"
        profileTotals={profileTotals.concat([
          {
            currentPeriodTotal: 700,
            currentPeriodDiff: -10,
            profileId: '3',
            metric: {
              color: '#fda444',
              label: 'Followers',
            },
          },
        ])}
        profiles={profiles}
      />
    </div>
  ));
