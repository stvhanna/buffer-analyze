import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import Title from './index';

const presets = [{
  label: 'When is it most effective to post?',
}];

storiesOf(__dirname, module)
  .addDecorator(checkA11y)
  .add('[TESTED] should render title as if for app', () => (
    <Title />
  ))
  .add('[TESTED] should render title as if for report', () => (
    <Title forReport state={{ selectedPreset: 0 }} presets={presets} />
  ))
  .add('[TESTED] should render regular title even if for report if no preset was selected', () => (
    <Title forReport state={{ selectedPreset: 0 }} presets={presets} />
  ));

