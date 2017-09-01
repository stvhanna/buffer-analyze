import { connect } from 'react-redux';
import AverageTable from './components/AverageTable';

// default export = container
function mapStateToProps (state) {
  console.log(state);
  return {
    loading: state.average.loading,
    metrics: state.average.metrics,
  };
}
export default connect(
  mapStateToProps,
)(AverageTable);

// export reducer, actions and action types
export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
