import { actionTypes as dateActionTypes } from '@bufferapp/analyze-date-picker';
import { actions, actionTypes as asyncDataFetchActions } from '@bufferapp/async-data-fetch';
import { actionTypes as listActionTypes } from '@bufferapp/report-list';
import { actionTypes } from './reducer';
import middleware from './middleware';

describe('middleware', () => {
  const next = jest.fn();
  const state = {
    date: {
      startDate: '10/10/2016',
      endDate: '30/10/2016',
    },
    report: {
      _id: 'report_id_1',
    },
    reportList: {
      reports: [{
        _id: 'report_id_1',
        name: 'A report',
      }, {
        _id: 'report_id_2',
        name: 'Another report',
      }],
    },
    profiles: {
      profiles: [{
        id: 'profile1',
        username: 'profile_username_1',
      }, {
        id: 'profile2',
        username: 'profile_username_2',
      }],
    },
  };
  const store = {
    dispatch: jest.fn(),
    getState: jest.fn(() => state),
  };
  it('should exist', () => {
    expect(middleware).toBeDefined();
  });
  it('should keep propagating the action through the chain', () => {
    const action = {
      type: 'TEST',
    };
    middleware(store)(next)(action);
  });

  it('shoud dispatch a new data fetch for once date range is changed', () => {
    const action = {
      type: dateActionTypes.SET_DATE_RANGE,
      startDate: '10/10/2016',
      endDate: '20/10/2016',
    };
    middleware(store)(next)(action);
    expect(store.dispatch).toHaveBeenCalledWith(actions.fetch({
      name: 'get_report',
      args: {
        _id: state.report._id,
        startDate: '10/10/2016',
        endDate: '20/10/2016',
      },
    }));
    expect(next).toHaveBeenCalledWith(action);
  });

  it('VIEW_REPORT dispatches a new data fetch', () => {
    const action = {
      type: listActionTypes.VIEW_REPORT,
      id: 'report_id_2',
    };
    middleware(store)(next)(action);
    expect(store.dispatch).toHaveBeenCalledWith(actions.fetch({
      name: 'get_report',
      args: {
        _id: 'report_id_2',
        name: 'Another report',
        startDate: state.date.startDate,
        endDate: state.date.endDate,
      },
    }));
  });

  it('fills profile information for each retrieved chart', () => {
    const action = {
      type: `get_report_${asyncDataFetchActions.FETCH_SUCCESS}`,
      result: [{
        chart_id: 'summary-table',
        profile_id: 'profile1',
        metrics: [],
      }],
    };
    middleware(store)(next)(action);
    expect(next).toHaveBeenCalledWith({
      type: action.type,
      result: [{
        chart_id: 'summary-table',
        profile_id: 'profile1',
        profile: {
          id: 'profile1',
          username: 'profile_username_1',
        },
        metrics: [],
      }],
    });
  });

  it('SAVE_CHANGES dispatches a update report request', () => {
    const action = {
      type: actionTypes.SAVE_CHANGES,
      name: 'A new name!',
    };
    middleware(store)(next)(action);
    expect(store.dispatch).toHaveBeenCalledWith(actions.fetch({
      name: 'update_report',
      args: {
        ...state.report,
        name: action.name,
      },
    }));
  });
  afterEach(() => jest.clearAllMocks());
});
