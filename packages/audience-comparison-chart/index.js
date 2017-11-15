import { connect } from 'react-redux';
import AudienceComparisonChart from './components/AudienceComparisonChart';

function mapStateToProps (state) {
  return {
    profilesMetricData: state.audienceComparison.profilesMetricData,
    profileTotals: state.audienceComparison.profileTotals,
    loading: state.audienceComparison.loading,
  };
}

// default export = container
export default connect(
  mapStateToProps,
)(AudienceComparisonChart);

// export reducer, actions and action types
export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
