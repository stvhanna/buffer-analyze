import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { action } from '@storybook/addon-actions';
import PDFExportButton from './index';

storiesOf('PDFExportButton')
  .addDecorator(checkA11y)
  .add('a story', () => (
    <PDFExportButton exportToPDF={action('export!')} />
  ));
