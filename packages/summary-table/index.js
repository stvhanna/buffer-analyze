import { connect } from 'react-redux';
import SummaryTable from './components/SummaryTable';

export default connect(
  state => ({
    loading: state.summary.loading,
    metrics: state.summary.metrics,
    startDate: state.date.startDate,
    endDate: state.date.endDate,
  }),
)(SummaryTable);

export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
export { Table } from './components/SummaryTable';
