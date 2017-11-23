import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { Provider } from 'react-redux';
import { action as actionLogger } from '@storybook/addon-actions';

import ExportPicker from './index';

const storeFake = state => ({
  default: () => {},
  subscribe: () => {},
  dispatch: () => {},
  getState: () => ({ ...state }),
});
const store = storeFake({
  exportToCSV: {},
  exportToPNG: {},
  exportAs: {},
  filename: '',
  exportPicker: {
    open: false,
  },
});

storiesOf('ExportPicker')
  .addDecorator(checkA11y)
  .add('should not be open', () => (
    <Provider store={store}>
      <ExportPicker
        isOpen={false}
        filename="TEST"
        open={actionLogger('open')}
        close={actionLogger('close')}
      />
    </Provider>
  ))
  .add('should be open', () => (
    <Provider store={store}>
      <ExportPicker
        isOpen
        filename="TEST"
        open={actionLogger('open')}
        close={actionLogger('close')}
      />
    </Provider>
  ))
  .add('should show exporting', () => (
    <Provider store={store}>
      <ExportPicker
        exporting
        filename="TEST"
        open={actionLogger('open')}
        close={actionLogger('close')}
      />
    </Provider>
  ));
