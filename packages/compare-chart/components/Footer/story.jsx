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
  ));
