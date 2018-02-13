import { actionTypes as dateActionTypes } from '@bufferapp/analyze-date-picker';
import { actions } from '@bufferapp/async-data-fetch';
import { LOCATION_CHANGE } from 'react-router-redux';
import { actionTypes } from './reducer';
import middleware, { DIRECTION_UP, DIRECTION_DOWN } from './middleware';


jest.mock('./PDFFormatter.js');
import PDFFormatter from './PDFFormatter'; // eslint-disable-line import/first

describe('middleware', () => {
  const next = jest.fn();
  const state = {
    date: {
      startDate: '10/10/2016',
      endDate: '30/10/2016',
    },
    report: {
      id: 'report_id_1',
    },
    reportList: {
      reports: [{
        _id: 'report_id_1',
        name: 'A report',
        charts: [
          {
            profile_id: 'profile1',
          },
        ],
      }, {
        _id: 'report_id_2',
        name: 'Another report',
        charts: [
          {
            profile_id: 'profile1',
          },
        ],
      }],
    },
    router: {
      location: {
        pathname: '/reports/report_id_1',
      },
    },
    profiles: {
      profiles: [{
        id: 'profile1',
        username: 'profile_username_1',
        service: 'foo',
      }, {
        id: 'profile2',
        username: 'profile_username_2',
        service: 'foo',
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

  describe('SET_DATE_RANGE', () => {
    it('shoud dispatch a new data fetch for the report once date range is changed', () => {
      const action = {
        type: dateActionTypes.SET_DATE_RANGE,
        startDate: '10/10/2016',
        endDate: '20/10/2016',
      };
      middleware(store)(next)(action);
      expect(store.dispatch).toHaveBeenCalledWith(actions.fetch({
        name: 'get_report',
        args: {
          _id: 'report_id_1',
          startDate: '10/10/2016',
          endDate: '20/10/2016',
        },
      }));
      expect(next).toHaveBeenCalledWith(action);
    });

    it('should not dispatch the data fetch if the view is an export view', () => {
      state.router = {
        location: {
          pathname: '/export/reports/1234',
        },
      };
      const action = {
        type: dateActionTypes.SET_DATE_RANGE,
        startDate: '10/10/2016',
        endDate: '20/10/2016',
      };
      middleware(store)(next)(action);
      expect(store.dispatch).not.toHaveBeenCalled();
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

  it('MOVE_CHART_UP dispatches a move_chart request with DIRECTION_UP', () => {
    const action = {
      type: actionTypes.MOVE_CHART_UP,
      chartId: 'chart-123',
    };
    middleware(store)(next)(action);
    expect(store.dispatch).toHaveBeenCalledWith(actions.fetch({
      name: 'move_chart',
      args: {
        reportId: state.report.id,
        direction: DIRECTION_UP,
        chartId: action.chartId,
      },
    }));
  });

  it('MOVE_CHART_DOWN dispatches a move_chart request with DIRECTION_DOWN', () => {
    const action = {
      type: actionTypes.MOVE_CHART_DOWN,
      chartId: 'chart-123',
    };
    middleware(store)(next)(action);
    expect(store.dispatch).toHaveBeenCalledWith(actions.fetch({
      name: 'move_chart',
      args: {
        reportId: state.report.id,
        direction: DIRECTION_DOWN,
        chartId: action.chartId,
      },
    }));
  });

  it('DELETE_CHART dispatches a delete_chart request', () => {
    const action = {
      type: actionTypes.DELETE_CHART,
      chartId: 'chart-123',
    };
    middleware(store)(next)(action);
    expect(store.dispatch).toHaveBeenCalledWith(actions.fetch({
      name: 'delete_chart',
      args: {
        reportId: state.report.id,
        chartId: action.chartId,
      },
    }));
  });

  it('PARSE_PAGE_BREAKS sends report page over to PDFFormatter', () => {
    Object.defineProperty(document, 'getElementById', {
      value: () => 'report html',
    });
    const action = {
      type: actionTypes.PARSE_PAGE_BREAKS,
    };
    middleware(store)(next)(action);
    expect(PDFFormatter.mock.calls[0]).toEqual(['report html']);
    expect(PDFFormatter.mock.instances[0].formatPage).toHaveBeenCalled();
  });

  describe('LOCATION_CHANGE', () => {
    it('LOCATION_CHANGE to a report detail route triggers a get_report', () => {
      const action = {
        type: LOCATION_CHANGE,
        payload: {
          pathname: '/reports/report-id',
        },
      };
      middleware(store)(next)(action);
      expect(store.dispatch).toHaveBeenCalledWith(actions.fetch({
        name: 'get_report',
        args: {
          _id: 'report-id',
          startDate: state.date.startDate,
          endDate: state.date.endDate,
        },
      }));
    });

    it('LOCATION_CHANGE to another route does not trigger get_report', () => {
      const action = {
        type: LOCATION_CHANGE,
        payload: {
          pathname: '/insights/facebook',
        },
      };
      middleware(store)(next)(action);
      expect(store.dispatch).not.toHaveBeenCalled();
    });
  });

  afterEach(() => jest.clearAllMocks());
});
