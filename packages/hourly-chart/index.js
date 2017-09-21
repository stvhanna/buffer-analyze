import { connect } from 'react-redux';
import HourlyChart from './components/HourlyChart';

// default export = container
export default connect(
  state => ({
    // add state here
  }),
)(HourlyChart);

// export reducer, actions and action types
export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
