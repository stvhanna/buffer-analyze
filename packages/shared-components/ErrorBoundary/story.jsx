import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import Text from '@bufferapp/components/Text';

import ErrorBoundary from './index';

/* eslint-disable react/require-render-return */
class FaultyComponent extends React.Component {
  render() {
    throw new Error('I\'m a bad component');
  }
}

storiesOf('ErrorBoundary')
  .addDecorator(checkA11y)
  .add('render a children', () => (
    <ErrorBoundary>
      <Text> A properly working component </Text>
    </ErrorBoundary>
  ))
  .add('render an empty state on error', () => (
    <ErrorBoundary>
      <FaultyComponent />
    </ErrorBoundary>
  ));
