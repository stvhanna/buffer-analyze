import { LOCATION_CHANGE } from 'react-router-redux';
import { actions, actionTypes } from '@bufferapp/async-data-fetch';
import { actionTypes as profileActionTypes } from '@bufferapp/analyze-profile-selector';
import { actions as dateActions, updatePresets } from './reducer';

const getStartDate = (query) => {
  let startDate = query.match(/start_date=(.*)&/);
  if (startDate) {
    startDate = parseInt(startDate[1], 10);
  }
  return startDate;
};
const getEndDate = (query) => {
  let endDate = query.match(/end_date=(.*)$/);
  if (endDate) {
    endDate = parseInt(endDate[1], 10);
  }
  return endDate;
};

function getTabId(pathname) {
  const matchPath = pathname.match(/^\/(\w+)/);
  return matchPath ?
    matchPath[1] :
    null;
}


function getHistoricDateRange(state, tabId) {
  const historicTabData = state.date.historicData[tabId];
  if (historicTabData) {
    return {
      startDate: historicTabData.startDate,
      endDate: historicTabData.endDate,
      preset: updatePresets(state.date.presets, historicTabData.selectedPreset)
        .presets.find(preset => preset.selected),
    };
  }

  return null;
}

function handleTabChange(pathname, state, dispatch) {
  const tabId = getTabId(pathname);
  const currentTabId = state.router.location ?
    getTabId(state.router.location.pathname) :
    null;
  const isNewTab = tabId && tabId !== currentTabId;
  if (isNewTab) {
    dispatch(dateActions.setCurrentTab(tabId));
    const historicDateRange = getHistoricDateRange(state, tabId);
    if (historicDateRange) {
      dispatch(dateActions.setDateRangeAndPreset(historicDateRange));
    }
  }
}

export default ({ dispatch, getState }) => next => (action) => {
  let startDate;
  let endDate;
  const state = getState();
  const result = action.result;
  switch (action.type) {
    case `get_report_${actionTypes.FETCH_SUCCESS}`:
      if (result.date_range.range) {
        dispatch(dateActions.setDatePreset(result.date_range));
      } else {
        dispatch(dateActions.setDateRange(result.date_range.startDate, result.date_range.endDate));
      }
      break;
    case `user_${actionTypes.FETCH_SUCCESS}`:
      startDate = getStartDate(state.router.location.search);
      endDate = getEndDate(state.router.location.search);
      if (startDate && endDate) {
        dispatch(dateActions.setDateRange(startDate, endDate));
      }
      break;
    case profileActionTypes.SELECT_PROFILE:
      dispatch(actions.fetch({
        name: 'analytics_start_date',
        args: {
          profileId: action.profile.id,
        },
      }));
      break;
    case LOCATION_CHANGE:
      handleTabChange(action.payload.pathname, state, dispatch);
      break;
    default:
      break;
  }
  return next(action);
};
