import { actions, actionTypes } from './reducer';

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

