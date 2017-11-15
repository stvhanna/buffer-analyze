import { connect } from 'react-redux';
import ReachComparisonChart from './components/ReachComparisonChart';

// default export = container
export default connect(
  state => ({
    // add state here
  }),
)(ReachComparisonChart);

// export reducer, actions and action types
export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
