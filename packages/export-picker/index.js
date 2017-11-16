import { connect } from 'react-redux';
import ExportPicker from './components/ExportPicker';
import { actions } from './reducer';

// default export = container
export default connect(
  (state, ownProps) => ({
    loading: ownProps.staticData ? false : state.date.loading,
    isOpen: state.exportAs.open,
  }),
  dispatch => ({
    open: () => dispatch(actions.open()),
    close: () => dispatch(actions.close()),
  }),
)(ExportPicker);

// export reducer, actions and action types
export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
