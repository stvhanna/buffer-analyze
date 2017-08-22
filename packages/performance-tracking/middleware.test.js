/* globals jest describe test beforeEach expect */
import { actionTypes as asyncActionTypes } from '@bufferapp/async-data-fetch';
import { middleware, actionTypes, actions } from './index';
import { storeMeasure } from './middleware';

describe('middleware', () => {
  const next = jest.fn();
  const mockReduxStore = {
    dispatch: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should call next when running', () => {
    middleware(mockReduxStore)(next)({});
    expect(next).toBeCalled();
  });

  test('store method should use Async Data Fetch', () => {
    storeMeasure(mockReduxStore.dispatch)({});
    expect(mockReduxStore.dispatch).toBeCalledWith({
      args: { data: {} }, name: 'performance', type: asyncActionTypes.FETCH,
    });
  });
});

describe('actions', () => {
  test('should dispatch PERFORMANCE_START_MEASURE', () => {
    expect(actions.startMeasure({
      name: 'test',
      data: {},
    })).toMatchObject({
      measureName: 'test',
      measureData: {},
      type: actionTypes.PERFORMANCE_START_MEASURE,
    });
  });

  test('should dispatch PERFORMANCE_MEASURE_FROM_EVENT', () => {
    expect(actions.measureFromSpecialEvent({
      name: 'test',
      data: {},
    })).toMatchObject({
      measureName: 'test',
      measureData: {},
      type: actionTypes.PERFORMANCE_MEASURE_FROM_EVENT,
    });
  });

  test('should dispatch PERFORMANCE_MEASURE_FROM_NAVIGATION_START', () => {
    expect(actions.measureFromNavigationStart({
      name: 'test',
      data: {},
    })).toMatchObject({
      measureName: 'test',
      measureData: {},
      type: actionTypes.PERFORMANCE_MEASURE_FROM_NAVIGATION_START,
    });
  });

  test('should dispatch PERFORMANCE_STOP_MEASURE', () => {
    expect(actions.stopMeasure({
      name: 'test',
    })).toMatchObject({
      measureName: 'test',
      type: actionTypes.PERFORMANCE_STOP_MEASURE,
    });
  });
});

