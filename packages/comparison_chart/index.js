import { connect } from 'react-redux';
import ComparisonChart from './components/ChartWrapper';

function mapStateToProps (state, ownProps) {
  return {
    metrics: state.comparison.metrics,
    metricKey: ownProps.metricKey,
    profiles: state.profiles.profiles,
    profileIds: state.multiProfileSelector.selectedProfiles.map(p => p.id),
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

export Chart from './components/ChartAndFooter';
export Title from './components/Title';
