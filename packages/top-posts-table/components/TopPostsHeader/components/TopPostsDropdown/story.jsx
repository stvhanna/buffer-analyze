import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import TopPostsDropdown from './index';

import mockMetrics from './mocks/metrics';


storiesOf('TopPostsDropdown')
  .addDecorator(checkA11y)
  .add('should render the dropdown', () => (
    <div style={{ display: 'flex' }}>
      <TopPostsDropdown
        metrics={mockMetrics}
        selectedMetric={mockMetrics[0]}
        selectMetric={() => {}}
        toggleDropdown={() => {}}
        isDescendingSelected
      />
    </div>
  ))
  .add('should open the dropdown', () => (
    <div style={{ display: 'flex' }}>
      <TopPostsDropdown
        metrics={mockMetrics}
        selectedMetric={mockMetrics[0]}
        isDropdownOpen
        isDescendingSelected={false}
        selectMetric={() => {}}
        toggleDropdown={() => {}}
      />
    </div>
  ));
