import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import moment from 'moment';
import PeriodPhrase from './index';

storiesOf('PeriodPhrase')
  .addDecorator(checkA11y)
  .add('should render', () => (
    <PeriodPhrase startDate={moment().subtract(7, 'days').unix()} endDate={moment().subtract(1, 'day').unix()} />
  ));

