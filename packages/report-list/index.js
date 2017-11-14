import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import ReportList from './components/ReportList';
import { actions } from './reducer';

// default export = container
export default connect(
  state => ({
    ...state.reportList,
  }),
  dispatch => ({
    selectReport: (id) => {
      dispatch(push(`/reports/${id}`));
    },
    removeReport: id => dispatch(actions.removeReport(id)),
  }),
)(ReportList);

export ReportList from './components/ReportList';

// export reducer, actions and action types
export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
