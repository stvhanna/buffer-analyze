import React from 'react';
import { storiesOf } from '@storybook/react';
import { ReportsStore } from '@bufferapp/analyze-decorators';
import { checkA11y } from 'storybook-addon-a11y';
import AverageTable from './index';
import mockDailyData from './mock/dailyData';

const noMetrics = {
  totals: [],
};

const metrics = {
  totals: [
    {
      label: 'Impression average',
      value: 150,
      diff: 25,
    },
    {
      label: 'Click average',
      value: 1010,
      diff: -55,
    },
    {
      label: 'Engagement average',
      value: 901,
      diff: -39,
    },
  ],
};

storiesOf('AverageTable')
  .addDecorator(checkA11y)
  .addDecorator(ReportsStore)
  .add('should render the average table', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <AverageTable
        dailyData={mockDailyData}
        timezone="America/Los_Angeles"
        metrics={metrics}
      />
    </div>
  ))
  .add('should render a loading state', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <AverageTable loading metrics={noMetrics} />
    </div>
  ))
  .add('should render a "no data" state', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <AverageTable metrics={noMetrics} />
    </div>
  ));
