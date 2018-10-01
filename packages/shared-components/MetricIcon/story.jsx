import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';

import MetricIcon from './index';

storiesOf('MetricIcon', module)
  .addDecorator(checkA11y)
  .add('should render', () => (
    <div style={{ width: '260px', display: 'flex' }}>
      <MetricIcon
        metric={{
          label: 'Engagement average',
          color: '#CCCCCC',
        }}
      />
    </div>
  ))
  .add('should render a squared icon', () => (
    <div style={{ width: '260px', display: 'flex' }}>
      <MetricIcon
        metric={{
          label: 'Engagement average',
          color: '#CCCCCC',
          squaredIcon: true,
        }}
      />
    </div>
  ));
