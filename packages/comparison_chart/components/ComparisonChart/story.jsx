import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';

import ComparisonChart from './index';
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
      label: 'Fans',
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
      label: 'Followers',
    },
  },
];

storiesOf('ComparisonChart')
  .addDecorator(checkA11y)
  .add('should render the audience comparison chart for a single profile', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <ComparisonChart
        metricKey="audience"
        profilesMetricData={[mockDailyData[0]]}
        profileTotals={[profileTotals[0]]}
        profiles={profiles}
      />
    </div>
  ))
  .add('should render the audience comparison chart for a multiple profiles', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <ComparisonChart
        metricKey="audience"
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
      <ComparisonChart
        metricKey="audience"
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
      <ComparisonChart
        metricKey="audience"
        profilesMetricData={[]}
        profileTotals={[]}
        profiles={profiles}
      />
    </div>
  ));

