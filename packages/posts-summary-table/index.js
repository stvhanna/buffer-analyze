import { connect } from 'react-redux';
import PostsSummaryTable from './components/PostsSummaryTable';

// default export = container
export default connect(
  state => ({
    loading: state.summary.loading,
    metrics: state.summary.metrics,
    startDate: state.date.startDate,
    endDate: state.date.endDate,
  }),
)(PostsSummaryTable);

// export reducer, actions and action types
export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
