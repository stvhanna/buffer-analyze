import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import EmptyState from './index';

storiesOf('EmptyState')
  .addDecorator(checkA11y)
  .add('render with default text', () => (
    <EmptyState />
  ))
  .add('render with custom text', () => (
    <EmptyState
      header="This is a custom header!"
      description="This is a custom description!"
    />
  ));
