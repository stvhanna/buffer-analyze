import moment from 'moment';
import { actionTypes as asyncDataFetchActions } from '@bufferapp/async-data-fetch';
import reducer, { actions, actionTypes } from './reducer';

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
      expect(state.startDate).toBe(sevenDaysAgo);
      expect(state.endDate).toBe(yesterday);
    });

    it('is closed', () => {
      expect(state.open).toBe(false);
    });

    it('has no minimum date set', () => {
      expect(state.minDate).toBe(null);
    });

    it('has no historic data', () => {
      expect(state.historicData).toMatchObject({});
    });

    it('has no curretTab set', () => {
      expect(state.currentTab).toBe('');
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

    it('should bring back the previous start and end dates if no custom date range has been selected', () => {
      const state = reducer(undefined, {
        type: actionTypes.OPEN_CALENDAR,
      });
      const closedDatePickerState = reducer(state, {
        type: actionTypes.CLOSE_DATE_PICKER,
      });

      expect(closedDatePickerState.calendarOpen).toBe(false);
      expect(closedDatePickerState.startDate).toBe(state.previousStartDate);
      expect(closedDatePickerState.endDate).toBe(state.previousEndDate);
    });

    it('should keep the selected start and end dates if no previous date range was selected', () => {
      const state = reducer(undefined, {
        type: actionTypes.OPEN_DATE_PICKER,
      });
      const closedDatePickerState = reducer(state, {
        type: actionTypes.CLOSE_DATE_PICKER,
      });

      expect(closedDatePickerState.startDate).toBe(state.startDate);
      expect(closedDatePickerState.endDate).toBe(state.endDate);
    });
  });

  describe('custom date range for a report', () => {
    it('starts loading after fetching report', () => {
      const state = reducer(undefined, {
        type: `get_report_${asyncDataFetchActions.FETCH_START}`,
      });
      expect(state.loading).toBeTruthy();
    });
    it('stops loading after fetching report', () => {
      const state = reducer(undefined, {
        type: `get_report_${asyncDataFetchActions.FETCH_SUCCESS}`,
      });
      expect(state.loading).toBeFalsy();
    });
  });

  describe('set minimum start date', () => {
    it(`stops loading state when receiving analytics_start_date_${asyncDataFetchActions.FETCH_SUCCESS}`, () => {
      const state = reducer(undefined, {
        type: `analytics_start_date_${asyncDataFetchActions.FETCH_SUCCESS}`,
      });
      expect(state.loading).toBe(false);
    });

    it(`starts loading state when receiving analytics_start_date_${asyncDataFetchActions.FETCH_START}`, () => {
      const state = reducer(undefined, {
        type: `analytics_start_date_${asyncDataFetchActions.FETCH_SUCCESS}`,
      });
      const newState = reducer(state, {
        type: `analytics_start_date_${asyncDataFetchActions.FETCH_START}`,
      });
      expect(newState.loading).toBe(true);
    });

    it('sets the minimum date available', () => {
      const date = moment().subtract(34, 'days').unix();
      const state = reducer(undefined, {
        type: `analytics_start_date_${asyncDataFetchActions.FETCH_SUCCESS}`,
        result: date,
      });
      expect(state.minDate).toBe(date);
    });

    it('stops loading if fetch fails', () => {
      const state = reducer(undefined, {
        type: `analytics_start_date_${asyncDataFetchActions.FETCH_FAIL}`,
      });
      expect(state.loading).toBe(false);
    });
  });
  describe('clear start and end dates', () => {
    it('CLEAR_START_DATE updates the start date', () => {
      const state = reducer(undefined, {
        type: actionTypes.CLEAR_START_DATE,
      });
      expect(state.startDate).toBe(null);
    });
    it('CLEAR_END_DATE updates the start date', () => {
      const state = reducer(undefined, {
        type: actionTypes.CLEAR_END_DATE,
      });
      expect(state.endDate).toBe(null);
    });
  });

  describe('set start and end dates', () => {
    it('SET_START_DATE updates the start date', () => {
      const startDate = moment().subtract(4, 'days').unix();
      const state = reducer(undefined, {
        type: actionTypes.SET_START_DATE,
        date: startDate,
      });
      expect(state.startDate).toBe(startDate);
    });
    it('SET_END_DATE updates the start date', () => {
      const endDate = moment.unix();
      const state = reducer(undefined, {
        type: actionTypes.SET_END_DATE,
        date: endDate,
      });
      expect(state.endDate).toBe(endDate);
    });
  });

  it('SET_MONTH updates the current month', () => {
    const month = moment().subtract(4, 'months').startOf('month').unix();
    const state = reducer(undefined, {
      type: actionTypes.SET_MONTH,
      date: month,
    });
    expect(state.month).toBe(month);
  });

  describe('SET_DATE_RANGE', () => {
    it('changes the date range', () => {
      const startDate = moment().subtract(4, 'days').format('MM/DD/YYYY');
      const endDate = moment().subtract(2, 'days').format('MM/DD/YYYY');
      const state = reducer(undefined, {
        type: actionTypes.SET_DATE_RANGE,
        startDate,
        endDate,
      });
      expect(state.startDate).toBe(startDate);
      expect(state.endDate).toBe(endDate);
    });

    it('if a new preset has been set, marks it as selected', () => {
      const state = reducer(undefined, {
        type: actionTypes.SET_DATE_RANGE,
        preset: {
          range: 30,
        },
      });
      const selectedPreset = state.presets.find(preset => preset.selected);
      expect(selectedPreset.range).toBe(30);
    });
  });

  describe('OPEN CALENDAR', () => {
    it('clears start and end dates', () => {
      const state = reducer(undefined, {
        type: actionTypes.OPEN_CALENDAR,
      });
      expect(state.startDate).toBe(null);
      expect(state.endDate).toBe(null);
    });

    it('stores temporally start and end dates', () => {
      const previousState = reducer(undefined, {});
      const state = reducer(undefined, {
        type: actionTypes.OPEN_CALENDAR,
      });
      expect(state.previousStartDate).toBe(previousState.startDate);
      expect(state.previousEndDate).toBe(previousState.endDate);
    });
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

  describe('set dates', () => {
    it(`setStartDate triggers ${actionTypes.SET_START_DATE}`, () => {
      const start = moment().subtract(30, 'days');
      expect(actions.setStartDate(start.unix())).toEqual({
        type: actionTypes.SET_START_DATE,
        date: start.format('MM/DD/YYYY'),
      });
    });
    it(`setEndDate triggers ${actionTypes.SET_END_DATE}`, () => {
      const end = moment().subtract(1, 'days');
      expect(actions.setEndDate(end.unix())).toEqual({
        type: actionTypes.SET_END_DATE,
        date: end.format('MM/DD/YYYY'),
      });
    });
  });

  describe('clear dates', () => {
    it(`clearStartDate triggers ${actionTypes.CLEAR_START_DATE}`, () => {
      expect(actions.clearStartDate()).toEqual({
        type: actionTypes.CLEAR_START_DATE,
      });
    });
    it(`clearEndDate triggers ${actionTypes.CLEAR_END_DATE}`, () => {
      expect(actions.clearEndDate()).toEqual({
        type: actionTypes.CLEAR_END_DATE,
      });
    });
  });

  it(`openCalendar triggers ${actionTypes.OPEN_CALENDAR}`, () => {
    expect(actions.openCalendar()).toEqual({
      type: actionTypes.OPEN_CALENDAR,
    });
  });

  it(`setDateRange triggers ${actionTypes.SET_DATE_RANGE}`, () => {
    const start = moment().subtract(30, 'days');
    const end = moment().subtract(1, 'days');
    expect(actions.setDateRange(start.unix(), end.unix())).toEqual({
      type: actionTypes.SET_DATE_RANGE,
      startDate: start.format('MM/DD/YYYY'),
      endDate: end.format('MM/DD/YYYY'),
    });
  });

  it(`setMonth triggers ${actionTypes.SET_MONTH}`, () => {
    const date = moment().startOf('month').unix();
    expect(actions.setMonth(date)).toEqual({
      type: actionTypes.SET_MONTH,
      date,
    });
  });
});

