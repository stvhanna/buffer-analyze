import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { action } from '@storybook/addon-actions';

import EditTitle from './index';

storiesOf('EditTitle')
  .addDecorator(checkA11y)
  .add('renders the edit title text box', () => (
    <EditTitle name="Test Report" saveChanges={action('saveChanges')} />
  ));
