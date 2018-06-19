import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { action as actionLogger } from '@storybook/addon-actions';
import { ReportsStore } from '@bufferapp/analyze-decorators';

import CompareChart from './index';
import mockDailyData from '../../mocks/dailyData';
import mockTotals from '../../mocks/totals';

storiesOf('CompareChart')
  .addDecorator(checkA11y)
  .addDecorator(ReportsStore)
  .add('should render the compare chart', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <CompareChart
        profileService="facebook"
        daily={mockDailyData}
        selectedMetricLabel="Click"
        totals={mockTotals}
        timezone="America/Los_Angeles"
        selectMetric={() => {}}
        togglePreviousPeriod={() => {}}
        openDropdown={() => {}}
        closeDropdown={() => {}}
      />
    </div>
  ))
  .add('should render the compare chart for Posts metric', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <CompareChart
        profileService="facebook"
        daily={mockDailyData}
        selectedMetricLabel="Posts"
        totals={mockTotals}
        timezone="America/Los_Angeles"
        selectMetric={() => {}}
        togglePreviousPeriod={() => {}}
        openDropdown={() => {}}
        closeDropdown={() => {}}
      />
    </div>
  ))
  .add('should render the compare chart for Posts metric with previous period', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <CompareChart
        profileService="facebook"
        daily={mockDailyData}
        selectedMetricLabel="Posts"
        totals={mockTotals}
        timezone="America/Los_Angeles"
        selectMetric={() => {}}
        togglePreviousPeriod={() => {}}
        openDropdown={() => {}}
        closeDropdown={() => {}}
        selectDailyMode={actionLogger('selectDailyMode')}
        visualizePreviousPeriod
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
        profileService="facebook"
        daily={mockDailyData}
        selectedMetricLabel="Click"
        totals={mockTotals}
        timezone="America/Los_Angeles"
        selectMetric={() => {}}
        togglePreviousPeriod={() => {}}
        openDropdown={() => {}}
        closeDropdown={() => {}}
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
        profileService="facebook"
        daily={[]}
        totals={[]}
        timezone="America/Los_Angeles"
        selectMetric={() => {}}
        togglePreviousPeriod={() => {}}
        openDropdown={() => {}}
        closeDropdown={() => {}}
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
        profileService="twitter"
        daily={[]}
        totals={[]}
        timezone="America/Los_Angeles"
        selectMetric={() => {}}
        togglePreviousPeriod={() => {}}
        openDropdown={() => {}}
        closeDropdown={() => {}}
      />
    </div>
  ));
