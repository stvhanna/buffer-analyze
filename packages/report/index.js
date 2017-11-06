import { connect } from 'react-redux';
import Report from './components/Report';

// default export = container
export default connect(
  state => ({
    dateRange: {
      startDate: state.date.startDate,
      endDate: state.date.endDate,
    },
    ...state.report,
  }),
)(Report);

// export reducer, actions and action types
export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
