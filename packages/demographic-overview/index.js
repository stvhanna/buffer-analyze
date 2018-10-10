import { connect } from 'react-redux';
import AudienceOverviewTable from './components/AudienceOverviewTable';
import { actions } from './reducer';

export default connect(
  state => ({
    loading: state.demographic.loading,
    metrics: state.demographic.metrics,
    selectedGroup: state.demographicOverview.selectedGroup,
    isDropdownOpen: state.demographicOverview.isDropdownOpen,
  }),
  dispatch => ({
    selectMetricsGroup: key => dispatch(actions.selectMetricsGroup(key)),
    openDropdown: () => dispatch(actions.openDropdown()),
    closeDropdown: () => dispatch(actions.closeDropdown()),
  }),
)(AudienceOverviewTable);

export reducer, { actions, actionTypes } from './reducer';
export { Table } from './components/AudienceOverviewTable';
export Title from './components/Title';
