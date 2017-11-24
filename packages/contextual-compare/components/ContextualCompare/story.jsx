import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { action as actionLogger } from '@storybook/addon-actions';
import { ReportsStore } from '@bufferapp/analyze-decorators';
import ContextualCompare from './index';

import mockDailyData from '../../mocks/dailyData';
import mockMetrics from '../../mocks/metrics';
import mockPresets from '../../mocks/presets';

const selectedMetrics = [mockMetrics[0], mockMetrics[1]];
selectedMetrics[0].squaredIcon = true;

storiesOf('ContextualCompare')
  .addDecorator(checkA11y)
  .addDecorator(ReportsStore)
  .add('[TESTED] Should render in Presets mode with multiple metrics for each category', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <ContextualCompare
        selectedMetrics={selectedMetrics}
        metrics={mockMetrics}
        presets={mockPresets}
        selectedPreset={0}
        data={mockDailyData}
        mode={0}
        profileService="facebook"
        timezone="Etc/UTC"
        selectMode={actionLogger('selectMode')}
        selectPreset={actionLogger('selectPreset')}
        togglePresetDropdown={actionLogger('openPresetDropdown')}
      />
    </div>
  ))
  .add('[TESTED] Should render in Presets mode with days', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <ContextualCompare
        selectedMetrics={selectedMetrics}
        metrics={mockMetrics}
        presets={mockPresets}
        selectedPreset={2}
        data={mockDailyData}
        mode={0}
        profileService="facebook"
        timezone="Etc/UTC"
        selectMode={actionLogger('selectMode')}
        selectPreset={actionLogger('selectPreset')}
        togglePresetDropdown={actionLogger('openPresetDropdown')}
      />
    </div>
  ))
  .add('[TESTED] Should render in Custom mode', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <ContextualCompare
        selectedPreset={0}
        selectedMetrics={selectedMetrics}
        metrics={mockMetrics}
        data={mockDailyData}
        mode={1}
        profileService="facebook"
        timezone="Etc/UTC"
        selectMode={actionLogger('selectMode')}
        isPrimaryMetricDropdownOpen={false}
        isSecondaryMetricDropdownOpen={false}
        selectPrimaryMetric={actionLogger('selectFirsPrimaryMetric')}
        selectSecondaryMetric={actionLogger('selectSecondaryMetric')}
        openPrimaryMetricDropdown={actionLogger('openPrimaryMetricDropdown')}
        openSecondaryMetricDropdown={actionLogger('openSecondaryMetricDropdown')}
        closePrimaryMetricDropdown={actionLogger('closePrimaryMetricDropdown')}
        closeSecondaryMetricDropdown={actionLogger('closeSecondaryMetricDropdown')}
        selectPreset={actionLogger('selectPreset')}
        presets={mockPresets}
      />
    </div>
  ))
  .add('[TESTED] should render a loading state', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <ContextualCompare
        profileService="facebook"
        selectedPreset={0}
        selectedMetrics={selectedMetrics}
        mode={1}
        data={[]}
        loading
      />
    </div>
  ))
  .add('[TESTED] should render a "no data" state', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <ContextualCompare
        profileService="facebook"
        selectedPreset={0}
        selectedMetrics={selectedMetrics}
        mode={1}
        data={[]}
      />
    </div>
  ));
