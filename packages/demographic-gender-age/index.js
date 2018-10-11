import { connect } from 'react-redux';
import AudienceGenderAgeChart from './components/AudienceGenderAgeChart';
import { actions } from './reducer';

export default connect(
  state => ({
    loading: state.demographic.loading,
    metrics: state.demographic.metrics,
    selectedGroup: state.demographicGenderAge.selectedGroup,
    isDropdownOpen: state.demographicGenderAge.isDropdownOpen,
  }),
  dispatch => ({
    selectMetricsGroup: key => dispatch(actions.selectMetricsGroup(key)),
    openDropdown: () => dispatch(actions.openDropdown()),
    closeDropdown: () => dispatch(actions.closeDropdown()),
  }),
)(AudienceGenderAgeChart);

export reducer, { actions, actionTypes } from './reducer';
export { Chart } from './components/AudienceGenderAgeChart';
export Title from './components/Title';
