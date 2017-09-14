import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';

import DropdownItem from './index';
import mockMetrics from '../../../../mocks/metrics';

storiesOf('Dropdown Item')
  .addDecorator(checkA11y)
  .add('should render', () => (
    <div style={{ width: '260px', display: 'flex' }}>
      <DropdownItem
        metric={mockMetrics[0]}
        handleClick={() => {}}
      />
    </div>
  ))
  .add('should selected', () => (
    <div style={{ width: '260px', display: 'flex' }}>
      <DropdownItem
        metric={mockMetrics[0]}
        handleClick={() => {}}
        selected
      />
    </div>
  ));
