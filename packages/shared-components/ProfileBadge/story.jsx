import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import ProfileBadge from './index';

storiesOf('ProfileBadge', module)
  .addDecorator(checkA11y)
  .add('should render', () => (
    <ProfileBadge
      avatarUrl={'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/10403026_1055367724535674_7855796462569708170_n.png?oh=2915a2a2325889aae802fd762d081f27&oe=5A2C3281'}
      service={'facebook'}
      avatarSize={32}
      socialIconSize={16}
    />
  ));

