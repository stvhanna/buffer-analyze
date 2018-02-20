import React from 'react';
import moment from 'moment-timezone';
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
  padding: 4.5rem 4rem;
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

const dateRange = {
  startDate: '1509321600',
  endDate: '1509494400',
};

storiesOf('Report')
  .addDecorator(checkA11y)
  .add('renders a report with summary table', () => (
    <Card>
      <Report
        {...report}
        dateRange={dateRange}
        saveChanges={() => {}}
        parsePageBreaks={() => {}}
        exporting
      />
    </Card>
  ))
  .add('renders a loading report', () => (
    <Card>
      <Report loading />
    </Card>
  ));
