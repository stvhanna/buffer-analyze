import { connect } from 'react-redux';
import AudienceComparisonChart from './components/AudienceComparisonChart';

// default export = container
export default connect(
  state => ({
    // add state here
  }),
)(AudienceComparisonChart);

// export reducer, actions and action types
export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
