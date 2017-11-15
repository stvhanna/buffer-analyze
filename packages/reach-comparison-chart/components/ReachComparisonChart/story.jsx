import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';

import ReachComparisonChart from './index';
import mockDailyData from '../../mocks/dailyData';

const profileTotals = [
  {
    currentPeriodTotal: 400,
    currentPeriodDiff: 20,
    profileId: '1234abcd',
    username: 'Buffer',
    metric: {
      color: '#fda3f3',
      label: 'Impressions',
    },
  },
  {
    currentPeriodTotal: 700,
    currentPeriodDiff: -10,
    profileId: '5678abcd',
    username: 'buffer',
    metric: {
      color: '#fda444',
      label: 'Impressions',
    },
  },
];

storiesOf('ReachComparisonChart')
  .addDecorator(checkA11y)
  .add('should render the audience comparison chart for a single profile', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <ReachComparisonChart
        profilesMetricData={[mockDailyData[0]]}
        profileTotals={[profileTotals[0]]}
      />
    </div>
  ))
  .add('should render the audience comparison chart for a multiple profiles', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <ReachComparisonChart
        profilesMetricData={mockDailyData}
        profileTotals={profileTotals}
      />
    </div>
  ))
  .add('should render a loading state', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <ReachComparisonChart
        profilesMetricData={[]}
        profileTotals={[]}
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
      <ReachComparisonChart
        profilesMetricData={[]}
        profileTotals={[]}
      />
    </div>
  ));

