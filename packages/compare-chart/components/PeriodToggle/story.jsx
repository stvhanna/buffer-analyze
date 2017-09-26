import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import PeriodToggle from './index';

storiesOf('PeriodToggle')
  .addDecorator(checkA11y)
  .add('should render an inactive toggle', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <PeriodToggle
        handleClick={() => {}}
      />
    </div>
  ))
  .add('should render an active toggle', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <PeriodToggle
        handleClick={() => {}}
        active
      />
    </div>
  ));
