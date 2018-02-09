import { connect } from 'react-redux';
import AudienceChart from './components/AudienceChart';
import { actions } from './reducer';

function mapStateToProps (state) {
  return {
    data: state.audience.data,
    isPrimaryMetricDropdownOpen: state.audience.isPrimaryMetricDropdownOpen,
    isSecondaryMetricDropdownOpen: state.audience.isSecondaryMetricDropdownOpen,
    loading: state.audience.loading,
    metrics: state.audience.metrics,
    profileService: state.profiles.selectedProfileService,
    selectedMetrics: state.audience.selectedMetrics,
    timezone: state.profiles.selectedProfile ? state.profiles.selectedProfile.timezone : '',
  };
}

const mapDispatchToProps = dispatch => ({
  openPrimaryMetricDropdown: () => dispatch(actions.openPrimaryMetricDropdown()),
  closePrimaryMetricDropdown: () => dispatch(actions.closePrimaryMetricDropdown()),
  selectPrimaryMetric: metricIndex => dispatch(actions.selectPrimaryMetric(metricIndex)),
  openSecondaryMetricDropdown: () => dispatch(actions.openSecondaryMetricDropdown()),
  closeSecondaryMetricDropdown: () => dispatch(actions.closeSecondaryMetricDropdown()),
  selectSecondaryMetric: metricIndex => dispatch(actions.selectSecondaryMetric(metricIndex)),
});

// default export = container
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AudienceChart);

export Title from './components/Title';
// export reducer, actions and action types
export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
