import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { action } from '@storybook/addon-actions';
import Dropdown from './index';

const engagements = {
  label: 'Engagements',
  hourlyMetrics: [737, 1308, 666, 697, 575, 2312, 1793, 2135, 1427, 929, 780, 850, 4816, 3610, 2053, 2389, 3159, 1214, 844, 1638, 1349, 909, 1094, 685], // eslint-disable-line max-len
};

const impressions = {
  label: 'Impressions',
  hourlyMetrics: [18075, 36358, 19167, 18259, 17976, 51024, 77103, 84309, 56496, 41740, 39535, 34002, 71848, 59870, 40613, 66784, 139601, 63494, 41352, 54119, 43472, 36116, 31686, 21091], // eslint-disable-line max-len
};

const mockMetrics = [
  engagements,
  impressions,
];

storiesOf('Dropdown')
  .addDecorator(checkA11y)
  .add('closed dropdown', () => (
    <Dropdown
      selectMetric={action('select')}
      metrics={mockMetrics}
      selectedMetric={engagements}
    />
  ))
  .add('open dropdown', () => (
    <Dropdown
      open
      selectMetric={action('select')}
      metrics={mockMetrics}
      toggleDropdown={action('toggle')}
      selectedMetric={impressions}
    />
  ));
