import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import Title from './index';

storiesOf('posts-table/Title', module)
  .addDecorator(checkA11y)
  .add('should render title as if for app', () => (
    <Title profileService="facebook" />
  ))
  .add('should render title as if for report', () => (
    <Title profileService="facebook" forReport />
  ))
  .add('should render title for Twitter is if for app', () => (
    <Title profileService="twitter" />
  ))
  .add('should render title for Twitter is if for report', () => (
    <Title profileService="twitter" forReport />
  ));
