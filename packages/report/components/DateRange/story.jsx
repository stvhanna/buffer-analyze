import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';

import DateRange from './index';

storiesOf('DateRange')
  .addDecorator(checkA11y)
  .add('renders the date range', () => (
    <DateRange startDate="1514764800" endDate="1517356800" />
  ));
