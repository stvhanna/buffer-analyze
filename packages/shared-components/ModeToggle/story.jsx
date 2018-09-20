import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { action as actionLogger } from '@storybook/addon-actions';

import ModeToggle from './index';

storiesOf(__dirname, module)
  .addDecorator(checkA11y)
  .add('should render an inactive toggle', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <ModeToggle
        baseModeLabel="mode1"
        secondaryModeLabel="mode2"
        handleClick={actionLogger('handleClick')}
      />
    </div>
  ))
  .add('should render an active toggle', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <ModeToggle
        baseModeLabel="mode1"
        secondaryModeLabel="mode2"
        handleClick={actionLogger('handleClick')}
        active
      />
    </div>
  ));
