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
        totalPeriodDaily={mockDailyData}
        selectedMetricLabel="Click"
        totals={mockTotals}
        timezone="America/Los_Angeles"
        selectMetric={() => {}}
        togglePreviousPeriod={() => {}}
        openDropdown={() => {}}
        closeDropdown={() => {}}
        selectDailyMode={actionLogger('selectDailyMode')}
        dailyMode={1}
      />
    </div>
  ))
  .add('should render the compare chart with mode toggle Twitter', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <CompareChart
        profileService="twitter"
        daily={mockDailyData}
        selectedMetricLabel="Click"
        totals={mockTotals}
        timezone="America/Los_Angeles"
        selectMetric={() => {}}
        togglePreviousPeriod={() => {}}
        openDropdown={() => {}}
        closeDropdown={() => {}}
        selectDailyMode={actionLogger('selectDailyMode')}
        dailyMode={0}
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
        totalPeriodDaily={mockDailyData}
        selectedMetricLabel="Click"
        totals={mockTotals}
        timezone="America/Los_Angeles"
        selectMetric={() => {}}
        togglePreviousPeriod={() => {}}
        openDropdown={() => {}}
        closeDropdown={() => {}}
        selectDailyMode={actionLogger('selectDailyMode')}
        dailyMode={1}
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
        totalPeriodDaily={[]}
        totals={[]}
        timezone="America/Los_Angeles"
        selectMetric={() => {}}
        togglePreviousPeriod={() => {}}
        openDropdown={() => {}}
        closeDropdown={() => {}}
        selectDailyMode={actionLogger('selectDailyMode')}
        dailyMode={1}
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
        profileService="facebook"
        totalPeriodDaily={[]}
        totals={[]}
        timezone="America/Los_Angeles"
        selectMetric={() => {}}
        togglePreviousPeriod={() => {}}
        openDropdown={() => {}}
        closeDropdown={() => {}}
        selectDailyMode={actionLogger('selectDailyMode')}
        dailyMode={1}
      />
    </div>
  ));
