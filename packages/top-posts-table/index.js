import { connect } from 'react-redux';
import TopPostsTable from './components/TopPostsTable';

import { actions } from './reducer';

// default export = container
export default connect(
  (state, props) => ({
    loading: state.topPosts.loading,
    profileTimezone: state.profiles.profiles.find(
      profile => profile.id === props.selectedProfileId,
    ).timezone,
    topPosts: state.topPosts.topPosts,
    startDate: state.date.startDate,
    endDate: state.date.endDate,
    isDropdownOpen: state.topPosts.isDropdownOpen,

    isDescendingSelected: state.topPosts.isDescendingSelected,
    selectedMetric: state.topPosts.selectedMetric,
    activePostsCount: state.topPosts.activePostsCount,
  }),
  dispatch => ({
    selectMetric: ({ metric, descending }) => dispatch(
      actions.selectMetric(metric, descending),
    ),
    toggleDropdown: () => dispatch(actions.toggleDropdown()),
    handlePostsCountClick: ({ postsCount }) => dispatch(
      actions.handlePostsCountClick(postsCount),
    ),
  }),
)(TopPostsTable);

// export reducer, actions and action types
export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
