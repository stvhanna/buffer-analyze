import React from 'react';
import moment from 'moment-timezone';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import ComparisonChartTooltip from './index';

const dayTimestamp = moment.utc(1505174400000).startOf('day').valueOf();

storiesOf('ComparisonChartTooltip')
  .addDecorator(checkA11y)
  .add('[TESTED] should render the tooltip', () => (
    <div
      style={{
        backgroundColor: '#343E46',
        width: '240px',
      }}
    >
      <ComparisonChartTooltip
        day={dayTimestamp}
        metrics={[
          {
            color: '#fda3f3',
            label: 'clicks',
            username: 'foo',
            profileService: 'instagram',
            value: 42,
          },
          {
            color: '#fda3f3',
            label: 'clicks',
            username: 'Buffer',
            value: null,
            profileService: 'facebook',
          },
          {
            color: '#fda3f3',
            label: 'clicks',
            username: 'Buffer very long name',
            value: null,
            profileService: 'twitter',
          },
        ]}
      />
    </div>
  ));
