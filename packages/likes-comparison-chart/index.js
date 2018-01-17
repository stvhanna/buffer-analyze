import { connect } from 'react-redux';
import LikesComparisonChart from './components/LikesComparisonChart';

function mapStateToProps (state) {
  return {
    profilesMetricData: state.likesComparison.profilesMetricData,
    profileTotals: state.likesComparison.profileTotals,
    profiles: state.profiles.profiles,
    loading: state.likesComparison.loading,
  };
}

// default export = container
export default connect(
  mapStateToProps,
)(LikesComparisonChart);

// export reducer, actions and action types
export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
