import { connect } from 'react-redux';
import PDFExportButton from './components/PDFExportButton';
import { actions } from './actions';

// default export = container
export default connect(
  () => ({
    // add state here
  }),
  dispatch => ({
    exportToPDF: () => dispatch(actions.exportToPDF()),
  }),
)(PDFExportButton);

// export reducer, actions and action types
export { actions, actionTypes } from './actions';
export middleware from './middleware';
