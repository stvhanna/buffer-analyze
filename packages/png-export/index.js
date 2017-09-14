import { connect } from 'react-redux';
import ExportButton from './components/ExportButton';
import { actions } from './reducer';

// default export = container
export default connect(
  state => ({
    exporting: state.exportToPNG.exporting,
  }),
  (dispatch, props) => ({
    exportToPNG: () => dispatch(actions.exportToPNG(props.filename)),
  }),
)(ExportButton);

// export reducer, actions and action types
export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
