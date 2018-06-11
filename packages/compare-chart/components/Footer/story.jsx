import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import Footer from './index';
import mockTotals from '../../mocks/totals';

storiesOf('Footer')
  .addDecorator(checkA11y)
  .add('should render the table', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <Footer
        selectedMetricLabel="Impression"
        totals={mockTotals}
        startDate={1504308280}
        endDate={1504826680}
      />
    </div>
  ))
  .add('should not render percentage change number only the arrow when previous period value is negative', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <Footer
        selectedMetricLabel="New Followers"
        totals={mockTotals}
        startDate={1504308280}
        endDate={1504826680}
      />
    </div>
  ))
  .add('should not render percentage change number when previous period diff is 0', () => (
    <div
      style={{
        width: '750px',
      }}
    >
      <Footer
        selectedMetricLabel="Retweets"
        totals={mockTotals}
        startDate={1504308280}
        endDate={1504826680}
      />
    </div>
  ));
