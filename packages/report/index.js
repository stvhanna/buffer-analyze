import { connect } from 'react-redux';
import Report from './components/Report';
import { actions } from './reducer';

// default export = container
export default connect(
  state => ({
    ...state.report,
  }),
  dispatch => ({
    editName: () => dispatch(actions.editName()),
    saveChanges: name => dispatch(actions.saveChanges({ name })),
    moveUp: id => dispatch(actions.moveUp(id)),
    moveDown: id => dispatch(actions.moveDown(id)),
    deleteChart: id => dispatch(actions.deleteChart(id)),
    uploadLogo: logo => dispatch(actions.uploadLogo({ logo })),
    deleteLogo: () => dispatch(actions.deleteLogo()),
  }),
)(Report);

// export reducer, actions and action types
export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
