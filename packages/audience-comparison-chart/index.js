import { connect } from 'react-redux';
import AudienceComparisonChart from './components/AudienceComparisonChart';

// function getSelectedProfileTimezone({ profiles, selectedProfileId }) {
//   const profile = profiles.find(p => p.id === selectedProfileId);
//   return profile.timezone;
// }

// default export = container
export default connect(
  state => ({
    // add state here
    profilesMetricData: state.audienceComparison.profilesMetricData,
    profileTotals: state.audienceComparison.profileTotals,
    loading: state.audienceComparison.loading,
    profileService: state.profiles.selectedProfileService,
    timezone: 'America/New_York',
  }),
)(AudienceComparisonChart);

// export reducer, actions and action types
export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
