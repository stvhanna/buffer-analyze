import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  Button,
} from '@bufferapp/components';

import {
  PlusIcon,
} from '@bufferapp/components/Icon/Icons';


import {
  geyser,
} from '@bufferapp/components/style/color';

import {
  ChartStateLoading as Loading,
} from '@bufferapp/analyze-shared-components';

import PostCountByHour from '../PostCountByHour';
import HourlyEngagementChart from '../HourlyEngagementChart';
import TimezoneInfo from '../TimezoneInfo';
import Dropdown from '../Dropdown';

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

const chartHeader = {
  display: 'flex',
  alignItems: 'center',
  padding: '1.25rem',
};

const toggleWrapper = {
  marginLeft: '1.25rem',
};

const closeButton = {
  marginTop: 'auto',
  marginBottom: 'auto',
  marginLeft: '10px',
  cursor: 'pointer',
  lineHeight: '1',
};

const openButton = {
  display: 'inline-block',
  padding: '7px 11px',
  border: '1px solid #ced7df',
  borderRadius: '3px',
  cursor: 'pointer',
};

const SecondaryMetricToggle = ({ metric, metrics }) => (
  <span style={toggleWrapper}>
    { metric && <Dropdown metrics={metrics} selectedMetric={metric} />}
    { metric && <Button noStyle><Text size="small" color="geyser"><span style={closeButton}>x</span></Text></Button>}
    { !metric && <Button noStyle><span style={openButton}><PlusIcon size="small" /></span></Button>}
  </span>
);

const ChartContent = ({ posts, timezone, metrics, selectedMetric, secondaryMetric }) => (
  <div>
    <section style={chartHeader}>
      <Dropdown metrics={metrics} selectedMetric={selectedMetric} />
      <SecondaryMetricToggle metric={secondaryMetric} metrics={metrics} />
      <TimezoneInfo timezone={timezone} />
    </section>
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
