/* globals jest describe test beforeEach expect */
import { actionTypes as asyncActionTypes } from '@bufferapp/async-data-fetch';
import { actionTypes } from './reducer';
import middleware, { storeMeasure } from './middleware';

const mockChronos = {
  startMeasure: jest.fn(),
  stopMeasure: jest.fn(),
  measureFromSpecialEvent: jest.fn(),
  measureFromNavigationStart: jest.fn(),
};

jest.mock('@bufferapp/chronos', () => (
  { chronos: () => mockChronos }
));

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

  test('should start a measure', () => {
    middleware(mockReduxStore)(next)({
      type: actionTypes.PERFORMANCE_START_MEASURE,
      measureName: 'test',
      measureData: {},
    });
    expect(mockChronos.startMeasure)
      .toHaveBeenCalledTimes(1);
    expect(mockChronos.startMeasure)
      .toBeCalledWith('test', {});
  });

  test('should measure from special event', () => {
    middleware(mockReduxStore)(next)({
      type: actionTypes.PERFORMANCE_MEASURE_FROM_EVENT,
      measureName: 'test',
      measureData: {},
    });
    expect(mockChronos.measureFromSpecialEvent)
      .toHaveBeenCalledTimes(1);
    expect(mockChronos.measureFromSpecialEvent)
      .toBeCalledWith('test', {});
  });

  test('should measure from navigation start', () => {
    middleware(mockReduxStore)(next)({
      type: actionTypes.PERFORMANCE_MEASURE_FROM_NAVIGATION_START,
      measureName: 'test',
      measureData: {},
    });
    expect(mockChronos.measureFromNavigationStart)
      .toHaveBeenCalledTimes(1);
    expect(mockChronos.measureFromNavigationStart)
      .toBeCalledWith('test', {});
  });

  test('should stop a measure', () => {
    middleware(mockReduxStore)(next)({
      type: actionTypes.PERFORMANCE_STOP_MEASURE,
      measureName: 'test',
    });
    expect(mockChronos.stopMeasure)
      .toHaveBeenCalledTimes(1);
    expect(mockChronos.stopMeasure)
      .toBeCalledWith('test');
  });

  test('should start a measure on FETCH_START', () => {
    middleware(mockReduxStore)(next)({
      type: `test_${asyncActionTypes.FETCH_START}`,
    });
    expect(mockReduxStore.dispatch)
      .toHaveBeenCalledTimes(1);
    expect(mockReduxStore.dispatch)
      .toHaveBeenCalledWith({
        type: actionTypes.PERFORMANCE_START_MEASURE,
        measureName: 'testFetch',
      });
  });

  test('should stop a measure on FETCH_SUCCESS', () => {
    middleware(mockReduxStore)(next)({
      type: `test_${asyncActionTypes.FETCH_SUCCESS}`,
    });
    expect(mockReduxStore.dispatch)
      .toHaveBeenCalledTimes(1);
    expect(mockReduxStore.dispatch)
      .toHaveBeenCalledWith({
        type: actionTypes.PERFORMANCE_STOP_MEASURE,
        measureName: 'testFetch',
      });
  });

  test('should stop a measure on FETCH_FAIL', () => {
    middleware(mockReduxStore)(next)({
      type: `test_${asyncActionTypes.FETCH_FAIL}`,
    });
    expect(mockReduxStore.dispatch)
      .toHaveBeenCalledTimes(1);
    expect(mockReduxStore.dispatch)
      .toHaveBeenCalledWith({
        type: actionTypes.PERFORMANCE_STOP_MEASURE,
        measureName: 'testFetch',
      });
  });
});
