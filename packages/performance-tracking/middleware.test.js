/* globals jest describe test beforeEach expect */
import { actionTypes as asyncActionTypes } from '@bufferapp/async-data-fetch';
import { actionTypes } from './reducer';
import middleware, { storeMeasure } from './middleware';

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
