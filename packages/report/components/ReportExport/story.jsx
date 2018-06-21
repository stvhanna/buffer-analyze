import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import ReportExport from './index';

storiesOf('ReportExport')
  .addDecorator(checkA11y)
  .add('renders the export report', () => (
    <ReportExport />
  ));
