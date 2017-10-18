import { connect } from 'react-redux';
import ExportButton from './components/ExportButton';
import { actions } from './reducer';

// default export = container
export default connect(
  state => ({
    exporting: state.exportToCSV.exporting,
  }),
  (dispatch, props) => ({
    exportToCSV: () => dispatch(actions.exportToCSV(props.filename)),
  }),
)(ExportButton);

// export reducer, actions and action types
export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
