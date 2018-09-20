import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import {
  geyser,
} from '@bufferapp/components/style/color';
import GridItem from './index';
import ChartTooltip from './components/ChartTooltip';
import mockDaily7days from './mock/daily7days';
import mockDaily30days from './mock/daily30days';
import mockDaily90days from './mock/daily90days';

const dayTimestamp = moment.utc(Number(mockDaily7days[0].day)).startOf('day').valueOf();

storiesOf(__dirname, module)
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
  .add('should render a standalone item', () => (
    <div
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
        standalone
      />
    </div>
  ))
  .add('should render a summary grid item with percent sign', () => (
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
          label: 'Engagement Rate',
          value: 20,
          diff: 10,
        }}
        showPercentSign
      />
    </ul>
  ))
  .add('percentage sign show decimals if < 10', () => (
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
          label: 'Engagement Rate',
          value: 9.65,
          diff: 10,
        }}
        showPercentSign
      />
    </ul>
  ))
  .add('should render 2 digits in the grid item', () => (
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
          label: 'Engagement Rate',
          value: 0.04,
          diff: 10,
        }}
        showPercentSign
      />
    </ul>
  ))
  .add('should render 2 digits in the grid item when the percent sign is true', () => (
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
          label: 'Engagement Rate',
          value: 0.69,
          diff: 10,
        }}
        showPercentSign
      />
    </ul>
  ))
  .add('should not render the diff when the metric has a neutral diff', () => (
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
  .add('should render a summary grid item with only arrow icon', () => (
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
        hideDiff
        showArrowIcon
      />
    </ul>
  ))
  .add('should not render arrow icon when diff is also visible', () => (
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
          diff: 60,
        }}
        showArrowIcon
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
  .add('should render a summary grid item with no diff', () => (
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
        hideDiff
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
  .add('should render a grid item with a 7 day chart if 7 days worth of dailyData is provided', () => (
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
        timezone="America/Los_Angeles"
        dailyData={mockDaily7days}
      />
    </ul>
  ))
  .add('should render a grid item with a 30 day chart if 30 days worth of dailyData is provided', () => (
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
          value: 502,
          diff: -40,
        }}
        timezone="America/Los_Angeles"
        dailyData={mockDaily30days}
      />
    </ul>
  ))
  .add('should render a grid item with a 90 day chart if 90 days worth of dailyData is provided', () => (
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
          value: 948,
          diff: 12,
        }}
        timezone="America/Los_Angeles"
        dailyData={mockDaily90days}
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
        dailyData={[mockDaily7days[0]]}
      />
    </ul>
  ))
  .add('Should render the chart tolltip', () => (
    <ChartTooltip
      point={{
        label: 'Engagement average',
        x: dayTimestamp,
        y: 42,
      }}
      dailyData={mockDaily7days}
    />
  ))
  .add('should render a no data tolltip', () => (
    <ChartTooltip
      point={{
        label: '',
        x: dayTimestamp,
        y: 0,
      }}
      dailyData={mockDaily7days}
    />
  ));
