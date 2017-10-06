import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import MetricsDropdown from './index';

import mockMetrics from '../mocks/metrics';

storiesOf('MetricsDropdown')
  .addDecorator(checkA11y)
  .add('should render the dropdown', () => (
    <div style={{ display: 'flex' }}>
      <MetricsDropdown
        metrics={mockMetrics}
        selectedMetricLabel={mockMetrics[0].label}
        selectMetric={() => {}}
        openDropdown={() => {}}
        closeDropdown={() => {}}
      />
    </div>
  ))
  .add('should render a secondary dropdown', () => (
    <div style={{ display: 'flex' }}>
      <MetricsDropdown
        metrics={mockMetrics}
        selectedMetricLabel={mockMetrics[0].label}
        selectMetric={() => {}}
        openDropdown={() => {}}
        closeDropdown={() => {}}
        secondary
      />
    </div>
  ))
  .add('should open the dropdown', () => (
    <div style={{ display: 'flex' }}>
      <MetricsDropdown
        metrics={mockMetrics}
        selectedMetricLabel={mockMetrics[0].label}
        isDropdownOpen
        selectMetric={() => {}}
        openDropdown={() => {}}
        closeDropdown={() => {}}
      />
    </div>
  ));
