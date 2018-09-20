import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { action } from '@storybook/addon-actions';
import RemoveButton from './index';

const report = {
  _id: '1293125asda',
};

storiesOf(__dirname, module)
  .addDecorator(checkA11y)
  .add('renders the remove button', () => (
    <RemoveButton
      {...report}
      removeReport={action('remove report')}
    />
  ));

