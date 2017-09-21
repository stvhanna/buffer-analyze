import React from 'react';
import PropTypes from 'prop-types';
import cloneDeep from 'lodash.clonedeep';

import {
  Text,
} from '@bufferapp/components';

import {
  ChartStateNoData as NoData,
  ChartStateLoading as Loading,
} from '@bufferapp/analyze-shared-components';

import Title from '../Title';
import PostItem from '../PostItem';
import TopPostsHeader from '../TopPostsHeader';

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

const defaultSortMetrics = {
  facebook: {
    key: 'post_impressions',
    label: 'Post Impressions',
  },
  twitter: {
    key: 'impressions',
    label: 'Impressions',
  },
  instagram: {
    key: 'likes',
    label: 'Likes',
  },
};

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
    isDropdownOpen,
    isDescendingSelected,
    selectedMetric,
    selectMetric,
    toggleDropdown,
    handlePostsCountClick,
    activePostsCount,
  } = props;

  // TODO: Move this to RPC endpoint and pass it as a prop to TopPostTable components
  const allPostMetrics = metricsConfig[profileService].postMetrics;
  const engagementMetrics = metricsConfig[profileService].topPostsEngagementMetrics;
  const audienceMetrics = metricsConfig[profileService].topPostsAudienceMetrics;


  const initialSelectedMetric = Object.keys(selectedMetric).length === 0 ?
    defaultSortMetrics[profileService] : selectedMetric;

  const maxEngagementValue = getMaxMetricValue(topPosts, engagementMetrics);
  const maxAudienceValue = getMaxMetricValue(topPosts, audienceMetrics);

  let content = null;
  if (loading) {
    content = <Loading active text="Top Posts Loading..." />;
  } else if (topPosts.length === 0) {
    content = <NoData />;
  } else {
    content = (
      <div>
        <TopPostsHeader
          metrics={allPostMetrics}
          selectedMetric={initialSelectedMetric}
          isDescendingSelected={isDescendingSelected}
          selectMetric={selectMetric}
          toggleDropdown={toggleDropdown}
          isDropdownOpen={isDropdownOpen}
          handlePostsCountClick={handlePostsCountClick}
          activePostsCount={activePostsCount}
        />
        <aside className={chartContainer}>
          <header>
            <ul className={chartColumnHeader}>
              <li className={contentColumn}>
                <Text size="mini">Posts and Stories</Text>
              </li>
              <li className={metricColumn}>
                <Text size="mini">Engagements</Text>
              </li>
              <li className={metricColumn}>
                <Text size="mini">Audience</Text>
              </li>
            </ul>
          </header>
          <ul className={postsContainer}>
            {topPosts.map(post =>
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
      </div>
    );
  }

  return (
    <div>
      <Title startDate={startDate} endDate={endDate} />
      <div id="js-dom-to-png-top-posts" style={gridContainer}>
        {content}
      </div>
    </div>
  );
};

TopPostsTable.defaultProps = {
  loading: false,
  startDate: null,
  endDate: null,
  isDropdownOpen: false,
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
  isDropdownOpen: PropTypes.bool,
  isDescendingSelected: PropTypes.bool.isRequired,
  selectedMetric: PropTypes.shape({
    key: PropTypes.string,
    label: PropTypes.string,
  }).isRequired,
  toggleDropdown: PropTypes.func.isRequired,
  selectMetric: PropTypes.func.isRequired,
  handlePostsCountClick: PropTypes.func.isRequired,
  activePostsCount: PropTypes.number.isRequired,
};

export default TopPostsTable;
