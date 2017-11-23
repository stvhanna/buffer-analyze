import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';

import ExportPicker from './index';

storiesOf('ExportPicker')
  .addDecorator(checkA11y)
  .add('should not be open or exporting', () => (
    <ExportPicker
      isOpen={false}
      exporting={false}
    />
  ));
