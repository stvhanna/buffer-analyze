import { connect } from 'react-redux';
import TopPostsTable from './components/TopPostsTable';

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
  }),
)(TopPostsTable);

// export reducer, actions and action types
export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
