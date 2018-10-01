import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { action as actionLogger } from '@storybook/addon-actions';
import { ReportsStore } from '@bufferapp/analyze-decorators';
import AudienceChart from './index';

import mockDailyData from '../../mocks/dailyData';
import mockMetrics from '../../mocks/metrics';

const selectedMetrics = [mockMetrics[0], mockMetrics[1]];
selectedMetrics[0].squaredIcon = true;

storiesOf('AudienceChart', module)
  .addDecorator(checkA11y)
  .addDecorator(ReportsStore)
  .add('[TESTED] Should render', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <AudienceChart
        data={mockDailyData}
        isPrimaryMetricDropdownOpen={false}
        isSecondaryMetricDropdownOpen={false}
        metrics={mockMetrics}
        profileService="instagram"
        selectedMetrics={selectedMetrics}
        timezone="Etc/UTC"

        openPrimaryMetricDropdown={actionLogger('openPrimaryMetricDropdown')}
        closePrimaryMetricDropdown={actionLogger('closePrimaryMetricDropdown')}
        selectPrimaryMetric={actionLogger('selectFirsPrimaryMetric')}
        openSecondaryMetricDropdown={actionLogger('openSecondaryMetricDropdown')}
        closeSecondaryMetricDropdown={actionLogger('closeSecondaryMetricDropdown')}
        selectSecondaryMetric={actionLogger('selectSecondaryMetric')}
      />
    </div>
  ))
  .add('[TESTED] should render a loading state', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <AudienceChart
        profileService="facebook"
        selectedMetrics={selectedMetrics}
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
      <AudienceChart
        profileService="facebook"
        selectedMetrics={selectedMetrics}
        data={[]}
      />
    </div>
  ));
