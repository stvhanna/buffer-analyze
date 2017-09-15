import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import {
  geyser,
} from '@bufferapp/components/style/color';
import GridItem from './index';
import ChartTooltip from './components/ChartTooltip';
import mockDailyData from './mock/dailyData';


storiesOf('GridItem')
  .addDecorator(checkA11y)
  .add('should render a summary grid item with positive diff', () => (
    <ul
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        padding: '0',
        margin: '0 auto',
        borderTop: `solid 1px ${geyser}`,
        borderLeft: `solid 1px ${geyser}`,
        borderRadius: '2px',
      }}
    >
      <GridItem
        metric={{
          label: 'Tweets',
          value: 150,
          diff: 50,
        }}
      />
    </ul>
  ))
  .add('should render a summary grid item with a neutral diff', () => (
    <ul
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        padding: '0',
        margin: '0 auto',
        borderTop: `solid 1px ${geyser}`,
        borderLeft: `solid 1px ${geyser}`,
        borderRadius: '2px',
      }}
    >
      <GridItem
        metric={{
          label: 'Tweets',
          value: 0,
          diff: 0,
        }}
      />
    </ul>
  ))
  .add('should render a summary grid item with negative diff', () => (
    <ul
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        padding: '0',
        margin: '0 auto',
        borderTop: `solid 1px ${geyser}`,
        borderLeft: `solid 1px ${geyser}`,
        borderRadius: '2px',
      }}
    >
      <GridItem
        metric={{
          label: 'Tweets',
          value: 10,
          diff: -60,
        }}
      />
    </ul>
  ))
  .add('should render a grid item with a custom Label', () => {
    const CustomLabel = ({ labelCopy }) => (
      <span>{labelCopy}</span>
    );
    CustomLabel.propTypes = {
      labelCopy: PropTypes.string.isRequired,
    };
    return (<ul
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        padding: '0',
        margin: '0 auto',
        borderTop: `solid 1px ${geyser}`,
        borderLeft: `solid 1px ${geyser}`,
        borderRadius: '2px',
      }}
    >
      <GridItem
        metric={{
          label: 'Tweets',
          value: 10,
          diff: -60,
          color: '#cccccc',
        }}
        customLabel={<CustomLabel labelCopy="This is a custom label" />}
      />
    </ul>);
  })
  .add('should render a grid item with a Chart if dailyData is provided', () => (
    <ul
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        padding: '0',
        margin: '0 auto',
        borderTop: `solid 1px ${geyser}`,
        borderLeft: `solid 1px ${geyser}`,
        borderRadius: '2px',
      }}
    >
      <GridItem
        metric={{
          label: 'Engagement average',
          value: 42,
          diff: 60,
        }}
        dailyData={mockDailyData}
      />
    </ul>
  ))
  .add('should not render the chart if we have only one day of data', () => (
    <ul
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        padding: '0',
        margin: '0 auto',
        borderTop: `solid 1px ${geyser}`,
        borderLeft: `solid 1px ${geyser}`,
        borderRadius: '2px',
      }}
    >
      <GridItem
        metric={{
          label: 'Engagement average',
          value: 42,
          diff: 60,
        }}
        dailyData={[mockDailyData[0]]}
      />
    </ul>
  ))
  .add('Should render the chart tolltip', () => (
    <ChartTooltip
      point={{
        label: 'Engagement average',
        x: 1504137600000,
        y: 42,
        timezone: 'Etc/UTC',
      }}
      dailyData={mockDailyData}
    />
  ))
  .add('should render a no data tolltip', () => (
    <ChartTooltip
      point={{
        label: '',
        x: 1504137600000,
        y: 0,
        timezone: 'Etc/UTC',
      }}
      dailyData={mockDailyData}
    />
  ));
