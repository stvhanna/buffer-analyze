import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import ChartTooltip from './index';

storiesOf('ChartTooltip')
  .addDecorator(checkA11y)
  .add('should render the tooltip', () => (
    <div>
      <ChartTooltip
        color="#fda3f3"
        day={1505174400000}
        label="Engagements"
        postsCount={5}
        value={42}
      />
    </div>
  ))
  .add('should render the tooltip with the previous data', () => (
    <div>
      <ChartTooltip
        color="#fda3f3"
        day={1505174400000}
        label="Engagements"
        postsCount={5}
        previousPostsCount={10}
        value={42}
        previousValue={100}
        visualizePreviousPeriod
      />
    </div>
  ))
  .add('should render updates measure tooltip', () => (
    <div>
      <ChartTooltip
        color="#fda3f3"
        day={1505174400000}
        label="Posts"
        postsCount={5}
        value={42}
      />
    </div>
  ))
  .add('should render updates measure tooltip with previous comparison', () => (
    <div>
      <ChartTooltip
        color="#fda3f3"
        day={1505174400000}
        label="Posts"
        postsCount={5}
        previousPostsCount={10}
        value={42}
        visualizePreviousPeriod
      />
    </div>
  ))
  .add('should render a no update published message', () => (
    <div>
      <ChartTooltip
        day={1505174400000}
      />
    </div>
  ));
