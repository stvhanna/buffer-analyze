import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import TableRow, { TableHeader } from './index';

const hashtag = {
  display_name: '#SundayFunday',
  posts_count: 3,
  avg_impressions: 27692,
  avg_engagement: 155.66666666667,
};

storiesOf('TableRow')
  .addDecorator(checkA11y)
  .add('should render the hashtags', () => (
    <div
      style={{
        width: '920px',
      }}
    >
      <TableRow hashtag={hashtag} index={0} />
    </div>
  ));

storiesOf('TableHeader')
  .addDecorator(checkA11y)
  .add('should render the header', () => (
    <div
      style={{
        width: '920px',
      }}
    >
      <TableHeader />
    </div>
  ))
  .add('should render the header with disabled sorting on reports', () => (
    <div
      style={{
        width: '920px',
      }}
    >
      <TableHeader forReport />
    </div>
  ));
