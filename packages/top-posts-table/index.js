import { connect } from 'react-redux';
import TopPostsTable from './components/TopPostsTable';

// default export = container
export default connect(
  state => ({
    loading: state.topPosts.loading,
    topPosts: state.topPosts.topPosts,
    startDate: state.date.startDate,
    endDate: state.date.endDate,
  }),
)(TopPostsTable);

// export reducer, actions and action types
export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
