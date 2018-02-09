import { connect } from 'react-redux';
import ComparisonChart from './components/ComparisonChart';

function getMetricData(state, metricKey, dataKey) {
  const metricData = state.comparison.metrics[metricKey];
  if (metricData) return metricData[dataKey];
  return [];
}

function mapStateToProps (state, ownProps) {
  return {
    profileTotals: getMetricData(state, ownProps.metricKey, 'profileTotals'),
    profilesMetricData: getMetricData(state, ownProps.metricKey, 'profilesMetricData'),
    profiles: state.profiles.profiles,
    loading: state.comparison.loading,
  };
}

// default export = container
export default connect(
  mapStateToProps,
)(ComparisonChart);

// export reducer, actions and action types
export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
