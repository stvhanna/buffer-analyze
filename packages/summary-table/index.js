import { connect } from 'react-redux';
import SummaryTable from './components/SummaryTable';

export default connect(
  state => ({
    loading: state.summary.loading,
    metrics: state.summary.metrics,
  }),
)(SummaryTable);

export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
