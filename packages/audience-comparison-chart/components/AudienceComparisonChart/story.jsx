import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';

import AudienceComparisonChart from './index';
import mockDailyData from '../../mocks/dailyData';

storiesOf('AudienceComparisonChart')
  .addDecorator(checkA11y)
  .add('should render the audience comparison chart', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <AudienceComparisonChart
        profilesMetricData={[mockDailyData[0]]}
      />
    </div>
  ))
  .add('should render a loading state', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <AudienceComparisonChart
        profilesMetricData={[]}
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
      <AudienceComparisonChart
        profilesMetricData={[]}
      />
    </div>
  ));

