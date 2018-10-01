import React from 'react';
import moment from 'moment-timezone';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import ChartTooltip from './index';

const dayTimestamp = moment.utc(1505174400000).startOf('day').valueOf();
const previousDayTimestamp = moment.utc(1503446400000).startOf('day').valueOf();

storiesOf('ChartTooltip', module)
  .addDecorator(checkA11y)
  .add('should render the tooltip', () => (
    <div
      style={{
        backgroundColor: '#343E46',
      }}
    >
      <ChartTooltip
        color="#fda3f3"
        day={dayTimestamp}
        previousPeriodDay={previousDayTimestamp}
        label="Engagements"
        postsCount={5}
        value={42}
        profileService="facebook"
        timezone="America/New_York"
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
        day={dayTimestamp}
        previousPeriodDay={previousDayTimestamp}
        label="Engagements"
        postsCount={5}
        value={42}
        profileService="twitter"
        timezone="America/New_York"
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
        day={dayTimestamp}
        previousPeriodDay={previousDayTimestamp}
        label="Engagements"
        postsCount={5}
        previousPostsCount={10}
        value={42}
        previousValue={100}
        visualizePreviousPeriod
        profileService="facebook"
        timezone="America/New_York"
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
        day={dayTimestamp}
        previousPeriodDay={previousDayTimestamp}
        label="Posts"
        postsCount={5}
        value={42}
        profileService="facebook"
        timezone="America/New_York"
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
        day={dayTimestamp}
        previousPeriodDay={previousDayTimestamp}
        label="Posts"
        postsCount={5}
        previousPostsCount={10}
        value={42}
        visualizePreviousPeriod
        profileService="facebook"
        timezone="America/New_York"
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
        day={dayTimestamp}
        previousPeriodDay={previousDayTimestamp}
        profileService="facebook"
        timezone="America/New_York"
      />
    </div>
  ))
  .add('should render a engagement rate tooltip', () => (
    <div
      style={{
        backgroundColor: '#343E46',
      }}
    >
      <ChartTooltip
        color="#fda3f3"
        day={dayTimestamp}
        previousPeriodDay={previousDayTimestamp}
        label="Engagement Rate"
        postsCount={5}
        previousPostsCount={10}
        value={8}
        previousValue={8}
        profileService="facebook"
        timezone="America/New_York"
      />
    </div>
  ))
  .add('should render a engagement rate tooltip with previous period', () => (
    <div
      style={{
        backgroundColor: '#343E46',
      }}
    >
      <ChartTooltip
        color="#fda3f3"
        day={dayTimestamp}
        previousPeriodDay={previousDayTimestamp}
        label="Engagement Rate"
        postsCount={5}
        previousPostsCount={10}
        value={8}
        previousValue={8}
        profileService="facebook"
        timezone="America/New_York"
        visualizePreviousPeriod
      />
    </div>
  ));
