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
        profileService="facebbok"
        dailyData={mockDailyData}
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
  .add('should render the compare chart with previous period', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <CompareChart
        profileService="facebbok"
        dailyData={mockDailyData}
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
        profileService="facebbok"
        dailyData={[]}
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
        profileService="facebbok"
        dailyData={[]}
        totals={[]}
        timezone="America/Los_Angeles"
        selectMetric={() => {}}
        togglePreviousPeriod={() => {}}
        openDropdown={() => {}}
        closeDropdown={() => {}}
      />
    </div>
  ));
