import { connect } from 'react-redux';
import CompareChart from './components/CompareChart';

// default export = container
export default connect(
  state => ({
    // add state here
  }),
)(CompareChart);

// export reducer, actions and action types
export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
