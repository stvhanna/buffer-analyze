import { connect } from 'react-redux';
import ContextualCompare from './components/ContextualCompare';

// default export = container
export default connect(
  state => ({
    // add state here
  }),
)(ContextualCompare);

// export reducer, actions and action types
export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
