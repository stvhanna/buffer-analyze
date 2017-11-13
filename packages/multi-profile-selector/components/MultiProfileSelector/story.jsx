import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import MultiProfileSelector from './index';

storiesOf('MultiProfileSelector')
  .addDecorator(checkA11y)
  .add('a story', () => (
    <MultiProfileSelector />
  ));
