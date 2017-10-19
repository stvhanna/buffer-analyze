import React from 'react';
import moment from 'moment-timezone';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import ChartTooltip from './index';

const dayTimestamp = moment(1505174400000).startOf('day').valueOf();

storiesOf('ChartTooltip')
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
        primaryMetric={{
          color: '#fda3f3',
          label: 'Engagements',
          value: 42,
        }}
        secondaryMetric={{
          color: '#fda3f3',
          label: 'Clicks',
          value: 42,
        }}
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
        primaryMetric={{
          color: '#fda3f3',
          label: 'Posts',
          value: 2,
        }}
        secondaryMetric={{
          color: '#fda3f3',
          label: 'Clicks',
          value: 42,
        }}
      />
    </div>
  ));
