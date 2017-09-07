export const actionTypes = {
  PERFORMANCE_START_MEASURE: 'PERFORMANCE_START_MEASURE',
  PERFORMANCE_STOP_MEASURE: 'PERFORMANCE_STOP_MEASURE',
  PERFORMANCE_MEASURE_FROM_EVENT: 'MEASURE_FROM_EVENT',
  PERFORMANCE_MEASURE_FROM_NAVIGATION_START: 'MEASURE_FROM_NAVIGATION_START',
};

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const actions = {
  startMeasure: ({ name, data }) => ({
    type: actionTypes.PERFORMANCE_START_MEASURE,
    measureName: name,
    measureData: data,
  }),
  measureFromSpecialEvent: ({ name, data }) => ({
    type: actionTypes.PERFORMANCE_MEASURE_FROM_EVENT,
    measureName: name,
    measureData: data,
  }),
  measureFromNavigationStart: ({ name, data }) => ({
    type: actionTypes.PERFORMANCE_MEASURE_FROM_NAVIGATION_START,
    measureName: name,
    measureData: data,
  }),
  stopMeasure: ({ name }) => ({
    type: actionTypes.PERFORMANCE_STOP_MEASURE,
    measureName: name,
  }),
};

