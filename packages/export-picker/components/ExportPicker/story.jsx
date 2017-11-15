import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { action } from '@storybook/addon-actions';

import ExportPicker from './index';

storiesOf('ExportPicker')
  .addDecorator(checkA11y)
  .add('default', () => (
    <ExportPicker
      isOpen={false}
    />
  ))
  .add('should be open', () => (
    <ExportPicker
      isOpen
    />
  ))
  .add('should show exporting', () => (
    <ExportPicker exporting />
  ));
