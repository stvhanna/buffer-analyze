import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import SocialIcon from './index';

storiesOf('SocialIcon')
  .addDecorator(checkA11y)
  .add('should render', () => (
    <SocialIcon
      service={'facebook'}
      socialIconSize={16}
      avatarSize={32}
    />
  ))
  .add('should render with border', () => (
    <SocialIcon
      service={'facebook'}
      socialIconSize={16}
      avatarSize={32}
      withBorder
    />
  ))
  .add('should render inline', () => (
    <div>
      <SocialIcon
        service={'instagram'}
        socialIconSize={16}
        inline
      /> Foo
    </div>
  ));

