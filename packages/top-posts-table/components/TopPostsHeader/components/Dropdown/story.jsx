import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import Dropdown from './index';

import mockMetrics from './mocks/metrics';


storiesOf('Dropdown')
  .addDecorator(checkA11y)
  .add('should render the dropdown', () => (
    <div style={{ display: 'flex' }}>
      <Dropdown
        metrics={mockMetrics}
        selectedMetric={mockMetrics[0]}
        selectMetric={() => {}}
        toggleDropdown={() => {}}
      />
    </div>
  ))
  .add('should open the dropdown', () => (
    <div style={{ display: 'flex' }}>
      <Dropdown
        metrics={mockMetrics}
        selectedMetric={mockMetrics[0]}
        isDropdownOpen
        selectMetric={() => {}}
        toggleDropdown={() => {}}
      />
    </div>
  ));
