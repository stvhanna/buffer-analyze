import React from 'react';
import { storiesOf } from '@storybook/react';
import { ReportsStore } from '@bufferapp/analyze-decorators';
import { checkA11y } from 'storybook-addon-a11y';
import AverageTable from './index';
import mockMetrics7days from './mock/metrics7days';
import mockMetrics30days from './mock/metrics30days';
import mockMetrics90days from './mock/metrics90days';

const noMetrics = {
  totals: [],
};

storiesOf(__dirname, module)
  .addDecorator(checkA11y)
  .addDecorator(ReportsStore)
  .add('should render the average table for 7 days', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <AverageTable
        timezone="America/Los_Angeles"
        metrics={mockMetrics7days}
      />
    </div>
  ))
  .add('should render the average table for 30 days', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <AverageTable
        timezone="America/Los_Angeles"
        metrics={mockMetrics30days}
      />
    </div>
  ))
  .add('should render the average table for 90 days', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <AverageTable
        timezone="America/Los_Angeles"
        metrics={mockMetrics90days}
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
