import { connect } from 'react-redux';
import ContextualCompare from './components/ContextualCompare';
import { actions } from './reducer';

function getSelectedProfileTimezone({ profiles, selectedProfileId }) {
  const profile = profiles.find(p => p.id === selectedProfileId);
  return profile.timezone;
}

function mapStateToProps (state) {
  return {
    data: state.contextual.data,
    isPrimaryMetricDropdownOpen: state.contextual.isPrimaryMetricDropdownOpen,
    isSecondaryMetricDropdownOpen: state.contextual.isSecondaryMetricDropdownOpen,
    isPresetsDropdownOpen: state.contextual.isPresetsDropdownOpen,
    loading: state.contextual.loading,
    metrics: state.contextual.metrics,
    mode: state.contextual.mode,
    presets: state.contextual.presets,
    profileService: state.profiles.selectedProfileService,
    selectedMetricLabel: state.contextual.selectedMetricLabel,
    selectedMetrics: state.contextual.selectedMetrics,
    selectedPreset: state.contextual.selectedPreset,
    timezone: getSelectedProfileTimezone(state.profiles),
  };
}

const mapDispatchToProps = dispatch => ({
  selectMode: mode => dispatch(actions.selectMode(mode)),
  openPrimaryMetricDropdown: () => dispatch(actions.openPrimaryMetricDropdown()),
  closePrimaryMetricDropdown: () => dispatch(actions.closePrimaryMetricDropdown()),
  selectPrimaryMetric: metricIndex => dispatch(actions.selectPrimaryMetric(metricIndex)),
  openSecondaryMetricDropdown: () => dispatch(actions.openSecondaryMetricDropdown()),
  closeSecondaryMetricDropdown: () => dispatch(actions.closeSecondaryMetricDropdown()),
  selectSecondaryMetric: metricIndex => dispatch(actions.selectSecondaryMetric(metricIndex)),

  togglePresetDropdown: () => dispatch(actions.togglePresetDropdown()),
  selectPreset: preset => dispatch(actions.selectPreset(preset)),
});

// default export = container
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContextualCompare);

export Chart from './components/Chart';
export Title from './components/Title';
// export reducer, actions and action types
export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
