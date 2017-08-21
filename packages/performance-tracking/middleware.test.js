/* globals jest describe test beforeEach expect */
import { middleware, actionTypes, actions } from './index';

const mockReduxStore = {
  dispatch: jest.fn(),
};

beforeEach(() => {
});

describe('middleware', () => {
  let storeMethod;
  const middlewareOptions = {};
  let next;

  beforeEach(() => {
    storeMethod = jest.fn();
    middlewareOptions.store = storeMethod;
    next = jest.fn();
  });

  test('should call next when running', () => {
    middleware(mockReduxStore)(next)({});
    expect(next).toBeCalled();
  });

  test('should use asyncDataFetch to store the measures');
});

describe('actions', () => {
  test('should dispacth PERFORMANCE_START_MEASURE', () => {
    expect(actions.startMeasure({
      name: 'test',
      data: {},
    })).toMatchObject({
      measureName: 'test',
      measureData: {},
      type: actionTypes.PERFORMANCE_START_MEASURE,
    });
  });

  test('should dispacth PERFORMANCE_MEASURE_FROM_EVENT', () => {
    expect(actions.measureFromSpecialEvent({
      name: 'test',
      data: {},
    })).toMatchObject({
      measureName: 'test',
      measureData: {},
      type: actionTypes.PERFORMANCE_MEASURE_FROM_EVENT,
    });
  });

  test('should dispacth PERFORMANCE_MEASURE_FROM_NAVIGATION_START', () => {
    expect(actions.measureFromNavigationStart({
      name: 'test',
      data: {},
    })).toMatchObject({
      measureName: 'test',
      measureData: {},
      type: actionTypes.PERFORMANCE_MEASURE_FROM_NAVIGATION_START,
    });
  });

  test('should dispacth PERFORMANCE_STOP_MEASURE', () => {
    expect(actions.stopMeasure({
      name: 'test',
    })).toMatchObject({
      measureName: 'test',
      type: actionTypes.PERFORMANCE_STOP_MEASURE,
    });
  });
});

