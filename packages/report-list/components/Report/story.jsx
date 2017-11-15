import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { action } from '@storybook/addon-actions';
import Report from './index';
import StatelessReport from './StatelessReport';


const report = {
  _id: '1293125asda',
  name: 'Weekly Sync Report',
  updated_at: 1507680000000,
};

storiesOf('Report')
  .addDecorator(checkA11y)
  .add('renders the report', () => (
    <Report
      {...report}
      selectReport={action('select report')}
    />
  ))
  .add('can display buttons for viewing and removing the report', () => (
    <StatelessReport
      {...report}
      showButtons
      selectReport={action('select report')}
      removeReport={action('remove report')}
    />
  ));

