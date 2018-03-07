import { actions, actionTypes as asyncDataFetchActionTypes } from '@bufferapp/async-data-fetch';
import { LOCATION_CHANGE } from 'react-router-redux';
import { actionTypes } from '@bufferapp/analyze-profile-selector';
import { actions as dateActions, actionTypes as dateActionTypes } from './reducer';
import middleware from './middleware';

describe('middleware', () => {
  let state = {};
  const next = jest.fn();
  const store = {
    dispatch: jest.fn(),
    getState: jest.fn(() => state),
  };

  const presets = [
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

  beforeEach(() => {
    state = {
      date: {
        historicData: {},
        presets,
      },
    };
  });

  it('should exist', () => {
    expect(middleware).toBeDefined();
  });

  it('should keep propagating the action through the chain', () => {
    const action = {
      type: 'TEST',
    };
    middleware(store)(next)(action);
  });

  it('should dispatch a data fetch for the minimum date with analytics available once a profile has been selected', () => {
    const action = {
      type: actionTypes.SELECT_PROFILE,
      profile: {
        id: '1235519asd',
      },
    };
    middleware(store)(next)(action);
    expect(store.dispatch).toHaveBeenCalledWith(actions.fetch({
      name: 'analytics_start_date',
      args: {
        profileId: '1235519asd',
      },
    }));
    expect(next).toHaveBeenCalledWith(action);
  });

  it('should set the date range on user_FETCH_SUCCESS if there are start_date and end_date available as search parameters', () => {
    state.router = {
      location: {
        search: '?start_date=1234&end_date=5678',
      },
    };
    const action = {
      type: `user_${asyncDataFetchActionTypes.FETCH_SUCCESS}`,
    };
    middleware(store)(next)(action);
    expect(store.dispatch).toHaveBeenCalledWith(dateActions.setDateRange(1234, 5678));
  });

  afterEach(() => {
    store.dispatch.mockReset();
  });

  it('should dispatch SET_CURRET_TAB on LOCATION_CHANGE navigating to a new tab', () => {
    state.router = {
      location: {
        pathname: '/posts/4e88a092512f7e1556000000',
      },
    };
    const action = {
      type: LOCATION_CHANGE,
      payload: {
        pathname: '/overview/foo',
      },
    };
    middleware(store)(next)(action);
    expect(store.dispatch).toHaveBeenCalledWith(dateActions.setCurrentTab('overview'));
  });

  it('should not dispatch SET_CURRET_TAB on LOCATION_CHANGE navigating to the same tab', () => {
    state.router = {
      location: {
        pathname: '/overview/4e88a092512f7e1556000000',
      },
    };
    const action = {
      type: LOCATION_CHANGE,
      payload: {
        pathname: '/overview/foo',
      },
    };
    middleware(store)(next)(action);
    expect(store.dispatch).not.toHaveBeenCalledWith(dateActions.setCurrentTab('overview'));
  });

  it('should restore the previous stored state on LOCATION_CHANGE', () => {
    state.router = {
      location: {
        pathname: '/posts/4e88a092512f7e1556000000',
      },
    };
    state.date.historicData = {
      foo: {
        selectedPreset: presets[1],
        startDate: '1/1/2018',
        endDate: '1/2/2018',
      },
    };

    const action = {
      type: LOCATION_CHANGE,
      payload: {
        pathname: '/foo',
      },
    };
    middleware(store)(next)(action);
    expect(store.dispatch).toHaveBeenCalledWith(dateActions.setCurrentTab('foo'));
    expect(store.dispatch).toHaveBeenCalledWith({
      type: dateActionTypes.SET_DATE_RANGE,
      preset: {
        name: 'Yesterday',
        label: 'Yesterday',
        range: 1,
        selected: true,
        disabled: false,
      },
      startDate: '1/1/2018',
      endDate: '1/2/2018',
    });
  });

  it('should not disptach SET_DATE_RANGE if we have no previous history store', () => {
    state.router = {
      location: {
        pathname: '/posts/4e88a092512f7e1556000000',
      },
    };

    const action = {
      type: LOCATION_CHANGE,
      payload: {
        pathname: '/foo',
      },
    };
    middleware(store)(next)(action);
    expect(store.dispatch).toHaveBeenCalledWith(dateActions.setCurrentTab('foo'));
    expect(store.dispatch).not.toHaveBeenCalledWith({
      type: dateActionTypes.SET_DATE_RANGE,
    });
  });
});
