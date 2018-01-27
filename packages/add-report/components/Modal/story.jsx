import React from 'react';
import timezoneMock from 'timezone-mock';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { action } from '@storybook/addon-actions';
import Modal from './index';

import mockReports from '../../mock/reports';

timezoneMock.register('US/Eastern');

storiesOf('Modal')
  .addDecorator(checkA11y)
  .add('unopened', () => (
    <Modal
      translations={{
        addReportTitle: 'Add to a new report',
        addReportPlaceholder: 'Please enter title here',
        createReport: 'Create Report',
      }}
      toggle={action('toggle')}
    />
  ))
  .add('open', () => (
    <Modal
      translations={{
        addReportTitle: 'Add to a new report',
        addReportPlaceholder: 'Please enter title here',
        createReport: 'Create Report',
      }}
      open
      addReport={action('add report')}
      toggle={action('toggle')}
      reports={mockReports}
    />
  ));
