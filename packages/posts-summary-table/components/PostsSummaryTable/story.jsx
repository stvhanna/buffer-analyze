import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import PostsSummaryTable from './index';

storiesOf('PostsSummaryTable')
  .addDecorator(checkA11y)
  .add('a story', () => (
    <PostsSummaryTable />
  ));
