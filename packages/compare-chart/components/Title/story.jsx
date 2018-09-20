import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import Title from './index';

storiesOf(__dirname, module)
  .addDecorator(checkA11y)
  .add('should render title as if for app', () => (
    <Title />
  ))
  .add('should render title as if for report', () => (
    <Title forReport selectedMetricLabel="Engagements" />
  ));
