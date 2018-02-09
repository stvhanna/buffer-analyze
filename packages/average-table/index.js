import { connect } from 'react-redux';
import AverageTable from './components/AverageTable';

// default export = container
function mapStateToProps (state) {
  console.log('state.average.metrics', JSON.stringify(state.average.metrics));
  return {
    loading: state.average.loading,
    timezone: state.profiles.selectedProfile ? state.profiles.selectedProfile.timezone : '',
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
