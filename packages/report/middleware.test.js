import { actionTypes as dateActionTypes } from '@bufferapp/analyze-date-picker';
import { actions as dataFetchActions, actionTypes as asyncDataFetchActionTypes } from '@bufferapp/async-data-fetch';
import { LOCATION_CHANGE } from 'react-router-redux';
import moment from 'moment-timezone';
import { actionTypes, actions } from './reducer';
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
      dateRange: {
        startDate: '10/10/2016',
        endDate: '30/10/2016',
      },
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
      expect(store.dispatch).toHaveBeenCalledWith(actions.saveChanges({
        ...state.report,
        dateRange: {
          startDate: action.startDate,
          endDate: action.endDate,
          range: null,
        },
      }));
      expect(next).toHaveBeenCalledWith(action);
    });

    it('shoud dispatch a new data fetch for the report once a new preset has been selected', () => {
      const action = {
        type: dateActionTypes.SET_DATE_RANGE,
        startDate: '10/10/2016',
        endDate: '30/10/2016',
        preset: {
          range: 30,
        },
      };
      middleware(store)(next)(action);
      expect(store.dispatch).toHaveBeenCalledWith(actions.saveChanges({
        ...state.report,
        dateRange: {
          startDate: action.startDate,
          endDate: action.endDate,
          range: 30,
        },
      }));
      expect(next).toHaveBeenCalledWith(action);
    });

    it('shoud dispatch a new data fetch for the report if there was a relative range selected and now there is not', () => {
      const action = {
        type: dateActionTypes.SET_DATE_RANGE,
        startDate: '10/10/2016',
        endDate: '30/10/2016',
      };
      state.report.dateRange.range = 7;
      middleware(store)(next)(action);
      expect(store.dispatch).toHaveBeenCalledWith(actions.saveChanges({
        ...state.report,
        dateRange: {
          startDate: action.startDate,
          endDate: action.endDate,
          range: null,
        },
      }));
      expect(next).toHaveBeenCalledWith(action);
    });
  });

  it('SAVE_CHANGES dispatches a update report request', () => {
    const action = {
      type: actionTypes.SAVE_CHANGES,
      name: 'A new name!',
    };
    middleware(store)(next)(action);
    expect(store.dispatch).toHaveBeenCalledWith(dataFetchActions.fetch({
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
    expect(store.dispatch).toHaveBeenCalledWith(dataFetchActions.fetch({
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
    expect(store.dispatch).toHaveBeenCalledWith(dataFetchActions.fetch({
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
    expect(store.dispatch).toHaveBeenCalledWith(dataFetchActions.fetch({
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
      configurable: true,
    });
    const action = {
      type: actionTypes.PARSE_PAGE_BREAKS,
    };
    middleware(store)(next)(action);
    expect(PDFFormatter.mock.calls[0]).toEqual(['report html']);
    expect(PDFFormatter.mock.instances[0].formatPage).toHaveBeenCalled();
  });

  it('PARSE_PAGE_BREAKS formats the report wrapper to avoid extra page breaks', () => {
    Object.defineProperty(document, 'getElementById', {
      value: () => 'report wrapper',
      configurable: true,
    });
    const action = {
      type: actionTypes.PARSE_PAGE_BREAKS,
    };
    middleware(store)(next)(action);
    expect(PDFFormatter.formatWrapper).toHaveBeenCalledWith('report wrapper');
  });

  describe('updating a report successfully', () => {
    it('should refetch the report after updating the date range', () => {
      const action = {
        type: `update_report_${asyncDataFetchActionTypes.FETCH_SUCCESS}`,
        args: {
          dateRange: {
            range: 30,
          },
        },
        result: {
          _id: 1,
        },
      };
      middleware(store)(next)(action);
      expect(store.dispatch).toHaveBeenCalledWith(dataFetchActions.fetch({
        name: 'get_report',
        args: {
          _id: action.result._id,
          timezone: moment.tz.guess(),
          startDate: state.date.startDate,
          endDate: state.date.endDate,
        },
      }));
    });
    it('should not trigger anything if the date range did not change', () => {
      const action = {
        type: `update_report_${asyncDataFetchActionTypes.FETCH_SUCCESS}`,
        args: {
          name: 'a new name for the report',
          dateRange: state.report.dateRange,
        },
        result: {
          _id: 1,
        },
      };
      middleware(store)(next)(action);
      expect(store.dispatch).not.toHaveBeenCalled();
    });
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
      expect(store.dispatch).toHaveBeenCalledWith(dataFetchActions.fetch({
        name: 'get_report',
        args: {
          _id: 'report-id',
          timezone: moment.tz.guess(),
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

  // it('UPLOAD_LOGO dispatches upload logo request', () => {
  //   const action = {
  //     type: actionTypes.UPLOAD_LOGO,
  //     logo: [new File(['blob'], 'new_file')],
  //   };
  //   middleware(store)(next)(action);
  //   expect(store.dispatch).toHaveBeenCalledWith(dataFetchActions.fetch({
  //     name: 'upload_report_logo',
  //     args: {
  //       reportId: state.report.id,
  //       logoImage: action.logo[0],
  //     },
  //   }));
  // });

  it('DELETE_LOGO dispatches delete logo request', () => {
    const action = {
      type: actionTypes.DELETE_LOGO,
    };
    middleware(store)(next)(action);
    expect(store.dispatch).toHaveBeenCalledWith(dataFetchActions.fetch({
      name: 'delete_report_logo',
      args: {
        reportId: state.report.id,
      },
    }));
  });

  afterEach(() => jest.clearAllMocks());
});