describe('persist dates on tabs', () => {
  const expectPresets = [
    {
      name: '7 Days',
      label: 'Past 7 Days',
      range: 7,
      selected: false,
      disabled: false,
    },
    {
      name: 'Yesterday',
      label: 'Yesterday',
      range: 1,
      selected: true,
      disabled: false,
    },
  ];

  const presets = [
    {
      name: '7 Days',
      label: 'Past 7 Days',
      range: 7,
      selected: true,
      disabled: false,
    },
    {
      name: 'Yesterday',
      label: 'Yesterday',
      range: 1,
      selected: false,
      disabled: false,
    },
  ];

  const historicData = {
    foo: {
      selectedPreset: expectPresets[1],
      startDate: '1/1/2018',
      endDate: '1/2/2018',
    },
  };

  it('should dispatch SET_CURRET_TAB', () => {
    expect(actions.setCurrentTab('overview')).toEqual({
      type: actionTypes.SET_CURRET_TAB,
      tabId: 'overview',
    });
  });

  it('should set the current tab on SET_CURRET_TAB', () => {
    const state = reducer(undefined, {
      type: actionTypes.SET_CURRET_TAB,
      tabId: 'foo',
    });
    expect(state.currentTab).toBe('foo');
  });

  it('should create a historicData store on SET_CURRET_TAB', () => {
    const state = reducer(undefined, {
      type: actionTypes.SET_CURRET_TAB,
      tabId: 'foo',
    });
    expect(state.historicData.foo).toBeDefined();
    expect(typeof state.historicData.foo.selectedPreset).toBe('object');
    expect(typeof state.historicData.foo.endDate).toBe('string');
    expect(typeof state.historicData.foo.startDate).toBe('string');
  });

  it('should not override an existing history store on SET_CURRET_TAB', () => {
    const state = reducer({ historicData }, {
      type: actionTypes.SET_CURRET_TAB,
      tabId: 'foo',
    });
    expect(state.historicData.foo).toBe(historicData.foo);
  });

  it(`setDateRangeAndPreset triggers ${actionTypes.SET_DATE_RANGE}`, () => {
    expect(actions.setDateRangeAndPreset({
      startDate: '1/1/2018',
      endDate: '1/2/2018',
      preset: presets[1],
    })).toEqual({
      type: actionTypes.SET_DATE_RANGE,
      startDate: '1/1/2018',
      endDate: '1/2/2018',
      preset: presets[1],
    });
  });

  it('should store historicData for the current tab on SET_START_DATE', () => {
    const startDate = moment().subtract(4, 'days').format('MM/DD/YYYY');
    const state = reducer({
      historicData,
      currentTab: 'foo',
    }, {
      type: actionTypes.SET_START_DATE,
      date: startDate,
    });
    expect(state.historicData.foo.startDate).toBe(startDate);
  });
  it('should store historicData for the current tab on CLEAR_START_DATE', () => {
    const state = reducer({
      historicData,
      currentTab: 'foo',
    }, {
      type: actionTypes.CLEAR_START_DATE,
    });
    expect(state.historicData.foo.startDate).toBe(null);
  });
  it('should store historicData for the current tab on SET_END_DATE', () => {
    const endDate = moment().subtract(4, 'days').format('MM/DD/YYYY');
    const state = reducer({
      historicData,
      currentTab: 'foo',
    }, {
      type: actionTypes.SET_END_DATE,
      date: endDate,
    });
    expect(state.historicData.foo.endDate).toBe(endDate);
  });
  it('should store historicData for the current tab on CLEAR_END_DATE', () => {
    const state = reducer({
      historicData,
      currentTab: 'foo',
    }, {
      type: actionTypes.CLEAR_END_DATE,
    });
    expect(state.historicData.foo.endDate).toBe(null);
  });
  it('should store historicData for the current tab on SET_DATE_RANGE', () => {
    const startDate = moment().subtract(4, 'days').format('MM/DD/YYYY');
    const endDate = moment().subtract(2, 'days').format('MM/DD/YYYY');
    let state = reducer({
      historicData,
      currentTab: 'foo',
      presets,
    }, {
      type: actionTypes.SET_DATE_RANGE,
      startDate,
      endDate,
    });
    expect(state.historicData.foo.startDate).toBe(startDate);
    expect(state.historicData.foo.endDate).toBe(endDate);

    state = reducer({
      historicData,
      currentTab: 'foo',
      presets,
    }, {
      preset: {
        range: 1,
      },
    });
    const selectedPreset = state.historicData.foo.selectedPreset;
    expect(selectedPreset.range).toBe(1);
  });
});
