import React from 'react';
import moment from 'moment-timezone';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { action } from '@storybook/addon-actions';
import Report from './index';

const report = {
  name: 'Weekly Sync Report',
  charts: [
    {
      chart_id: 'summary-table',
      profile: {
        name: 'Joel Gascoigne',
        service: 'twitter',
      },
      profile_id: '4e88a092512f7e1556000000',
      metrics: [
        {
          label: 'Tweets',
          value: 150,
          diff: 25,
        },
        {
          label: 'Retweets',
          value: 901,
          diff: -39,
        },
        {
          label: 'Clicks',
          value: 1010,
          diff: -55,
        },
        {
          label: 'Impressions',
          value: 963400,
          diff: -26,
        },
        {
          label: 'New Followers',
          value: 0,
          diff: 0,
        },
        {
          label: 'Engagements',
          value: 28800,
          diff: -33,
        },
        {
          label: 'Likes',
          value: 2313,
          diff: -28,
        },
        {
          label: 'Replies',
          value: 658,
          diff: -9,
        },
      ],
    },
  ],
};

const dateRange = {
  startDate: moment.tz(1496275200000, 'etc/UTC').format('x'),
  endDate: moment.tz(1498780800000, 'etc/UTC').format('x'),
};

storiesOf('Report')
  .addDecorator(checkA11y)
  .add('renders a loading report', () => (
    <Report loading />
  ))
  .add('renders a report with summary table', () => (
    <Report {...report} dateRange={dateRange} saveChanges={() => {}} />
  ))
  .add('renders a report in edit mode', () => (
    <Report {...report} dateRange={dateRange} edit saveChanges={action('save!')} />
  ));
