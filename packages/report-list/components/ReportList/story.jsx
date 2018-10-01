import React from 'react';
import timezoneMock from 'timezone-mock';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { action } from '@storybook/addon-actions';
import ReportList from './index';

timezoneMock.register('US/Eastern');

const mockReports = [{
  _id: '1293125asda',
  name: 'With custom range',
  updated_at: 1510099200000,
  date_range: {
    start: '02/20/2018',
    end: '02/25/2018',
  },
}, {
  _id: '1921591adsd',
  name: 'With dynamic range',
  updated_at: 1507680000000,
  date_range: {
    range: 7,
  },
}];

storiesOf('ReportList', module)
  .addDecorator(checkA11y)
  .add('loading state', () => (
    <ReportList loading selectReport={action('select report')} />
  ))
  .add('renders an empty state for reports', () => (
    <ReportList
      reports={[]}
    />
  ))
  .add('renders an empty state for small reports', () => (
    <ReportList
      reports={[]}
      small
    />
  ))
  .add('renders the reports collection in a list', () => (
    <ReportList
      reports={mockReports}
      selectReport={action('select report')}
      removeReport={action('remove report')}
    />
  ))
  .add('renders the reports collection in a small list', () => (
    <ReportList
      reports={mockReports}
      selectReport={action('select report')}
      removeReport={action('remove report')}
      small
    />
  ));
