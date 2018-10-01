import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { action } from '@storybook/addon-actions';

import PostOrderSwitch from './index';

storiesOf('PostOrderSwitch', module)
  .addDecorator(checkA11y)
  .add('should render with descending selected', () => (
    <div style={{ width: '260px', display: 'flex' }}>
      <PostOrderSwitch
        isDescendingSelected
        handleClick={action('handleClick')}
      />
    </div>
  ))
  .add('should render with ascending selected', () => (
    <div style={{ width: '260px', display: 'flex' }}>
      <PostOrderSwitch
        handleClick={action('handleClick')}
      />
    </div>
  ));
