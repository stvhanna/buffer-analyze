import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import Title from './index';

storiesOf('Title', module)
  .addDecorator(checkA11y)
  .add('should render title', () => (
    <Title />
  ));
