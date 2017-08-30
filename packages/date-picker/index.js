import { connect } from 'react-redux';
import moment from 'moment';
import DatePicker from './components/DatePicker';
import { actions } from './reducer';

// default export = container
export default connect(
  state => ({
    loading: state.date.loading,
    startDate: state.date.startDate,
    endDate: state.date.endDate,
    isOpen: state.date.open,
    calendarOpen: state.date.calendarOpen,
    minDate: state.date.minDate,
    maxDate: state.date.maxDate,
    month: state.date.month,
    // add state here
  }),
  dispatch => ({
    open: () => dispatch(actions.open()),
    close: () => dispatch(actions.close()),
    setMonth: timestamp => dispatch(actions.setMonth(timestamp)),
    setStartDate: date => dispatch(actions.setStartDate(date)),
    clearStartDate: () => dispatch(actions.clearStartDate()),
    clearEndDate: () => dispatch(actions.clearEndDate()),
    setEndDate: date => dispatch(actions.setEndDate(date)),
    setDateRange: (start, end) => dispatch(actions.setDateRange(start, end)),
    selectPreset: (range) => {
      if (range !== Infinity) {
        dispatch(actions.setDateRange(
          moment().subtract(range, 'days').unix(),
          moment().subtract(1, 'days').unix(),
        ));
        dispatch(actions.close());
      } else {
        dispatch(actions.openCalendar());
      }
    },
  }),
)(DatePicker);

// export reducer, actions and action types
export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
