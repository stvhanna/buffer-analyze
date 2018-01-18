import { connect } from 'react-redux';
import CommentsComparisonChart from './components/CommentsComparisonChart';

function mapStateToProps (state) {
  return {
    profilesMetricData: state.commentsComparison.profilesMetricData,
    profileTotals: state.commentsComparison.profileTotals,
    profiles: state.profiles.profiles,
    loading: state.commentsComparison.loading,
  };
}

// default export = container
export default connect(
  mapStateToProps,
)(CommentsComparisonChart);

// export reducer, actions and action types
export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
