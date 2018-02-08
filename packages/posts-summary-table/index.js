import { connect } from 'react-redux';
import PostsSummaryTable from './components/PostsSummaryTable';

// default export = container
export default connect(
  state => ({
    loading: state.postsSummary.loading,
    metrics: state.postsSummary.metrics,
    startDate: state.date.startDate,
    endDate: state.date.endDate,
    profileService: state.profiles.selectedProfile ? state.profiles.selectedProfile.service : '',
  }),
)(PostsSummaryTable);

// export reducer, actions and action types
export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
export { Table } from './components/PostsSummaryTable';
export Title from './components/Title';
