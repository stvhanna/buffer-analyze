import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { action } from '@storybook/addon-actions';
import ExportButton from './index';

storiesOf('ExportButton')
  .addDecorator(checkA11y)
  .add('default', () => (
    <ExportButton exportToPNG={action('click')} />
  ))
  .add('exporting', () => (
    <ExportButton exporting exportToPNG={action('click')} />
  ))
  .add('onClick works when not exporting', () => (
    <div>
      <div>
        <ExportButton exportToPNG={action('click')} />
      </div>
      <div>
        <ExportButton exporting exportToPNG={action('this should not be triggered')} />
      </div>
    </div>
  ));
