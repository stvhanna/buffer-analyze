import moment from 'moment';
import { actionTypes as asyncDataFetchActions } from '@bufferapp/async-data-fetch';
import reducer, { actions, actionTypes } from './reducer';

describe('reducer', () => {
  describe('initial state', () => {
    let state;

    beforeEach(() => {
      state = reducer(undefined, {
        type: 'TEST_ACTION',
      });
    });

    it('is loading', () => {
      expect(state.loading).toBeTruthy();
    });

    it('has the past seven days date range selected', () => {
      const yesterday = moment().subtract(1, 'day').format('MM/DD/YYYY');
      const sevenDaysAgo = moment().subtract(7, 'day').format('MM/DD/YYYY');
      expect(moment.unix(state.startDate).format('MM/DD/YYYY')).toBe(sevenDaysAgo);
      expect(moment.unix(state.endDate).format('MM/DD/YYYY')).toBe(yesterday);
    });

    it('is closed', () => {
      expect(state.open).toBe(false);
    });

    it('has no minimum date set', () => {
      expect(state.minDate).toBe(null);
    });
  });

  describe('opening and closing the date picker', () => {
    it(`should open when receiving ${actionTypes.OPEN_DATE_PICKER}`, () => {
      const state = reducer(undefined, {
        type: actionTypes.OPEN_DATE_PICKER,
      });
      expect(state.open).toBeTruthy();
    });

    it(`should close when receiving ${actionTypes.CLOSE_DATE_PICKER}`, () => {
      const state = reducer(undefined, {
        type: actionTypes.CLOSE_DATE_PICKER,
      });
      expect(state.open).toBe(false);
    });
  });

  describe('set start date', () => {
    it(`stops loading state when receiving analytics_date_range_${asyncDataFetchActions.FETCH_SUCCESS}`, () => {
      const state = reducer(undefined, {
        type: `analytics_date_range_${asyncDataFetchActions.FETCH_SUCCESS}`,
      });
      expect(state.loading).toBe(false);
    });

    it(`starts loading state when receiving analytics_date_range_${asyncDataFetchActions.FETCH_START}`, () => {
      const state = reducer(undefined, {
        type: `analytics_date_range_${asyncDataFetchActions.FETCH_SUCCESS}`,
      });
      const newState = reducer(state, {
        type: `analytics_date_range_${asyncDataFetchActions.FETCH_START}`,
      });
      expect(newState.loading).toBe(true);
    });

    it('sets the minimum date available', () => {
      const date = moment().subtract(34, 'days').unix();
      const state = reducer(undefined, {
        type: `analytics_date_range_${asyncDataFetchActions.FETCH_SUCCESS}`,
        date,
      });
      expect(state.minDate).toBe(date);
    });
  });

  it(`changes the date range when receiving ${actionTypes.SET_DATE_RANGE}`, () => {
    const startDate = moment().subtract(4, 'days').unix();
    const endDate = moment().subtract(2, 'days').unix();
    const state = reducer(undefined, {
      type: actionTypes.SET_DATE_RANGE,
      startDate,
      endDate,
    });
    expect(state.startDate).toBe(startDate);
    expect(state.endDate).toBe(endDate);
  });
});

describe('actions', () => {
  describe('opening and closing', () => {
    it(`open triggers ${actionTypes.OPEN_DATE_PICKER}`, () => {
      expect(actions.open()).toEqual({
        type: actionTypes.OPEN_DATE_PICKER,
      });
    });
    it(`close triggers ${actionTypes.CLOSE_DATE_PICKER}`, () => {
      expect(actions.close()).toEqual({
        type: actionTypes.CLOSE_DATE_PICKER,
      });
    });
  });

  it(`setDateRange triggers ${actionTypes.SET_DATE_RANGE}`, () => {
    const start = moment().subtract(30, 'days').unix();
    const end = moment().subtract(1, 'days').unix();
    expect(actions.setDateRange(start, end)).toEqual({
      type: actionTypes.SET_DATE_RANGE,
      startDate: start,
      endDate: end,
    });
  });
});
