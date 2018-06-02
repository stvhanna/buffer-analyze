import React from 'react';
import { storiesOf } from '@storybook/react';
import { ReportsStore } from '@bufferapp/analyze-decorators';
import { checkA11y } from 'storybook-addon-a11y';
import SummaryTable from './index';

storiesOf('SummaryTable')
  .addDecorator(checkA11y)
  .addDecorator(ReportsStore)
  .add('should render the summary table', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <SummaryTable
        metrics={[
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
        ]}
      />
    </div>
  ))
  .add('should render the summary table with 5 metrics on one line', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <SummaryTable
        metrics={[
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
        ]}
      />
    </div>
  ))
  .add('should render the summary table with 6 metrics on one line', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <SummaryTable
        metrics={[
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
            label: 'Comments',
            value: 1010,
            diff: -55,
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
        ]}
      />
    </div>
  ))
  .add('should render a loading state', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <SummaryTable loading metrics={[]} />
    </div>
  ))
  .add('should render a "no data" state', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <SummaryTable metrics={[]} />
    </div>
  ));
