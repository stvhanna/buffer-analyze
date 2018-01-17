import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';

import EngagementComparisonChart from './index';
import mockDailyData from '../../mocks/dailyData';
import profiles from '../../mocks/profiles';

const profileTotals = [
  {
    currentPeriodTotal: 400,
    currentPeriodDiff: 20,
    profileId: '1',
    username: 'Buffer',
    service: 'facebook',
    metric: {
      color: '#fda3f3',
      label: 'Engagement',
    },
  },
  {
    currentPeriodTotal: 700,
    currentPeriodDiff: -10,
    profileId: '2',
    username: 'buffer',
    service: 'twitter',
    metric: {
      color: '#fda444',
      label: 'Engagement',
    },
  },
];

storiesOf('EngagementComparisonChart')
  .addDecorator(checkA11y)
  .add('should render the engagement comparison chart for a single profile', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <EngagementComparisonChart
        profilesMetricData={[mockDailyData[0]]}
        profileTotals={[profileTotals[0]]}
        profiles={profiles}
      />
    </div>
  ))
  .add('should render the engagement comparison chart for a multiple profiles', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <EngagementComparisonChart
        profilesMetricData={mockDailyData}
        profileTotals={profileTotals}
        profiles={profiles}
      />
    </div>
  ))
  .add('should render a loading state', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <EngagementComparisonChart
        profilesMetricData={[]}
        profileTotals={[]}
        profiles={profiles}
        loading
      />
    </div>
  ))
  .add('should render a "no data" state', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <EngagementComparisonChart
        profilesMetricData={[]}
        profileTotals={[]}
        profiles={profiles}
      />
    </div>
  ));

