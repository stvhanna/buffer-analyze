import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import EmptyState from './index';

storiesOf(__dirname, module)
  .addDecorator(checkA11y)
  .add('render with default text', () => (
    <EmptyState />
  ))
  .add('render with a custom header but no description', () => (
    <EmptyState
      header="This is a custom header!"
    />
  ))
  .add('render with a custom header and description', () => (
    <EmptyState
      header="This is a custom header!"
      description="This is a custom description!"
    />
  ));
