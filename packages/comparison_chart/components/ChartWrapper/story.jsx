import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { ReportsStore } from '@bufferapp/analyze-decorators';

import ComparisonChart from './index';
import profilesMetricData from '../../mocks/dailyData';
import profiles from '../../mocks/profiles';

const profileIds = ['1', '2'];
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
    profileId: '4',
    metric: {
      color: '#fda444',
      label: 'Followers',
    },
  },
];

const metrics = {
  audience: {
    profileTotals,
    profilesMetricData,
  },
  reach: {
    profileTotals,
    profilesMetricData,
  },
};

storiesOf(__dirname, module)
  .addDecorator(checkA11y)
  .addDecorator(ReportsStore)
  .add('[TESTED] should render the audience comparison chart for a multiple profiles', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <ComparisonChart
        metricKey="audience"
        metrics={metrics}
        profiles={profiles}
        profileIds={profileIds}
      />
    </div>
  ))
  .add('[TESTED] should render Instagram in the reach chart', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <ComparisonChart
        metricKey="reach"
        metrics={metrics}
        profiles={profiles}
        profileIds={['1', '4']}
      />
    </div>
  ))
  .add('[TESTED] should render a loading state', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <ComparisonChart
        metricKey="audience"
        metrics={metrics}
        profiles={profiles}
        profileIds={profileIds}
        loading
      />
    </div>
  ))
  .add('[TESTED] should render a "no data" state', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <ComparisonChart
        metricKey="audience"
        metrics={{}}
        profiles={profiles}
        profileIds={profileIds}
      />
    </div>
  ));

