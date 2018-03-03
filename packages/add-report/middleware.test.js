import { actions } from '@bufferapp/async-data-fetch';
import middleware from './middleware';
import { actionTypes } from './actions';

describe('middleware', () => {
  const next = jest.fn();
  let state = null;

  const store = {
    dispatch: jest.fn(),
    getState: jest.fn(() => state),
  };

  beforeEach(() => {
    state = {
      appSidebar: {
        user: {
          id: 'user1234',
        },
      },
      profiles: {
        selectedProfileId: '12359182129asd',
      },
      date: {
        presets: [{
          range: 7,
          selected: true,
        }],
        startDate: null,
        endDate: null,
      },
    };

    store.dispatch = jest.fn();
  });

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
        dateRange: {
          range: 7,
          start: null,
          end: null,
        },
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

  it('should not store the profileId when creating a report with comparison chart', () => {
    const action = {
      type: actionTypes.CREATE_REPORT,
      chart_id: 'comparison',
      name: 'Weekly Sync Report',
    };
    middleware(store)(next)(action);
    expect(store.dispatch).toHaveBeenCalledWith(actions.fetch({
      name: 'create_report',
      args: {
        userId: 'user1234',
        profileId: null,
        chartId: 'comparison',
        name: 'Weekly Sync Report',
        dateRange: {
          range: 7,
          start: null,
          end: null,
        },
      },
    }));
    expect(next).toHaveBeenCalledWith(action);
  });

  it('should not store the profileId when adding a comparison chart', () => {
    const action = {
      type: actionTypes.ADD_TO_REPORT,
      chart_id: 'comparison',
      reportId: 'report-123',
      state: {},
    };
    middleware(store)(next)(action);
    expect(store.dispatch).toHaveBeenCalledWith(actions.fetch({
      name: 'add_chart_to_report',
      args: {
        reportId: 'report-123',
        profileId: null,
        chartId: 'comparison',
        state: {},
      },
    }));
    expect(next).toHaveBeenCalledWith(action);
  });
});
