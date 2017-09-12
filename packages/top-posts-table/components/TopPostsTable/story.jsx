import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import TopPostsTable from './index';

const topPosts = [
  {
    date: 1504609289000,
    id: '108311429241313_1678040122268428',
    media: {
      picture:
      'https://buffer-media-uploads.s3.amazonaws.com/59a4711d7cbc83d309960116/5ed19955e0c4785b990ec752ff6df55c367f9808_82f6ee1b0595df873cb2135b669200524d6bd746_facebook',
      thumbnail:
      'https://buffer-media-uploads.s3.amazonaws.com/59a4711d7cbc83d309960116/5ed19955e0c4785b990ec752ff6df55c367f9808_dc779030b683e4f41ffa863f5c88795128de1d58_thumbnail',
    },
    serviceLink: 'https://facebook.com/108311429241313/posts/1678040122268428',
    statistics: {
      comments: {
        value: 10,
      },
      postClicks: {
        value: 122,
      },
      postImpressions: {
        value: 1333,
      },
      postReach: {
        value: 12122,
      },
      reactions: {
        value: 222,
      },
      shares: {
        value: 233,
      },
    },
    text: 'Procaffeinating (n): the tendency to not start anything until you\'ve had a coffee',
    type: 'picture',
  },
  {
    date: 1504702860000,
    id: '108311429241313_1678667888872318',
    media: {
      picture: 'https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/21314332_1678667648872342_5837561331042406631_n.jpg?oh=739aa8ab3fb7ca5dd00d11c369bde453&oe=5A153FC6',
      thumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/21314332_1678667648872342_5837561331042406631_n.jpg?oh=739aa8ab3fb7ca5dd00d11c369bde453&oe=5A153FC6',
    },
    serviceLink: 'https://facebook.com/108311429241313/posts/1678667888872318',
    statistics: {
      comments: {
        value: 15,
      },
      postClicks: {
        value: 1666,
      },
      postImpressions: {
        value: 23297,
      },
      postReach: {
        value: 8582,
      },
      reactions: {
        value: 196,
      },
      shares: {
        value: 54,
      },
    },
    text: '📌 UPDATED for 2017:<br />\nThe official guide to Facebook Video requirements 📹<br />\n<br />\nvia Matt Navarra',
    type: 'picture',
  },
  {
    date: 1504868484000,
    id: '108311429241313_1681434551928985',
    media: {
      description: 'Creating great social media content takes time. Here are 18 powerful social media content tools (and tips for creating great content in just minutes).',
      expanded_link: 'https://blog.bufferapp.com/social-media-content-tools',
      link: 'https://buff.ly/2j3pxeD',
      preview: 'https://buffer-media-uploads.s3.amazonaws.com/56c20bd3bd3816f63c94c73f/ca5ecfa64e06c5e419eade3dfa369bfd.jpg',
      title: '19 Tools for Creating Engaging Social Media Videos, Images and GIFs in Minutes',
    },
    serviceLink: 'https://facebook.com/108311429241313/posts/1681434551928985',
    statistics: {
      comments: {
        value: 6,
      },
      postClicks: {
        value: 534,
      },
      postImpressions: {
        value: 14997,
      },
      postReach: {
        value: 6095,
      },
      reactions: {
        value: 107,
      },
      shares: {
        value: 30,
      },
    },
    text: 'Creating social media content takes time... And creating great social media content takes even longer!<br />\n<br />\n19 tools to help take your content to the next level in less time ⏰',
    type: 'link',
  },
];

