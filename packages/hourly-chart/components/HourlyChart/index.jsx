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
import ColorIcon from '../Dropdown/ColorIcon';

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

const legendItem = {
  display: 'inline-block',
  padding: '.8rem',
  margin: '0 .8rem',
};

const legendList = {
  padding: '0 1.5rem',
  marginBottom: '1.5rem',
  textAlign: 'center',
};

const Legend = ({ metric, secondaryMetric }) =>
  <ul style={legendList}>
    <li style={legendItem}>
      <ColorIcon />
      <Text size="mini">Tweets</Text>
    </li>
    <li style={legendItem}>
      <ColorIcon metric={metric.label} />
      <Text size="mini">{metric.label}</Text>
    </li>
    { secondaryMetric && <li style={legendItem}>
      <ColorIcon circle metric={secondaryMetric.label} />
      <Text size="mini">{secondaryMetric.label}</Text>
    </li> }
  </ul>;

const ChartContent = props => (
  <div>
    <ChartHeader {...props} />
    <HourlyEngagementChart
      posts={props.postsCount}
      metric={props.selectedMetric}
      secondaryMetric={props.secondaryMetric}
      timezone={props.timezone}
    />
    <PostCountByHour posts={props.postsCount} timezone={props.timezone} />
    <Legend metric={props.selectedMetric} secondaryMetric={props.secondaryMetric} />
  </div>
);

ChartContent.defaultProps = {
  selectedMetric: 0,
  secondaryMetric: null,
  postsCount: [],
  timezone: 'America/Los_Angeles',
};

ChartContent.propTypes = {
  selectedMetric: PropTypes.string,
  secondaryMetric: PropTypes.string,
  postsCount: PropTypes.arrayOf(PropTypes.number),
  timezone: PropTypes.string,
};

const HourlyChart = props =>
  <div>
    <Title />
    <div id="js-dom-to-png-hourly-engagements" style={gridContainer}>
      {props.loading && <Loading noBorder />}
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
