import moment from 'moment';

import { actionTypes as asyncDataFetchActionTypes } from '@bufferapp/async-data-fetch';

export const actionTypes = {
  OPEN_DATE_PICKER: 'OPEN_DATE_PICKER',
  CLOSE_DATE_PICKER: 'CLOSE_DATE_PICKER',
  SET_MIN_DATE: 'SET_MIN_DATE',
  SET_DATE_RANGE: 'SET_DATE_RANGE',
};

const initialState = {
  loading: true,
  startDate: moment().subtract('7', 'days').unix(),
  endDate: moment().subtract('1', 'days').unix(),
  open: false,
  minDate: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_DATE_RANGE:
      return {
        ...state,
        startDate: action.startDate,
        endDate: action.endDate,
      };
    case actionTypes.SET_MIN_DATE:
      return {
        ...state,
        loading: false,
        minDate: action.date,
      };
    case actionTypes.OPEN_DATE_PICKER:
      return {
        ...state,
        open: true,
      };
    case actionTypes.CLOSE_DATE_PICKER:
      return {
        ...state,
        open: false,
      };
    default:
      return state;
  }
};

export const actions = {
  open: () => ({
    type: actionTypes.OPEN_DATE_PICKER,
  }),
  close: () => ({
    type: actionTypes.CLOSE_DATE_PICKER,
  }),
  setMinDate: date => ({
    type: actionTypes.SET_MIN_DATE,
    date,
  }),
  setDateRange: (startDate, endDate) => ({
    type: actionTypes.SET_DATE_RANGE,
    startDate,
    endDate,
  }),
};
