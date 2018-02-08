import { connect } from 'react-redux';
import AverageTable from './components/AverageTable';

function getSelectedProfileTimezone({ profiles, selectedProfileId }) {
  const profile = profiles.find(p => p.id === selectedProfileId);
  return profile.timezone;
}

// default export = container
function mapStateToProps (state) {
  return {
    loading: state.average.loading,
    timezone: getSelectedProfileTimezone(state.profiles),
    metrics: state.average.metrics,
    profileService: state.profiles.selectedProfileService,
  };
}
export default connect(
  mapStateToProps,
)(AverageTable);

export { Table, Title } from './components/AverageTable';
// export reducer, actions and action types
export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
