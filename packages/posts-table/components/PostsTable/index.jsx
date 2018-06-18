import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  ChartStateNoData as NoData,
  ChartStateLoading as Loading,
  ChartCard,
  ChartHeader,
} from '@bufferapp/analyze-shared-components';

import Title from '../Title';
import PostItem from './components/PostItem';
import PostsHeader from './components/PostsHeader';
import { metricsConfig } from './metrics';

const ChartContainer = styled.div`
  position: relative;
  border-radius: 2px;
  font-size: 12px;
  min-height: 177px;
`;

const PostsTableWrapper = styled.table`
  padding: 0;
  margin: 0;
`;

const GridContainer = styled.div`
  position: relative;
  padding: 0.75rem 1.5rem 1rem;
`;

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

export const Table = ({ metrics, timezone, service }) => {
  const topPosts = metrics;
  const engagementMetrics = metricsConfig[service].topPostsEngagementMetrics;
  const audienceMetrics = metricsConfig[service].topPostsAudienceMetrics;

  const maxEngagementValue = getMaxMetricValue(topPosts, engagementMetrics);
  const maxAudienceValue = getMaxMetricValue(topPosts, audienceMetrics);

  return (
    <ChartContainer>
      <PostsTableWrapper>
        {topPosts.map((post, index) =>
          <PostItem
            key={post.id}
            index={index}
            timezone={timezone}
            post={post}
            maxEngagementValue={maxEngagementValue}
            maxAudienceValue={maxAudienceValue}
            engagementMetrics={engagementMetrics}
            audienceMetrics={audienceMetrics}
          />,
        )}
      </PostsTableWrapper>
    </ChartContainer>
  );
};

Table.propTypes = {
  timezone: PropTypes.string.isRequired,
  service: PropTypes.string.isRequired,
  metrics: PropTypes.arrayOf(PropTypes.shape({
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

const PostsTable = (props) => {
  const {
    addToReportButton,
    metrics,
    profileService,
    selectedProfileId,
    loading,
    timezone,
    isDropdownOpen,
    isDescendingSelected,
    selectedMetric,
    selectMetric,
    toggleDropdown,
    handlePostsCountClick,
    activePostsCount,
  } = props;
  if (selectedProfileId === null) {
    return null;
  }

  // TODO: Move this to RPC endpoint and pass it as a prop to PostTable components
  const topPosts = metrics;
  const allPostMetrics = metricsConfig[profileService].postMetrics;

  const initialSelectedMetric = Object.keys(selectedMetric).length === 0 ?
    defaultSortMetrics[profileService] : selectedMetric;

  let content = null;
  if (loading) {
    content = <Loading active noBorder large />;
  } else if (topPosts.length === 0) {
    content = <NoData />;
  } else {
    content = (
      <div>
        <PostsHeader
          {...props}
          metrics={allPostMetrics}
          selectedMetric={initialSelectedMetric}
          isDescendingSelected={isDescendingSelected}
          selectMetric={selectMetric}
          toggleDropdown={toggleDropdown}
          isDropdownOpen={isDropdownOpen}
          handlePostsCountClick={handlePostsCountClick}
          activePostsCount={activePostsCount}
        />
        <Table
          metrics={metrics}
          timezone={timezone}
          service={profileService}
        />
      </div>
    );
  }

  return (
    <ChartCard>
      <ChartHeader>
        <Title {...props} />
        {addToReportButton}
      </ChartHeader>
      <GridContainer>
        {content}
      </GridContainer>
    </ChartCard>
  );
};

PostsTable.defaultProps = {
  isDropdownOpen: false,
  loading: false,
  addToReportButton: null,
  selectedProfileId: null,
};

PostsTable.propTypes = {
  loading: PropTypes.bool,
  timezone: PropTypes.string.isRequired,
  profileService: PropTypes.string.isRequired,
  metrics: PropTypes.arrayOf(PropTypes.shape({
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
  addToReportButton: PropTypes.element,
  selectedProfileId: PropTypes.string,
};

export default PostsTable;
