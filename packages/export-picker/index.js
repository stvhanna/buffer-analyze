import { connect } from 'react-redux';
import { actions } from './reducer';
import ExportPicker from './components/ExportPicker';

// default export = container
export default connect(
  (state, ownProps) => ({
    exporting: state.exportToCSV.exporting || state.exportToPNG.exporting,
    isOpen: state.exportPicker.open,
    filename: ownProps.filename,
  }),
  dispatch => ({
    open: () => dispatch(actions.open()),
    close: () => dispatch(actions.close()),
  }),
)(ExportPicker);

// export reducer, actions and action types
export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
