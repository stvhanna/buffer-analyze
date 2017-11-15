import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';

import Title from './index';

storiesOf('Title')
  .addDecorator(checkA11y)
  .add('should render the title for the comparison reach chart', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <Title />
    </div>
  ));
