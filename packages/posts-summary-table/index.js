import { connect } from 'react-redux';
import PostsSummaryTable from './components/PostsSummaryTable';

// default export = container
export default connect(
  state => ({
    // add state here
  }),
)(PostsSummaryTable);

// export reducer, actions and action types
export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
