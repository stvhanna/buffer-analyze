import { connect } from 'react-redux';
import Report from './components/Report';
import { actions } from './reducer';

// default export = container
export default connect(
  state => ({
    dateRange: {
      startDate: state.date.startDate,
      endDate: state.date.endDate,
    },
    ...state.report,
  }),
  dispatch => ({
    editName: () => dispatch(actions.editName()),
    saveChanges: name => dispatch(actions.saveChanges(name)),
  }),
)(Report);

// export reducer, actions and action types
export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
