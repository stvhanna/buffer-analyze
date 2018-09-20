import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { action } from '@storybook/addon-actions';

import DropdownItem from './index';
import mockMetrics from '../../mocks/metrics';

storiesOf(__dirname, module)
  .addDecorator(checkA11y)
  .add('should render item', () => (
    <DropdownItem
      metric={mockMetrics[0]}
      handleClick={action('handleClick')}
    />
  ))
  .add('should render selected item', () => (
    <DropdownItem
      metric={mockMetrics[0]}
      handleClick={action('handleClick')}
      selected
    />
  ));
