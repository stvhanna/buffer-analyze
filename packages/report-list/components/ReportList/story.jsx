import React from 'react';
import timezoneMock from 'timezone-mock';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { action } from '@storybook/addon-actions';
import ReportList from './index';

timezoneMock.register('US/Eastern');

const mockReports = [{
  _id: '1293125asda',
  name: 'Weekly Sync Report',
  updated_at: 1510099200000,
}, {
  _id: '1921591adsd',
  name: 'Client Social Media Campaign',
  updated_at: 1507680000000,
}];

storiesOf('ReportList')
  .addDecorator(checkA11y)
  .add('loading state', () => (
    <ReportList loading selectReport={action('select report')} />
  ))
  .add('renders the reports collection in a list', () => (
    <ReportList
      reports={mockReports}
      selectReport={action('select report')}
      removeReport={action('remove report')}
    />
  ));
