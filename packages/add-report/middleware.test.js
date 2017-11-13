import { actions } from '@bufferapp/async-data-fetch';
import middleware from './middleware';
import { actionTypes } from './actions';

describe('middleware', () => {
  const next = jest.fn();
  const state = {
    appSidebar: {
      user: {
        id: 'user1234',
      },
    },
    profiles: {
      selectedProfileId: '12359182129asd',
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

  it('should create a report when CREATE_REPORT is triggered', () => {
    const action = {
      type: actionTypes.CREATE_REPORT,
      chart_id: 'summary-table',
      name: 'Weekly Sync Report',
    };
    middleware(store)(next)(action);
    expect(store.dispatch).toHaveBeenCalledWith(actions.fetch({
      name: 'create_report',
      args: {
        userId: 'user1234',
        profileId: '12359182129asd',
        chartId: 'summary-table',
        name: 'Weekly Sync Report',
      },
    }));
    expect(next).toHaveBeenCalledWith(action);
  });

  it('should add a chart to a report when ADD_TO_REPORT is triggered', () => {
    const action = {
      type: actionTypes.ADD_TO_REPORT,
      chart_id: 'summary-table',
      reportId: 'report-123',
      state: {},
    };
    middleware(store)(next)(action);
    expect(store.dispatch).toHaveBeenCalledWith(actions.fetch({
      name: 'add_chart_to_report',
      args: {
        reportId: 'report-123',
        profileId: '12359182129asd',
        chartId: 'summary-table',
        state: {},
      },
    }));
    expect(next).toHaveBeenCalledWith(action);
  });
});
