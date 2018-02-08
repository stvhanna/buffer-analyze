import { connect } from 'react-redux';
import ComparisonChart from './components/ComparisonChart';

function mapStateToProps (state, ownProps) {
  return {
    profilesMetricData: state[`${ownProps.metricKey}Comparison`].profilesMetricData,
    profileTotals: state[`${ownProps.metricKey}Comparison`].profileTotals,
    profiles: state.profiles.profiles,
    loading: state[`${ownProps.metricKey}Comparison`].loading,
  };
}

// default export = container
export default connect(
  mapStateToProps,
)(ComparisonChart);
