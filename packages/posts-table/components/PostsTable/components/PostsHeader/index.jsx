import React from 'react';
import PropTypes from 'prop-types';

import PostOrderSwitch from './components/PostOrderSwitch';
import TopPostsDropdown from './components/TopPostsDropdown';
import PostsCountBar from './components/PostsCountBar';
import Searchbox from '../Searchbox/index.jsx';

const topPostsHeaderContainer = {
  padding: '0 0 1rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const TopPostsHeader = ({
  metrics,
  selectedMetric,
  isDropdownOpen,
  isDescendingSelected,
  selectMetric,
  toggleDropdown,
  handlePostsCountClick,
  handlePostsSortClick,
  activePostsCount,
  postsCounts,
  search,
  searchTerms,
}) =>
  <div style={topPostsHeaderContainer}>
    <Searchbox search={search} searchTerms={searchTerms} />
    <TopPostsDropdown
      metrics={metrics}
      selectedMetric={selectedMetric}
      isDropdownOpen={isDropdownOpen}
      isDescendingSelected={isDescendingSelected}
      selectMetric={selectMetric}
      toggleDropdown={toggleDropdown}
    />
    <PostOrderSwitch
      handleClick={handlePostsSortClick}
      isDescendingSelected={isDescendingSelected}
    />
  </div>
;

TopPostsHeader.propTypes = {
  metrics: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
  selectedMetric: PropTypes.shape({
    key: PropTypes.string,
    label: PropTypes.string,
  }).isRequired,
  isDropdownOpen: PropTypes.bool.isRequired,
  isDescendingSelected: PropTypes.bool.isRequired,
  selectMetric: PropTypes.func.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
  handlePostsCountClick: PropTypes.func.isRequired,
  handlePostsSortClick: PropTypes.func.isRequired,
  activePostsCount: PropTypes.number.isRequired,
  postsCounts: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
  })),
};

TopPostsHeader.defaultProps = {
  postsCounts: undefined,
};

export default TopPostsHeader;
