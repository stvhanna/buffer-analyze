import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import PostsSummaryTable from './index';

storiesOf('PostsSummaryTable', module)
  .addDecorator(checkA11y)
  .add('should render the posts summary table', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <PostsSummaryTable
        metrics={[
          {
            label: 'Posts',
            value: 20,
            diff: 5,
          },
          {
            label: 'Post Impressions',
            value: 901,
            diff: -39,
          },
          {
            label: 'Post Reach',
            value: 1010,
            diff: 55,
          },
          {
            label: 'Reactions',
            value: 568,
            diff: -26,
          },
          {
            label: 'Comments',
            value: 1,
            diff: 0,
          },
          {
            label: 'Shares',
            value: 12,
            diff: -1,
          },
        ]}
        profileService="facebook"
      />
    </div>
  ))
  .add('should render a loading state', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <PostsSummaryTable profileService="facebook" loading metrics={[]} />
    </div>
  ))
  .add('should render a "no data" state', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <PostsSummaryTable profileService="twitter" metrics={[]} />
    </div>
  ));
