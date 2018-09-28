import { connect } from 'react-redux';
import AudienceOverviewTable from './components/AudienceOverviewTable';
import { actions } from './reducer';

export default connect(
  state => ({
    loading: state.demographic.loading,
    metrics: state.demographic.metrics,
    selectedGroup: state.demographic.selectedGroup,
    isDropdownOpen: state.demographic.isDropdownOpen,
  }),
  dispatch => ({
    selectMetricsGroup: key => dispatch(actions.selectMetricsGroup(key)),
    openDropdown: () => dispatch(actions.openDropdown()),
    closeDropdown: () => dispatch(actions.closeDropdown()),
  }),
)(AudienceOverviewTable);


export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
export { Table } from './components/AudienceOverviewTable';
export Title from './components/Title';
