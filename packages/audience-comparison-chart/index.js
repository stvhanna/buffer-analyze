import { connect } from 'react-redux';
import AudienceComparisonChart from './components/AudienceComparisonChart';

// selectedProfile: state.profiles.profiles.find(
//   profile => profile.id === state.profiles.selectedProfileId,
// )

function mapStateToProps (state) {
  return {
    profilesMetricData: state.audienceComparison.profilesMetricData,
    profileTotals: state.audienceComparison.profileTotals,
    // get the first profile
    selectedProfile: state.profiles.profiles[0],
    loading: state.audienceComparison.loading,
  };
}


// default export = container
export default connect(
  mapStateToProps,
)(AudienceComparisonChart);

// export reducer, actions and action types
export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
