import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';

import MetricIcon from './index';
import mockMetrics from '../../mocks/metrics';

storiesOf('MetricIcon')
  .addDecorator(checkA11y)
  .add('should render', () => (
    <div style={{ width: '260px', display: 'flex' }}>
      <MetricIcon
        metric={mockMetrics[0]}
      />
    </div>
  ))
  .add('should selected', () => (
    <div style={{ width: '260px', display: 'flex' }}>
      <MetricIcon
        metric={mockMetrics[0]}
      />
    </div>
  ));
