import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';

import DateRange from './index';

storiesOf('DateRange')
  .addDecorator(checkA11y)
  .add('renders the date range', () => (
    <DateRange startDate="02/20/2018" endDate="02/25/2018" />
  ))
  .add('renders the date range larger', () => (
    <DateRange startDate="02/20/2018" endDate="02/25/2018" large />
  ));
