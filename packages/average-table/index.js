import { connect } from 'react-redux';
import AverageTable from './components/AverageTable';

// default export = container
export default connect(
  state => ({
    loading: state.summary.loading,
    metrics: state.summary.metrics,
  }),
)(AverageTable);

// export reducer, actions and action types
export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
