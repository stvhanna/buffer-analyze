/* globals jest describe test beforeEach expect */
import { actionTypes as asyncActionTypes } from '@bufferapp/async-data-fetch';
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
});
