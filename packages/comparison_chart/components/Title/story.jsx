import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';

import ComparisonTitle from './index';

storiesOf('ComparisonTitle')
  .addDecorator(checkA11y)
  .add('should render the title for the comparison reach chart', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <ComparisonTitle metricKey={'reach'} />
    </div>
  ))
  .add('should render the title for the comparison audience chart', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <ComparisonTitle metricKey={'audience'} />
    </div>
  ));
