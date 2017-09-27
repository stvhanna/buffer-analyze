import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import ChartTooltip from './index';

storiesOf('ChartTooltip')
  .addDecorator(checkA11y)
  .add('should render the tooltip', () => (
    <div
      style={{
        backgroundColor: '#343E46',
      }}
    >
      <ChartTooltip
        color="#fda3f3"
        day={1505174400000}
        previousPeriodDay={1503446400000}
        label="Engagements"
        postsCount={5}
        value={42}
        profileService="facebook"
      />
    </div>
  ))
  .add('should render the tooltip with twitter specific copy', () => (
    <div
      style={{
        backgroundColor: '#343E46',
      }}
    >
      <ChartTooltip
        color="#fda3f3"
        day={1505174400000}
        previousPeriodDay={1503446400000}
        label="Engagements"
        postsCount={5}
        value={42}
        profileService="twitter"
      />
    </div>
  ))
  .add('should render the tooltip with the previous data', () => (
    <div
      style={{
        backgroundColor: '#343E46',
      }}
    >
      <ChartTooltip
        color="#fda3f3"
        day={1505174400000}
        previousPeriodDay={1503446400000}
        label="Engagements"
        postsCount={5}
        previousPostsCount={10}
        value={42}
        previousValue={100}
        visualizePreviousPeriod
        profileService="facebook"
      />
    </div>
  ))
  .add('should render updates measure tooltip', () => (
    <div
      style={{
        backgroundColor: '#343E46',
      }}
    >
      <ChartTooltip
        color="#fda3f3"
        day={1505174400000}
        previousPeriodDay={1503446400000}
        label="Posts"
        postsCount={5}
        value={42}
        profileService="facebook"
      />
    </div>
  ))
  .add('should render updates measure tooltip with previous comparison', () => (
    <div
      style={{
        backgroundColor: '#343E46',
      }}
    >
      <ChartTooltip
        color="#fda3f3"
        day={1505174400000}
        previousPeriodDay={1503446400000}
        label="Posts"
        postsCount={5}
        previousPostsCount={10}
        value={42}
        visualizePreviousPeriod
        profileService="facebook"
      />
    </div>
  ))
  .add('should render a no update published message', () => (
    <div
      style={{
        backgroundColor: '#343E46',
      }}
    >
      <ChartTooltip
        day={1505174400000}
        previousPeriodDay={1503446400000}
        profileService="facebook"
      />
    </div>
  ));
