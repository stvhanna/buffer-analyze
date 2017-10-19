import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { action as actionLogger } from '@storybook/addon-actions';

import PresetsDropdown from './index';
import mockPresets from '../../mocks/presets';

storiesOf('PresetsDropdown')
  .addDecorator(checkA11y)
  .add('closed dropdown', () => (
    <PresetsDropdown
      presets={mockPresets}
      selectedPreset={0}
      selectPreset={actionLogger('selectPreset')}
      toggleDropdown={actionLogger('openPresetDropdown')}
    />
  ))
  .add('[TESTED] open dropdown', () => (
    <PresetsDropdown
      open
      presets={mockPresets}
      selectedPreset={0}
      selectPreset={actionLogger('selectPreset')}
      toggleDropdown={actionLogger('openPresetDropdown')}
    />
  ));
