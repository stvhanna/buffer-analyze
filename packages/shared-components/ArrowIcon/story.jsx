import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import {
  curiousBlue,
} from '@bufferapp/components/style/color';

import ArrowIcon from './index';

storiesOf('ArrowIcon', module)
  .addDecorator(checkA11y)
  .add('should render downward arrows', () => (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        padding: '0',
        margin: '0 auto',
        borderRadius: '2px',
      }}
    >
      <ArrowIcon diff={-1} />
      <ArrowIcon downward />
      <ArrowIcon downward color={curiousBlue} />
    </div>
  ))
  .add('should render upward arrows', () => (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        padding: '0',
        margin: '0 auto',
        borderRadius: '2px',
      }}
    >
      <ArrowIcon diff={1} />
      <ArrowIcon upward />
      <ArrowIcon upward color={curiousBlue} />
    </div>
  ));
