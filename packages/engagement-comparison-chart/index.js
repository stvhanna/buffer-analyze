import { connect } from 'react-redux';
import EngagementComparisonChart from './components/EngagementComparisonChart';

function mapStateToProps (state) {
  return {
    profilesMetricData: state.engagementComparison.profilesMetricData,
    profileTotals: state.engagementComparison.profileTotals,
    profiles: state.profiles.profiles,
    loading: state.engagementComparison.loading,
  };
}

// default export = container
export default connect(
  mapStateToProps,
)(EngagementComparisonChart);

// export reducer, actions and action types
export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
