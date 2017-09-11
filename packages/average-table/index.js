import { connect } from 'react-redux';
import AverageTable from './components/AverageTable';

function getSelectedProfileTimezone({ profiles, selectedProfileId }) {
  const profile = profiles.find(p => p.id === selectedProfileId);
  return profile.timezone;
}

// default export = container
function mapStateToProps (state) {
  return {
    dailyData: state.average.metrics.daily,
    loading: state.average.loading,
    timezone: getSelectedProfileTimezone(state.profiles),
    totals: state.average.metrics.totals,
  };
}
export default connect(
  mapStateToProps,
)(AverageTable);

// export reducer, actions and action types
export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
