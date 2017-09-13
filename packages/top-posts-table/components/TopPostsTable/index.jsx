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
  chartContainer,
} from '../../styles.less';

import { metricsConfig } from '../../metrics';

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
      const value = post.statistics[metric.key];
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
    profileService,
    loading,
    profileTimezone,
    startDate,
    endDate,
  } = props;

  const allPostMetrics = metricsConfig[profileService].postMetrics;
  const engagementMetrics = metricsConfig[profileService].topPostsEngagementMetrics;
  const audienceMetrics = metricsConfig[profileService].topPostsAudienceMetrics;

  const posts = topPosts.map(post => mergePostMetrics(post, allPostMetrics));

  const maxEngagementValue = getMaxMetricValue(posts, engagementMetrics);
  const maxAudienceValue = getMaxMetricValue(posts, audienceMetrics);

  const slicedPosts = posts.slice(0, 10);

  let content = null;
  if (loading) {
    content = <Loading active text="Top Posts Loading..." />;
  } else if (slicedPosts.length === 0) {
    content = <NoData />;
  } else {
    content = (
      <aside className={chartContainer}>
        <header>
          <ul className={chartColumnHeader}>
            <li className={contentColumn}>
              Posts and Stories
            </li>
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
              engagementMetrics={engagementMetrics}
              audienceMetrics={audienceMetrics}
            />,
          )}
        </ul>
      </aside>
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
  profileService: PropTypes.string.isRequired,
  startDate: PropTypes.number,
  endDate: PropTypes.number,
  topPosts: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.number,
    id: PropTypes.string,
    serviceLink: PropTypes.string,
    statistics: PropTypes.shape({
      comments: PropTypes.number,
      postClicks: PropTypes.number,
      postImpressions: PropTypes.number,
      postReach: PropTypes.number,
      reactions: PropTypes.number,
      shares: PropTypes.number,
    }),
    text: PropTypes.string,
    type: PropTypes.string,
  })).isRequired,
};

export default TopPostsTable;
