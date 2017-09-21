import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';

import DropdownItem from './index';
import mockMetrics from '../../mocks/metrics';

storiesOf('Dropdown Item')
  .addDecorator(checkA11y)
  .add('should render item', () => (
    <DropdownItem
      metric={mockMetrics[0]}
      handleClick={() => {}}
      sortDirectionLabel={'ASC'}
    />
  ))
  .add('should render selected item', () => (
    <DropdownItem
      metric={mockMetrics[0]}
      handleClick={() => {}}
      sortDirectionLabel={'DESC'}
      selected
    />
  ));
