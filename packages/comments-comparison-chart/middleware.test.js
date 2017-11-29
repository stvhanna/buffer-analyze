import { actions } from '@bufferapp/async-data-fetch';
import { actionTypes } from '@bufferapp/multi-profile-selector';
import { actionTypes as dateActionTypes } from '@bufferapp/analyze-date-picker';
import middleware from './middleware';

import mockProfiles from './mocks/profiles';

let state = {};
let store = {};
const next = jest.fn();

describe('middleware', () => {
  beforeEach(() => {
    state = {
      date: {
        startDate: '10/10/2016',
        endDate: '30/10/2016',
      },
      profiles: {
        profiles: mockProfiles,
      },
      multiProfileSelector: {
        selectedProfiles: mockProfiles,
      },
    };

    store = {
      dispatch: jest.fn(),
      getState: jest.fn(() => state),
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

  it('shoud dispatch a data fetch for comments comparison once a compare profile has been pressed', () => {
    const action = {
      type: actionTypes.COMPARE_PROFILES,
      selectedProfiles: mockProfiles,
    };
    middleware(store)(next)(action);
    expect(store.dispatch).toHaveBeenCalledWith(
      actions.fetch({
        name: 'comparison',
        args: {
          profileIds: mockProfiles.map(p => p.id),
          startDate: state.date.startDate,
          endDate: state.date.endDate,
          metric: 'comments',
        },
      }),
    );
    expect(next).toHaveBeenCalledWith(action);
  });

  it('shoud dispatch a data fetch for comments comparison on date change', () => {
    const action = {
      type: dateActionTypes.SET_DATE_RANGE,
      startDate: state.date.startDate,
      endDate: state.date.endDate,
      profileIds: mockProfiles.map(p => p.id),
    };
    middleware(store)(next)(action);
    expect(store.dispatch).toHaveBeenCalledWith(
      actions.fetch({
        name: 'comparison',
        args: {
          profileIds: mockProfiles.map(p => p.id),
          startDate: state.date.startDate,
          endDate: state.date.endDate,
          metric: 'comments',
        },
      }),
    );
    expect(next).toHaveBeenCalledWith(action);
  });
});
