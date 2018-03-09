import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { ReportsStore } from '@bufferapp/analyze-decorators';
import HourlyChart from './index';

const wrapper = {
  width: '800px',
};

const engagements = {
  label: 'Engagements',
  hourlyMetrics: [780, 1581, 788, 832, 664, 1909, 1773, 4307, 2006, 1403, 1219, 1232, 5300, 3174, 2044, 1987, 2445, 1146, 896, 2706, 2293, 1287, 1295, 823], // eslint-disable-line max-len
};

const impressions = {
  label: 'Impressions',
  hourlyMetrics: [21684, 41909, 23307, 21085, 20476, 56753, 90260, 110821, 65803, 48460, 43690, 41639, 81665, 58568, 42458, 69303, 138820, 65912, 36755, 60424, 49448, 38233, 31574, 24288], // eslint-disable-line max-len
};

const mockMetrics = [
  {
    label: 'Retweets',
    hourlyMetrics: [30, 75, 29, 23, 26, 116, 87, 163, 98, 48, 36, 53, 136, 74, 64, 77, 87, 47, 34, 89, 71, 43, 58, 20], // eslint-disable-line max-len
  },
  { ...impressions },
  { ...engagements },
  {
    label: 'Replies',
    hourlyMetrics: [1, 3, 1, 3, 1, 7, 89, 17, 7, 8, 9, 3, 23, 3, 5, 7, 276, 18, 6, 10, 7, 2, 2, 0], // eslint-disable-line max-len
  },
  {
    label: 'Clicks',
    hourlyMetrics: [36, 74, 48, 41, 29, 136, 93, 157, 99, 70, 42, 46, 102, 66, 58, 118, 163, 65, 52, 139, 104, 68, 51, 29], // eslint-disable-line max-len
  },
  {
    label: 'Likes',
    hourlyMetrics: [66, 157, 53, 74, 49, 237, 167, 270, 148, 87, 70, 71, 227, 142, 107, 321, 270, 102, 56, 178, 153, 75, 65, 38], // eslint-disable-line max-len
  },
  {
    label: 'Posts',
    hourlyMetrics: [1, 3, 0, 0, 0, 5, 10, 5, 0, 0, 1, 0, 4, 1, 0, 3, 1, 0, 0, 5, 0, 2, 1, 0],
  },
];

const mockPostCount =
  [2, 0, 0, 0, 0, 5, 11, 4, 1, 0, 1, 0, 3, 1, 0, 5, 11, 0, 0, 2, 0, 1, 1, 0];

storiesOf('HourlyChart')
  .addDecorator(checkA11y)
  .addDecorator(ReportsStore)
  .add('[TESTED] loading state', () => (
    <div style={wrapper}>
      <HourlyChart loading />
    </div>
  ))
  .add('[TESTED] loaded chart', () => (
    <div style={wrapper}>
      <HourlyChart
        selectedMetric={engagements}
        metrics={mockMetrics}
        postsCount={mockPostCount}
        timezone="Europe/Madrid"
      />
    </div>
  ))
  .add('[TESTED] second metric selected', () => (
    <div style={wrapper}>
      <HourlyChart
        selectedMetric={engagements}
        secondaryMetric={impressions}
        metrics={mockMetrics}
        postsCount={mockPostCount}
        timezone="Europe/Madrid"
      />
    </div>
  ))
;
