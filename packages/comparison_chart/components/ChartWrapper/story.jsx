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

const metrics = {
  audience: {
    profileTotals,
    profilesMetricData,
  },
};

storiesOf('ComparisonChart')
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
  .add('should render a loading state', () => (
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
  .add('should render a "no data" state', () => (
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

