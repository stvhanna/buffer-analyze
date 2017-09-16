import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import CompareChart from './index';
import mockDailyData from '../../mocks/dailyData';
import mockTotals from '../../mocks/totals';

storiesOf('CompareChart')
  .addDecorator(checkA11y)
  .add('should render the compare chart', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <CompareChart
        dailyData={mockDailyData}
        selectedMetricLabel="Click"
        totals={mockTotals}
        timezone="America/Los_Angeles"
        selectMetric={() => {}}
        togglePreviousPeriod={() => {}}
        toggleDropdown={() => {}}
      />
    </div>
  ))
  .add('should render the compare chart with previous period', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <CompareChart
        dailyData={mockDailyData}
        selectedMetricLabel="Click"
        totals={mockTotals}
        timezone="America/Los_Angeles"
        selectMetric={() => {}}
        togglePreviousPeriod={() => {}}
        toggleDropdown={() => {}}
        visualizePreviousPeriod
      />
    </div>
  ))
  .add('should render a loading state', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <CompareChart
        dailyData={[]}
        totals={[]}
        timezone="America/Los_Angeles"
        selectMetric={() => {}}
        togglePreviousPeriod={() => {}}
        toggleDropdown={() => {}}
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
      <CompareChart
        dailyData={[]}
        totals={[]}
        timezone="America/Los_Angeles"
        selectMetric={() => {}}
        togglePreviousPeriod={() => {}}
        toggleDropdown={() => {}}
      />
    </div>
  ));
