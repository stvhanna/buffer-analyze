import { connect } from 'react-redux';
import AverageTable from './components/AverageTable';

// default export = container
function mapStateToProps (state) {
  return {
    loading: state.average.loading,
    totals: state.average.metrics.totals,
    dailyData: state.average.metrics.daily,
  };
}
export default connect(
  mapStateToProps,
)(AverageTable);

// export reducer, actions and action types
export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
