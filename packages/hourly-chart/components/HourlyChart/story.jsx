import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import HourlyChart from './index';

const wrapper = {
  width: '800px',
};

const mockMetrics = [
  {
    label: 'Engagements',
    color: '#3a92d3',
    hourlyMetrics: [737, 1308, 666, 697, 575, 2312, 1793, 2135, 1427, 929, 780, 850, 4816, 3610, 2053, 2389, 3159, 1214, 844, 1638, 1349, 909, 1094, 685],
  },
  {
    label: 'Impressions',
    color: '#fec78b',
    hourlyMetrics: [18075, 36358, 19167, 18259, 17976, 51024, 77103, 84309, 56496, 41740, 39535, 34002, 71848, 59870, 40613, 66784, 139601, 63494, 41352, 54119, 43472, 36116, 31686, 21091],
  },
  {
    label: 'Favorites',
    color: '#8fc6db',
    hourlyMetrics: [65, 128, 52, 68, 49, 262, 171, 256, 130, 71, 59, 63, 217, 130, 107, 306, 326, 106, 65, 164, 123, 64, 54, 33],
  },
];

const mockPostCount =
  [2, 0, 0, 0, 0, 5, 11, 4, 1, 0, 1, 0, 3, 1, 0, 5, 11, 0, 0, 2, 0, 1, 1, 0];

storiesOf('HourlyChart')
  .addDecorator(checkA11y)
  .add('loading state', () => (
    <div style={wrapper}>
      <HourlyChart loading />
    </div>
  ))
  .add('loaded chart', () => (
    <div style={wrapper}>
      <HourlyChart
        selectedMetric={'Engagements'}
        metrics={mockMetrics}
        posts={mockPostCount}
        timezone="Europe/Madrid"
      />
    </div>
  ))
  .add('second metric selected', () => (
    <div style={wrapper}>
      <HourlyChart
        selectedMetric={'Engagements'}
        secondaryMetric={'Impressions'}
        metrics={mockMetrics}
        posts={mockPostCount}
        timezone="Europe/Madrid"
      />
    </div>
  ))
;
