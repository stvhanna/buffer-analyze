import { connect } from 'react-redux';
import CompareChart from './components/CompareChart';
import { actions } from './reducer';

function getSelectedProfileTimezone({ profiles, selectedProfileId }) {
  const profile = profiles.find(p => p.id === selectedProfileId);
  return profile.timezone;
}

function mapStateToProps (state) {
  return {
    dailyData: state.compare.metrics.daily,
    loading: state.compare.loading,
    timezone: getSelectedProfileTimezone(state.profiles),
    totals: state.compare.metrics.totals,
    selectedMetricLabel: state.compare.selectedMetricLabel,
    isDropdownOpen: state.compare.isDropdownOpen,
    visualizePreviousPeriod: state.compare.visualizePreviousPeriod,
    profileService: state.profiles.selectedProfileService,
  };
}

const mapDispatchToProps = dispatch => ({
  selectMetric: label => dispatch(actions.selectMetric(label)),
  togglePreviousPeriod: () => dispatch(actions.togglePreviousPeriod()),
  openDropdown: () => dispatch(actions.openDropdown()),
  closeDropdown: () => dispatch(actions.closeDropdown()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CompareChart);

// export reducer, actions and action types
export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
