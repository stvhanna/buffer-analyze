import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  ChartStateNoData as NoData,
  ChartStateLoading as Loading,
  ChartCard,
  ChartHeader,
} from '@bufferapp/analyze-shared-components';
import Text from '@bufferapp/components/Text';

import Title from '../Title';
import PostItem from './components/PostItem';
import PostsHeader from './components/PostsHeader';
import PostsCountBar from './components/PostsHeader/components/PostsCountBar';
import { metricsConfig } from './metrics';
import BreakdownLegend from './components/BreakdownLegend';

const ChartContainer = styled.div`
  position: relative;
  border-radius: 2px;
  font-size: 12px;
  min-height: 177px;
  opacity: ${props => (props.searching ? '.3' : '1')};
`;

const PostsTableWrapper = styled.ol`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const GridContainer = styled.div`
  position: relative;
  padding: 0.75rem 1.5rem 1rem;
`;

const Footer = styled.footer`
  padding-top: 1rem;
  text-align: center;
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

export const Table = (props) => {
  const { metrics: topPosts, service, selectedMetric } = props;
  const engagementMetrics = metricsConfig[service].topPostsEngagementMetrics;
  const audienceMetrics = metricsConfig[service].topPostsAudienceMetrics;

  const allMetrics = [...engagementMetrics, ...audienceMetrics];

  const [metricSorted] = allMetrics.filter(metric =>
    metric.key === (selectedMetric ? selectedMetric.key : defaultSortMetrics[service].key)
  );

  const maxEngagementValue = getMaxMetricValue(topPosts, engagementMetrics);
  const maxAudienceValue = getMaxMetricValue(topPosts, audienceMetrics);

  return (
    <ChartContainer searching={props.searching}>
      {props.forReport && <BreakdownLegend
        posts={topPosts.length}
        searchTerms={props.searchTerms}
        selectedMetric={metricSorted}
        descending={props.isDescendingSelected}
      />}
      <PostsTableWrapper>
          {topPosts.map((post, index) =>
            <PostItem
              key={post.id}
              index={index}
              timezone={props.timezone}
              post={post}
              maxEngagementValue={maxEngagementValue}
              maxAudienceValue={maxAudienceValue}
              engagementMetrics={engagementMetrics}
              audienceMetrics={audienceMetrics}
              exporting={props.exporting}
            />,
          )}
      </PostsTableWrapper>
    </ChartContainer>
  );
};

Table.defaultProps = {
  forReport: false,
  searchTerms: [],
};

Table.propTypes = {
  forReport: PropTypes.bool,
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
  exporting: PropTypes.bool.isRequired,
  searchTerms: PropTypes.arrayOf(PropTypes.string),
  isDescendingSelected: PropTypes.bool.isRequired,
  selectedMetric: PropTypes.shape({
    key: PropTypes.string,
    label: PropTypes.string,
  }).isRequired,
};

const PostsTable = (props) => {
  const {
    addToReportButton,
    metrics,
    profileService,
    selectedProfileId,
    loading,
    searching,
    timezone,
    isDropdownOpen,
    isDescendingSelected,
    selectedMetric,
    selectMetric,
    toggleDropdown,
    handlePostsCountClick,
    activePostsCount,
    exporting,
    searchTerms,
  } = props;
  if (selectedProfileId === null) {
    return null;
  }

  const topPosts = metrics;
  const allPostMetrics = metricsConfig[profileService].postMetrics;

  const initialSelectedMetric = Object.keys(selectedMetric).length === 0 ?
    defaultSortMetrics[profileService] : selectedMetric;

  let content = null;
  if (loading && !searching) {
    content = <Loading active noBorder large />;
  } else if (topPosts.length === 0) {
    if (searchTerms.length) {
      content = (<NoData>
        <Text>There are no posts in this date range that match your terms</Text>
      </NoData>);
    } else content = <NoData />;
  } else {
    content = (
      <div>
        <Table
          searching={searching}
          metrics={metrics}
          timezone={timezone}
          service={profileService}
          exporting={exporting}
          selectedMetric={initialSelectedMetric}
        />
        <Footer>
          <PostsCountBar
            handlePostsCountClick={handlePostsCountClick}
            activePostsCount={activePostsCount}
            postsCounts={props.postsCounts}
          />
        </Footer>
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
        {(topPosts.length > 0 || searchTerms.length > 0) && <PostsHeader
          {...props}
          metrics={allPostMetrics}
          selectedMetric={initialSelectedMetric}
          isDescendingSelected={isDescendingSelected}
          selectMetric={selectMetric}
          toggleDropdown={toggleDropdown}
          isDropdownOpen={isDropdownOpen}
          handlePostsCountClick={handlePostsCountClick}
          activePostsCount={activePostsCount}
        />}
        {content}
      </GridContainer>
    </ChartCard>
  );
};

PostsTable.defaultProps = {
  isDropdownOpen: false,
  loading: false,
  searching: false,
  addToReportButton: null,
  selectedProfileId: null,
  exporting: undefined,
  searchTerms: [],
};

PostsTable.propTypes = {
  loading: PropTypes.bool,
  searching: PropTypes.bool,
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
  exporting: PropTypes.bool,
  searchTerms: PropTypes.arrayOf(PropTypes.string),
};

export default PostsTable;
