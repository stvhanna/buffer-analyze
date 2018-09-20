import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import PeriodPhrase from './index';

storiesOf(__dirname, module)
  .addDecorator(checkA11y)
  .add('should render', () => (
    <PeriodPhrase startDate={1504308280} endDate={1504826680} />
  ))
  .add('should render previous period phrase', () => (
    <PeriodPhrase previous startDate={1504308280} endDate={1504826680} />
  ));

