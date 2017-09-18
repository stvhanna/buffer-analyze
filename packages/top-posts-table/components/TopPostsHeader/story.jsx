import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import TopPostsHeader from './index';

import mockMetrics from './components/Dropdown/mocks/metrics';

storiesOf('TopPostsHeader')
  .addDecorator(checkA11y)
  .add('should render top posts header', () => (
    <div>
      <TopPostsHeader
        metrics={mockMetrics}
        selectedMetric={mockMetrics[3]}
      />
    </div>
  ));
