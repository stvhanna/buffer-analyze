import { connect } from 'react-redux';
import AddReport from './components/AddReport';
import { actions } from './actions';

// default export = container
export default connect(
  state => ({
    translations: {
      ...state.i18n.translations.reports,
    },
    reports: state.reportList.reports,
  }),
  (dispatch, props) => ({
    createReport: name => dispatch(actions.createReport(name, props.chart, props.state)),
    addToReport: id => dispatch(actions.addToReport(id, props.chart, props.state)),
  }),
)(AddReport);

export { actions, actionTypes } from './actions';
export middleware from './middleware';
