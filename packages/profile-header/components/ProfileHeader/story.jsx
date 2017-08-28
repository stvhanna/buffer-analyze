import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import ProfileHeader from './index';

storiesOf('ProfileHeader')
  .addDecorator(checkA11y)
  .add('a story', () => (
    <ProfileHeader />
  ));
