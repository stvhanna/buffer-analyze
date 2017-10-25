import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';

import Chart from './index';
import mockDailyData from '../../mocks/dailyData';

storiesOf('Chart')
  .addDecorator(checkA11y)
  .add('should render the chart for a single profile', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <Chart
        profilesMetricData={[mockDailyData[0]]}
      />
    </div>
  ))
  .add('should render the chart for multiple profiles', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <Chart
        profilesMetricData={mockDailyData}
      />
    </div>
  ));
