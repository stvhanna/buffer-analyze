import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import TopPostsTable from './index';

storiesOf('TopPostsTable')
  .addDecorator(checkA11y)
  .add('a story', () => (
    <TopPostsTable />
  ));