storiesOf('TopPostsTable')
  .addDecorator(checkA11y)
  .add('should render the top posts table', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <TopPostsTable
        postMetrics={[
          {
            apiKey: 'postImpressions',
            average: 0,
            averageDiff: 0,
            averageLabel: 'Impressions averages',
            averageLowerCaseLabel: 'impressions',
            color: '#8AC6DE',
            diff: 0,
            key: 'postImpressions',
            label: 'Post Impressions',
            lowerCaseLabel: 'post impressions',
            maxValue: 253867,
            previousAverage: 0,
            previousValue: 0,
            supportsPeriodTotal: true,
            value: 14997,
          },
          {
            apiKey: 'postReach',
            average: 0,
            averageDiff: 0,
            averageLabel: 'Post Reach',
            averageLowerCaseLabel: 'post reach',
            color: '#FFC880',
            diff: 0,
            key: 'postReach',
            label: 'Post Reach',
            lowerCaseLabel: 'post reach',
            maxValue: 0,
            previousAverage: 0,
            previousValue: 0,
            supportsPeriodTotal: true,
            value: 122,
          },
          {
            apiKey: 'postClicks',
            average: 0,
            averageDiff: 0,
            averageLabel: 'Clicks average',
            averageLowerCaseLabel: 'clicks',
            color: '#98E8B2',
            diff: 0,
            key: 'postClicks',
            label: 'Post Clicks',
            lowerCaseLabel: 'post clicks',
            maxValue: 0,
            previousAverage: 0,
            previousValue: 0,
            supportsPeriodTotal: true,
            value: 33,
          },
          {
            apiKey: 'reactions',
            average: 0,
            averageDiff: 0,
            averageLabel: 'Reactions',
            averageLowerCaseLabel: 'reactions',
            color: '#FD8F90',
            diff: 0,
            key: 'reactions',
            label: 'Reactions',
            lowerCaseLabel: 'reactions',
            maxValue: 0,
            previousAverage: 0,
            previousValue: 0,
            supportsPeriodTotal: true,
            value: 3000,
          },
          {
            apiKey: 'comments',
            average: 0,
            averageDiff: 0,
            averageLabel: 'Comments',
            averageLowerCaseLabel: 'comments',
            color: '#EFDF00',
            diff: 0,
            key: 'comments',
            label: 'Comments',
            lowerCaseLabel: 'comments',
            maxValue: 0,
            previousAverage: 0,
            previousValue: 0,
            supportsPeriodTotal: true,
            value: 120,
          },
          {
            apiKey: 'shares',
            average: 0,
            averageDiff: 0,
            averageLabel: 'Shares',
            averageLowerCaseLabel: 'Shares',
            color: '#D2C3AB',
            diff: 0,
            key: 'shares',
            label: 'Shares',
            lowerCaseLabel: 'shares',
            maxValue: 0,
            previousAverage: 0,
            previousValue: 0,
            supportsPeriodTotal: true,
            value: 804,
          },
        ]}
        topPosts={topPosts}
        firstColumnMetrics={[
          {
            apiKey: 'post_clicks',
            average: 0,
            averageDiff: 0,
            averageLabel: 'Clicks average',
            averageLowerCaseLabel: 'clicks',
            color: '#98E8B2',
            diff: 0,
            key: 'postClicks',
            label: 'Post Clicks',
            lowerCaseLabel: 'post clicks',
            maxValue: 0,
            previousAverage: 0,
            previousValue: 0,
            supportsPeriodTotal: true,
            value: 0,
          },
          {
            apiKey: 'reactions',
            average: 0,
            averageDiff: 0,
            averageLabel: 'Reactions',
            averageLowerCaseLabel: 'reactions',
            color: '#FD8F90',
            diff: 0,
            key: 'reactions',
            label: 'Reactions',
            lowerCaseLabel: 'reactions',
            maxValue: 0,
            previousAverage: 0,
            previousValue: 0,
            supportsPeriodTotal: true,
            value: 3000,
          },
          {
            apiKey: 'comments',
            average: 0,
            averageDiff: 0,
            averageLabel: 'Comments',
            averageLowerCaseLabel: 'comments',
            color: '#EFDF00',
            diff: 0,
            key: 'comments',
            label: 'Comments',
            lowerCaseLabel: 'comments',
            maxValue: 0,
            previousAverage: 0,
            previousValue: 0,
            supportsPeriodTotal: true,
            value: 120,
          },
          {
            apiKey: 'shares',
            average: 0,
            averageDiff: 0,
            averageLabel: 'Shares',
            averageLowerCaseLabel: 'Shares',
            color: '#D2C3AB',
            diff: 0,
            key: 'shares',
            label: 'Shares',
            lowerCaseLabel: 'shares',
            maxValue: 0,
            previousAverage: 0,
            previousValue: 0,
            supportsPeriodTotal: true,
            value: 804,
          },
        ]}
        secondColumnMetrics={[
          {
            apiKey: 'post_impressions',
            average: 0,
            averageDiff: 0,
            averageLabel: 'Impressions averages',
            averageLowerCaseLabel: 'impressions',
            color: '#8AC6DE',
            diff: 0,
            key: 'postImpressions',
            label: 'Post Impressions',
            lowerCaseLabel: 'post impressions',
            maxValue: 253867,
            previousAverage: 0,
            previousValue: 0,
            supportsPeriodTotal: true,
            value: 14997,
          },
          {
            apiKey: 'post_reach',
            average: 0,
            averageDiff: 0,
            averageLabel: 'Post Reach',
            averageLowerCaseLabel: 'post reach',
            color: '#FFC880',
            diff: 0,
            key: 'postReach',
            label: 'Post Reach',
            lowerCaseLabel: 'post reach',
            maxValue: 0,
            previousAverage: 0,
            previousValue: 0,
            supportsPeriodTotal: true,
            value: 122,
          },
        ]}
        profileService={'facebook'}
        profileTimezone={'America/Los_Angeles'}
      />
    </div>
  ));
