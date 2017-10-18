import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { action as actionLogger } from '@storybook/addon-actions';
import ContextualCompare from './index';

import mockDailyData from '../../mocks/dailyData';
import mockTotals from '../../mocks/totals';
import mockPresets from '../../mocks/presets';

const selectedMetrics = [mockTotals[0], mockTotals[1]];
selectedMetrics[0].squaredIcon = true;

storiesOf('ContextualCompare')
  .addDecorator(checkA11y)
  .add('Should render in Presets mode', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <ContextualCompare
        selectedMetrics={selectedMetrics}
        metrics={mockTotals}
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
  .add('Should render in Custom mode', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <ContextualCompare
        selectedPreset={0}
        selectedMetrics={selectedMetrics}
        metrics={mockTotals}
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
      />
    </div>
  ))
  .add('should render a loading state', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <ContextualCompare
        data={[]}
        loading
      />
    </div>
  ))
  .add('should render a "no data" state', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <ContextualCompare
        data={[]}
      />
    </div>
  ));
