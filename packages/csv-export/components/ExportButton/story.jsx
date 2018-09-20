import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { action } from '@storybook/addon-actions';
import ExportButton from './index';

storiesOf(__dirname, module)
  .addDecorator(checkA11y)
  .add('default', () => (
    <ExportButton exportToCSV={action('click')} />
  ))
  .add('exporting', () => (
    <ExportButton exporting exportToCSV={action('click')} />
  ))
  .add('onClick works when not exporting', () => (
    <div>
      <div>
        <ExportButton exportToCSV={action('click')} />
      </div>
      <div>
        <ExportButton exporting exportToCSV={action('this should not be triggered')} />
      </div>
    </div>
  ));
