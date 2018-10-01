import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import BreakdownLegend from '.';

storiesOf('BreakdownLegend', module)
  .addDecorator(checkA11y)
  .add('should show search terms used for filtering', () => (
    <div
      style={{
        width: '1080px',
      }}
    >
      <BreakdownLegend
        posts="4"
        searchTerms={['#CreativeDrive', 'work for people']}
        selectedMetric={{
          label: 'Impressions',
          key: 'impressions',
        }}
      />
    </div>
  ))
  .add('for long tag lists it should fade the overflowing content', () => (
    <div
      style={{
        width: '1080px',
      }}
    >
      <BreakdownLegend
        posts="4"
        searchTerms={['#CreativeDrive', 'work for people', 'more tags that do not fit in here anyway']}
        selectedMetric={{
          label: 'Impressions',
          key: 'impressions',
        }}
      />
    </div>
  ))
  .add('if there are no filters it displays "X posts in total"', () => (
    <div
      style={{
        width: '1080px',
      }}
    >
      <BreakdownLegend
        posts="4"
        selectedMetric={{
          label: 'Impressions',
          key: 'impressions',
        }}
      />
    </div>
  ))
;
