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
        totals={mockTotals}
        selectedMetricLabel="Click"
      />
    </div>
  ))
  .add('should render a loading state', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <CompareChart loading dailyData={[]} />
    </div>
  ))
  .add('should render a "no data" state', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <CompareChart dailyData={[]} />
    </div>
  ));
