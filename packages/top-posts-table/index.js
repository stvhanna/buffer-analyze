import { connect } from 'react-redux';
import TopPostsTable from './components/TopPostsTable';

// default export = container
export default connect(
  state => ({
    // add state here
  }),
)(TopPostsTable);

// export reducer, actions and action types
export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
