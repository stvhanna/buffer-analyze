import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';

import DropdownItem from './index';
import mockProfiles from '../../../../mocks/profiles';

storiesOf('Dropdown Item')
  .addDecorator(checkA11y)
  .add('should render', () => (
    <div style={{ width: '260px', display: 'flex' }}>
      <DropdownItem
        profile={mockProfiles[0]}
      />
    </div>
  ));
