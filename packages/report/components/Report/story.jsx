import React from 'react';
import timezoneMock from 'timezone-mock';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import styled from 'styled-components';
import Report from './index';

timezoneMock.register('US/Eastern');

const Card = styled.section`
  width: 880px;
  margin: 20px auto;
  background: #FFFFFF;
  border: 1px solid #E2E8ED;
  box-shadow: 0px 0px 10px rgba(48, 71, 89, 0.05);
  border-radius: 5px;
  overflow: hidden;
`;

const report = {
  name: 'Weekly Sync Report',
  charts: [
    {
      chart_id: 'summary-table',
      profile: {
        username: 'Buffer',
        service: 'facebook',
        avatarUrl: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/10403026_1055367724535674_7855796462569708170_n.png?oh=7e504fbcb2addb0c18e47af9ee6ae454&oe=5AF1F381',
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
    {
      chart_id: 'summary-table',
      profile: {
        username: 'Buffer',
        service: 'facebook',
        avatarUrl: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/10403026_1055367724535674_7855796462569708170_n.png?oh=7e504fbcb2addb0c18e47af9ee6ae454&oe=5AF1F381',
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
    {
      chart_id: 'summary-table',
      profile: {
        username: 'Buffer',
        service: 'facebook',
        avatarUrl: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/10403026_1055367724535674_7855796462569708170_n.png?oh=7e504fbcb2addb0c18e47af9ee6ae454&oe=5AF1F381',
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

const comparisonReport = {
  name: 'Weekly Sync Report',
  charts: [
    {
      chart_id: 'comparison',
      profile_id: '4e88a092512f7e1556000000',
      service: 'facebook',
      profile: {
        id: '4e88a092512f7e1556000000',
        avatarUrl: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/10403026_1055367724535674_7855796462569708170_n.png?oh=39ea3ae01610ba482316d4c87ca1c14c&oe=59B58B81',
        service: 'facebook',
        timezone: 'Europe/London',
        username: 'Buffer',
      },
      metricKey: 'audience',
      profileIds: [
        '4f65dced512f7edf4600000a',
        '56e0448e36e5e4b85080630e',
      ],
      profiles: [
        {
          id: '4f65dced512f7edf4600000a',
          avatarUrl: 'https://pbs.twimg.com/profile_images/711360318262218752/wdl3jY5t_normal.jpg',
          service: 'twitter',
          timezone: 'America/Los_Angeles',
          username: '@buffer',
        },
        {
          id: '56e0448e36e5e4b85080630e',
          avatarUrl: 'https://scontent.cdninstagram.com/t51.2885-19/11243954_781009082006449_2106614257_a.jpg',
          service: 'instagram',
          timezone: 'America/Los_Angeles',
          username: 'buffer',
        },
      ],
      metrics: [
      ],
    },
  ],
};

const dateRange = {
  startDate: '02/20/2018',
  endDate: '02/25/2018',
};

storiesOf('Report')
  .addDecorator(checkA11y)
  .add('render with summary table and no logo', () => (
    <Card>
      <Report
        {...report}
        dateRange={dateRange}
        saveChanges={() => {}}
        parsePageBreaks={() => {}}
      />
    </Card>
  ))
  .add('render with summary table and no logo whilst exporting', () => (
    <Report
      {...report}
      dateRange={dateRange}
      saveChanges={() => {}}
      parsePageBreaks={() => {}}
      exporting
    />
  ))
  .add('render with summary table and logo', () => (
    <Card>
      <Report
        {...report}
        dateRange={dateRange}
        saveChanges={() => {}}
        parsePageBreaks={() => {}}
        logoUrl={'https://buffer-analyze.s3.amazonaws.com/report-logos/img_5afc8d8f209ec.jpg'}
      />
    </Card>
  ))
  .add('render with summary table and logo whilst exporting', () => (
    <Report
      {...report}
      dateRange={dateRange}
      saveChanges={() => {}}
      parsePageBreaks={() => {}}
      logoUrl={'https://buffer-analyze.s3.amazonaws.com/report-logos/img_5afc8d8f209ec.jpg'}
      exporting
    />
  ))
  .add('render only the multi-profile legend if that is available', () => (
    <Card>
      <Report
        {...comparisonReport}
        dateRange={dateRange}
        saveChanges={() => {}}
        parsePageBreaks={() => {}}
      />
    </Card>
  ))
  .add('render only the multi-profile legend if that is available whilst exporting', () => (
    <Report
      {...comparisonReport}
      dateRange={dateRange}
      saveChanges={() => {}}
      parsePageBreaks={() => {}}
      exporting
    />
  ))
  .add('render in edit mode', () => (
    <Card>
      <Report
        {...report}
        dateRange={dateRange}
        saveChanges={() => {}}
        parsePageBreaks={() => {}}
        edit
      />
    </Card>
  ))
  .add('render loading', () => (
    <Card>
      <Report loading />
    </Card>
  ))
  .add('renders loading whilst exporting', () => (
    <Report loading exporting />
  ));
