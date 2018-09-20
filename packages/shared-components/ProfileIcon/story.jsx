import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';

import ProfileIcon from './index';

const avatarUrl = 'https://buffer-uploads.s3.amazonaws.com/503a5c8ffc99f72a7f00002e/f49c2ff693f1c307af5e1b3d84e581ca.png';

storiesOf(__dirname, module)
  .addDecorator(checkA11y)
  .add('should render', () => (
    <div style={{ width: '260px', display: 'flex' }}>
      <ProfileIcon
        profile={{
          service: 'facebook',
          avatarUrl,
        }}
      />
    </div>
  ));
