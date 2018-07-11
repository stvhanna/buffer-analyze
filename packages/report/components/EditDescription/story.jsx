import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { action } from '@storybook/addon-actions';

import EditDescription from './index';

storiesOf('EditDescription')
  .addDecorator(checkA11y)
  .add('renders the edit description text box', () => (
    <EditDescription description="Test report description" saveChanges={action('saveChanges')} />
  ));
