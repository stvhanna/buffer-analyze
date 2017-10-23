import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { action as actionLogger } from '@storybook/addon-actions';

import Chart from './index';
import mockDailyData from '../../mocks/dailyData';

storiesOf('Chart')
  .addDecorator(checkA11y)
  .add('should render the chart', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <Chart
        profileService="facebook"
        dailyData={mockDailyData}
        timezone="America/Los_Angeles"
      />
    </div>
  ));
