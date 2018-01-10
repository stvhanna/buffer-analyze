import { actionTypes as asyncDataFetchActionTypes } from '@bufferapp/async-data-fetch';
import keyWrapper from '@bufferapp/keywrapper';
import { DIRECTION_UP, DIRECTION_DOWN } from './middleware';


export const actionTypes = keyWrapper('REPORT', {
  EDIT_NAME: 'EDIT_NAME',
  SAVE_CHANGES: 'SAVE_CHANGES',
  MOVE_CHART_UP: 'MOVE_CHART_UP',
  MOVE_CHART_DOWN: 'MOVE_CHART_DOWN',
  DELETE_CHART: 'DELETE_CHART',
  PARSE_PAGE_BREAKS: 'PARSE_PAGE_BREAKS',
});

const initialState = {
  loading: true,
  charts: [],
  name: '',
  edit: false,
};

const getOppositeDirection = direction =>
  (direction === DIRECTION_UP ? DIRECTION_DOWN : DIRECTION_UP);

const getNewPosition = (position, direction) => position + (direction === DIRECTION_UP ? -1 : 1);

const moveChartInPosition = (position, direction, charts) => {
  const newPosition = getNewPosition(position, direction);
  const chartToSwitchPlacesWith = charts[newPosition];
  const chartToMove = charts[position];
  const reorderedCharts = [...charts];
  reorderedCharts[position] = chartToSwitchPlacesWith;
  reorderedCharts[newPosition] = chartToMove;
  return reorderedCharts;
};

const moveChart = (chartId, direction, charts) => {
  let position = 0;
  charts.find((chart, index) => {
    position = index;
    return chart._id === chartId;
  });
  return moveChartInPosition(position, direction, charts);
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `get_report_${asyncDataFetchActionTypes.FETCH_START}`:
      return {
        ...initialState,
        name: action.args.name,
        id: action.args._id,
      };
    case `get_report_${asyncDataFetchActionTypes.FETCH_SUCCESS}`:
      return {
        ...state,
        charts: action.result,
        loading: false,
      };
    case `move_chart_${asyncDataFetchActionTypes.FETCH_FAIL}`:
      return {
        ...state,
        charts: moveChart(
          action.args.chartId,
          getOppositeDirection(action.args.direction),
          state.charts,
        ),
      };
    case `move_chart_${asyncDataFetchActionTypes.FETCH_START}`:
      return {
        ...state,
        charts: moveChart(action.args.chartId, action.args.direction, state.charts),
      };
    case `delete_chart_${asyncDataFetchActionTypes.FETCH_SUCCESS}`:
      return {
        ...state,
        charts: state.charts.filter(chart => chart._id !== action.args.chartId),
      };
    case actionTypes.SAVE_CHANGES:
      return {
        ...state,
        edit: false,
        name: action.name,
      };
    case actionTypes.EDIT_NAME:
      return {
        ...state,
        edit: true,
      };
    default:
      return state;
  }
};

export const actions = {
  editName: () => ({
    type: actionTypes.EDIT_NAME,
  }),
  saveChanges: name => ({
    type: actionTypes.SAVE_CHANGES,
    name,
  }),
  moveUp: chartId => ({
    type: actionTypes.MOVE_CHART_UP,
    chartId,
  }),
  moveDown: chartId => ({
    type: actionTypes.MOVE_CHART_DOWN,
    chartId,
  }),
  deleteChart: chartId => ({
    type: actionTypes.DELETE_CHART,
    chartId,
  }),
  parsePageBreaks: () => ({
    type: actionTypes.PARSE_PAGE_BREAKS,
  }),
};
