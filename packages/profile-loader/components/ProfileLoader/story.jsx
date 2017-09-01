import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import ProfileLoader from './index';

storiesOf('ProfileLoader')
  .addDecorator(checkA11y)
  .add('does not render anything while loading', () => (
    <ProfileLoader loading>
      <span style={{ backgroundColor: 'red' }}>This should not be displayed</span>
    </ProfileLoader>
  ))
  .add('renders its child components if its not loading', () => (
    <ProfileLoader>
      <span style={{ backgroundColor: 'green' }}>This should be seen</span>
    </ProfileLoader>
  ))
;
