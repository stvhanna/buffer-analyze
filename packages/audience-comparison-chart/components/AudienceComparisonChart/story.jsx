import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import AudienceComparisonChart from './index';

storiesOf('AudienceComparisonChart')
  .addDecorator(checkA11y)
  .add('a story', () => (
    <AudienceComparisonChart />
  ));
