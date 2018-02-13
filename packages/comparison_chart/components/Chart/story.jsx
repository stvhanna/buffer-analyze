import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { ReportsStore } from '@bufferapp/analyze-decorators';

import ComparisonChart from './index';
import mockDailyData from '../../mocks/compareDayData';
import profiles from '../../mocks/profiles';

storiesOf('ComparisonChart')
  .addDecorator(checkA11y)
  .addDecorator(ReportsStore)
  .add('should render the compare chart', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <ComparisonChart
        profilesMetricData={[
          {
            dailyData: mockDailyData,
            profileId: '1',
          },
          {
            dailyData: mockDailyData,
            profileId: '2',
          },
        ]}
        profiles={profiles}
      />
    </div>
  ));
