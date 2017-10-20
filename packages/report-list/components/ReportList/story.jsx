import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import ReportList from './index';


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
    <ReportList loading />
  ))
  .add('renders the reports collection in a list', () => (
    <ReportList
      reports={mockReports}
    />
  ));
