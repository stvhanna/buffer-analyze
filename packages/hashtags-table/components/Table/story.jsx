import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import HashtagsTable from './index';
import { ReportsStore } from '@bufferapp/analyze-decorators';

const hashtags = [
  {
    display_name: '#SundayFunday',
    posts_count: 3,
    primary_metric: 27692,
    secondary_metric: 155.66666666667,
  },
  {
    display_name: '#bufferchat',
    posts_count: 28,
    primary_metric: 32883.428571429,
    secondary_metric: 191.85714285714,
  },
  {
    display_name: '#bufferchatapac',
    posts_count: 9,
    primary_metric: 192147,
    secondary_metric: 1079.8888888889,
  },
  {
    display_name: '#BufferPodcast',
    posts_count: 25,
    primary_metric: 28359.8,
    secondary_metric: 183.64,
  },
  {
    display_name: '#BufferQuestionOfTheWeek',
    posts_count: 10,
    primary_metric: 26113.1,
    secondary_metric: 119.1,
  },
  {
    display_name: '#BufferFridayFavor',
    posts_count: 2,
    primary_metric: 27711,
    secondary_metric: 103,
  },
  {
    display_name: '#WednesdayWisdom',
    posts_count: 9,
    primary_metric: 30341.888888889,
    secondary_metric: 159.66666666667,
  },
];

const labels = {
  primary_metric: 'Reach',
  secondary_metric: 'Engagement',
};

storiesOf('HashtagsTable', module)
  .addDecorator(checkA11y)
  .addDecorator(ReportsStore)
  .add('should render the hashtags table', () => (
    <div
      style={{
        width: '920px',
      }}
    >
      <HashtagsTable
        hashtags={hashtags}
        labels={labels}
        isDescending
        sortBy={'secondary_metric'}
        numToShow={5}
      />
    </div>
  ))
  .add('should render a loading state', () => (
    <div
      style={{
        width: '920px',
      }}
    >
      <HashtagsTable
        loading
        hashtags={[]}
        labels={labels}
        isDescending
        sortBy={'secondary_metric'}
        numToShow={5}
      />
    </div>
  ))
  .add('should render a "no data" state', () => (
    <div
      style={{
        width: '920px',
      }}
    >
      <HashtagsTable
        hashtags={[]}
        labels={labels}
        startDate="8/10/2018"
        endDate="09/12/2018"
        isDescending
        sortBy={'secondary_metric'}
        numToShow={5}
      />
    </div>
  ))
  .add('should render a "no data" state for yesterday', () => (
    <div
      style={{
        width: '920px',
      }}
    >
      <HashtagsTable
        hashtags={[]}
        labels={labels}
        startDate="9/10/2018"
        endDate="9/10/2018"
        isDescending
        sortBy={'secondary_metric'}
        numToShow={5}
      />
    </div>
  ));
