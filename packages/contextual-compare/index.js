import { connect } from 'react-redux';
import COntextualCompare from './components/COntextualCompare';

// default export = container
export default connect(
  state => ({
    // add state here
  }),
)(COntextualCompare);

// export reducer, actions and action types
export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
