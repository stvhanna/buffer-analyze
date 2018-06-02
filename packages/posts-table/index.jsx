import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AddReport from '@bufferapp/add-report';

import PostsTable from './components/PostsTable';
import { actions } from './reducer';

export const PostsTableWrapper = props => (<div id="js-dom-to-png-posts"><PostsTable
  {...props}
  postsCounts={[
    { value: '5' },
    { value: '10' },
    { value: '25' },
    { value: '50' },
    { value: 'All' },
  ]}
  addToReportButton={<AddReport
    chart="posts"
    state={{
      descending: props.isDescendingSelected,
      sortBy: props.selectedMetric.apiKey,
      limit: props.activePostsCount,
    }}
  />}
/></div>);

PostsTableWrapper.defaultProps = {
  isDropdownOpen: false,
  loading: false,
};

PostsTableWrapper.propTypes = {
  isDescendingSelected: PropTypes.bool.isRequired,
  selectedMetric: PropTypes.shape({
    key: PropTypes.string,
    apiKey: PropTypes.string,
    label: PropTypes.string,
  }).isRequired,
  activePostsCount: PropTypes.number.isRequired,
};

// default export = container
export default connect(
  state => ({
    loading: state.posts.loading,
    timezone: state.profiles.selectedProfile ? state.profiles.selectedProfile.timezone : '',
    metrics: state.posts.posts,
    startDate: state.date.startDate,
    endDate: state.date.endDate,
    isDropdownOpen: state.posts.isDropdownOpen,
    isDescendingSelected: state.posts.isDescendingSelected,
    selectedMetric: state.posts.selectedMetric,
    activePostsCount: state.posts.activePostsCount,
    profileService: state.profiles.selectedProfile ? state.profiles.selectedProfile.service : '',
    selectedProfileId: state.profiles.selectedProfile ? state.profiles.selectedProfile.id : null,
  }),
  dispatch => ({
    selectMetric: ({ metric, descending }) => dispatch(
      actions.selectMetric(metric, descending),
    ),
    toggleDropdown: () => dispatch(actions.toggleDropdown()),
    handlePostsCountClick: ({ postsCount }) => dispatch(
      actions.handlePostsCountClick(postsCount),
    ),
    handlePostsSortClick: ({ isDescendingSelected }) => dispatch(
      actions.handlePostsSortClick(isDescendingSelected),
    ),
  }),
)(PostsTableWrapper);

// export reducer, actions and action types
export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
export { Table } from './components/PostsTable';
export Title from './components/Title';
