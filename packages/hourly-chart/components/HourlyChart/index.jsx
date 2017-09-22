import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '@bufferapp/components';

import {
  geyser,
} from '@bufferapp/components/style/color';

import {
  ChartStateLoading as Loading,
} from '@bufferapp/analyze-shared-components';

import PostCountByHour from '../PostCountByHour';
import HourlyEngagementChart from '../HourlyEngagementChart';
import ChartHeader from '../ChartHeader';

const title = {
  margin: '2rem 0 1rem',
};

const Title = () =>
  <h2 style={title}>
    <Text>Engagements by hour of the day</Text>
  </h2>
;

const gridContainer = {
  minHeight: '12rem',
  position: 'relative',
  margin: '1rem 0 1.5rem',
  border: `1px solid ${geyser}`,
};

const ChartContent = ({ posts, timezone, metrics, selectedMetric, secondaryMetric }) => (
  <div>
    <ChartHeader
      metrics={metrics}
      selectedMetric={selectedMetric}
      secondaryMetric={secondaryMetric}
      timezone={timezone}
    />
    <HourlyEngagementChart
      posts={posts}
      metric={metrics[selectedMetric]}
      secondaryMetric={metrics[secondaryMetric]}
      timezone={timezone}
    />
    <PostCountByHour posts={posts} timezone={timezone} />
  </div>
);

ChartContent.defaultProps = {
  selectedMetric: 0,
  secondaryMetric: null,
  posts: [],
  metrics: [],
  timezone: 'America/Los_Angeles',
};

ChartContent.propTypes = {
  selectedMetric: PropTypes.number,
  secondaryMetric: PropTypes.number,
  posts: PropTypes.arrayOf(PropTypes.number),
  metrics: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    color: PropTypes.string,
    hourlyMetrics: PropTypes.arrayOf(PropTypes.number),
  })),
  timezone: PropTypes.string,
};

const HourlyChart = props =>
  <div>
    <Title />
    <div id="js-dom-to-png-hourly-engagements" style={gridContainer}>
      {props.loading && <Loading />}
      {!props.loading && <ChartContent {...props} />}
    </div>
  </div>;

HourlyChart.defaultProps = {
  loading: false,
};

HourlyChart.propTypes = {
  loading: PropTypes.bool,
};

export default HourlyChart;
