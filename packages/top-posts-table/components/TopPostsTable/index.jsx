import React from 'react';
import PropTypes from 'prop-types';
import cloneDeep from 'lodash.clonedeep';


import {
  ChartStateNoData as NoData,
  ChartStateLoading as Loading,
} from '@bufferapp/analyze-shared-components';

import Title from '../Title';
import PostItem from '../PostItem';

import {
  postsContainer,
  chartColumnHeader,
  metricColumn,
  contentColumn,
} from '../../styles.less';

const gridContainer = {
  minHeight: '12rem',
  position: 'relative',
  margin: '1rem 0 1.5rem',
};

function mergePostMetrics(post, postMetrics) {
  const postStatistics = post.statistics;

  post.statistics = {};

  postMetrics.forEach((postMetricConfig) => {
    const postMetric = cloneDeep(postMetricConfig);

    postMetric.value = postStatistics[postMetric.apiKey];
    post.statistics[postMetricConfig.key] = postStatistics[postMetric.apiKey];
  });

  return post;
}

function getMaxMetricValue(posts, metrics) {
  let max = 0;
  posts.forEach((post) => {
    metrics.forEach((metric) => {
      const value = post.statistics[metric.key].value;
      if (value > max) {
        max = value;
      }
    });
  });
  return max;
}

const TopPostsTable = (props) => {
  const {
    topPosts,
    postMetrics,
    firstColumnMetrics,
    secondColumnMetrics,
    loading,
    profileTimezone,
    startDate,
    endDate,
  } = props;

  const posts = topPosts.map(post => mergePostMetrics(post, postMetrics));

  const maxEngagementValue = getMaxMetricValue(posts, firstColumnMetrics);
  const maxAudienceValue = getMaxMetricValue(posts, secondColumnMetrics);

  const slicedPosts = posts.slice(0, 10);

  let content = null;
  if (loading) {
    content = <Loading active text="Top Posts Loading..." />;
  } else if (slicedPosts.length === 0) {
    content = <NoData />;
  } else {
    content = (
      <div>
        <header>
          <ul className={chartColumnHeader}>
            <li className={contentColumn}>Posts and Stories</li>
            <li className={metricColumn}>Engagements</li>
            <li className={metricColumn}>Audience</li>
          </ul>
        </header>
        <ul className={postsContainer}>
          {slicedPosts.map(post =>
            <PostItem
              key={post.id}
              profileTimezone={profileTimezone}
              post={post}
              maxEngagementValue={maxEngagementValue}
              maxAudienceValue={maxAudienceValue}
              engagementMetrics={firstColumnMetrics}
              audienceMetrics={secondColumnMetrics}
            />,
          )}
        </ul>
      </div>
    );
  }

  return (
    <div>
      <Title startDate={startDate} endDate={endDate} />
      <div style={gridContainer}>
        {content}
      </div>
    </div>
  );
};

TopPostsTable.defaultProps = {
  loading: false,
  startDate: null,
  endDate: null,
};

TopPostsTable.propTypes = {
  loading: PropTypes.bool,
  profileTimezone: PropTypes.string.isRequired,
  startDate: PropTypes.number,
  endDate: PropTypes.number,
  topPosts: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.number,
    id: PropTypes.string,
    media: PropTypes.shape({
      picture: PropTypes.string,
      thumbnail: PropTypes.string,
    }),
    serviceLink: PropTypes.string,
    statistics: PropTypes.shape({
      comments: PropTypes.shape({
        value: PropTypes.number,
      }),
      postClicks: PropTypes.shape({
        value: PropTypes.number,
      }),
      postImpressions: PropTypes.shape({
        value: PropTypes.number,
      }),
      postReach: PropTypes.shape({
        value: PropTypes.number,
      }),
      reactions: PropTypes.shape({
        value: PropTypes.number,
      }),
      shares: PropTypes.shape({
        value: PropTypes.number,
      }),
    }),
    text: PropTypes.string,
    type: PropTypes.string,
  })).isRequired,
  postMetrics: PropTypes.arrayOf(PropTypes.object).isRequired,
  firstColumnMetrics: PropTypes.arrayOf(PropTypes.object).isRequired,
  secondColumnMetrics: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TopPostsTable;
