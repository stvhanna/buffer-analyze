import { connect } from 'react-redux';
import ReachComparisonChart from './components/ReachComparisonChart';

function mapStateToProps (state) {
  return {
    profilesMetricData: state.reachComparison.profilesMetricData,
    profileTotals: state.reachComparison.profileTotals,
    profiles: state.profiles.profiles,
    loading: state.reachComparison.loading,
  };
}

// default export = container
export default connect(
  mapStateToProps,
)(ReachComparisonChart);

// export reducer, actions and action types
export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
