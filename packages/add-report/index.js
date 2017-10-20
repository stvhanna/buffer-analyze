import { connect } from 'react-redux';
import AddReport from './components/AddReport';
import { actions } from './actions';

// default export = container
export default connect(
  state => ({
    translations: {
      ...state.i18n.translations.reports,
    },
  }),
  (dispatch, props) => ({
    createReport: name => dispatch(actions.createReport(name, props.chart)),
  }),
)(AddReport);

export { actions, actionTypes } from './actions';
export middleware from './middleware';
