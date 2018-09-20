import React from 'react';
import moment from 'moment-timezone';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import ChartTooltip from './index';
import mockPresets from '../../../mocks/presets';

const dayTimestamp = moment.utc(1505174400000).startOf('day').valueOf();

storiesOf(__dirname, module)
  .addDecorator(checkA11y)
  .add('[TESTED] should render the tooltip', () => (
    <div
      style={{
        backgroundColor: '#343E46',
      }}
    >
      <ChartTooltip
        day={dayTimestamp}
        postsCount={5}
        profileService="facebook"
        timezone="America/New_York"
        metricData={{
          color: '#fda3f3',
          label: 'Engagements',
          value: 42,
        }}
        secondaryMetric={{
          color: '#fda3f3',
          label: 'Clicks',
          value: 42,
        }}
        isCustomMode
      />
    </div>
  ))
  .add('[TESTED] should render the posts tooltip', () => (
    <div
      style={{
        backgroundColor: '#343E46',
      }}
    >
      <ChartTooltip
        day={dayTimestamp}
        postsCount={5}
        profileService="facebook"
        timezone="America/New_York"
        metricData={{
          color: '#fda3f3',
          label: 'Posts',
          value: 2,
        }}
        secondaryMetric={{
          color: '#fda3f3',
          label: 'Clicks',
          value: 42,
        }}
        isCustomMode
      />
    </div>
  ))
  .add('[TESTED] should render a presets tooltip', () => (
    <div
      style={{
        backgroundColor: '#343E46',
      }}
    >
      <ChartTooltip
        day={dayTimestamp}
        postsCount={5}
        profileService="facebook"
        timezone="America/New_York"
        metricData={{
          color: '#fda3f3',
          label: 'Fans',
          value: 2,
        }}
        presetConfig={mockPresets[0]}
      />
    </div>
  ))
  .add('[TESTED] should render a presets tooltip with negative count and no update count', () => (
    <div
      style={{
        backgroundColor: '#343E46',
      }}
    >
      <ChartTooltip
        day={dayTimestamp}
        postsCount={5}
        profileService="facebook"
        timezone="America/New_York"
        metricData={{
          color: '#fda3f3',
          label: 'Fans',
          value: -15,
        }}
        presetConfig={{ rewardWording: 'Here goes the metric with {positive|negative} {value} value!', showUpdatesCount: false }}
      />
    </div>
  ));
