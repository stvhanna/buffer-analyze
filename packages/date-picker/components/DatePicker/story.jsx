import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import moment from 'moment';

import DatePicker from './index';


storiesOf('DatePicker')
  .addDecorator(checkA11y)
  .add('there is no date if a single day is selected', () => (
    <DatePicker
      startDate={moment().subtract(1, 'days').unix()}
      endDate={moment().subtract(1, 'days').unix()}
    />
  ))
  .add('should be able to open', () => (
    <DatePicker
      startDate={moment().subtract(8, 'days').unix()}
      endDate={moment().subtract(1, 'day').unix()}
      isOpen
    />
  ))
  .add('should display some options as disabled', () => (
    <DatePicker
      minStartDate={moment().subtract(28, 'days')}
      startDate={moment().subtract(8, 'days').unix()}
      endDate={moment().subtract(1, 'day').unix()}
      isOpen
    />
  ))
  .add('should be able to have a custom date range selected', () => (
    <DatePicker
      minDate={moment().subtract(90, 'days').unix()}
      maxDate={moment().unix()}
      startDate={moment().subtract(10, 'days').unix()}
      endDate={moment().subtract(1, 'day').unix()}
    />
  ))
  .add('should display a calendar without a selected date range', () => (
    <DatePicker
      minDate={moment().subtract(90, 'days').unix()}
      maxDate={moment().unix()}
      isOpen
      customFormOpen
    />
  ))
  .add('should display a calendar', () => (
    <DatePicker
      minDate={moment().subtract(90, 'days').unix()}
      maxDate={moment().unix()}
      startDate={moment().subtract(10, 'days').unix()}
      endDate={moment().subtract(1, 'day').unix()}
      isOpen
      customFormOpen
    />
  ))
  .add('should have past 7 days selected', () => (
    <DatePicker
      startDate={moment().subtract(8, 'days').unix()}
      endDate={moment().subtract(1, 'day').unix()}
    />
  ))
  .add('should render a loading datepicker', () => (
    <DatePicker loading />
  ));
