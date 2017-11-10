import { actions } from '@bufferapp/async-data-fetch';
import { actionTypes } from '@bufferapp/analyze-profile-selector';
import { actionTypes as dateActionTypes } from '@bufferapp/analyze-date-picker';
import middleware from './middleware';

import mockProfiles from './mocks/profiles';

const profileId = '12359182129asd';
let state = {};
let store = {};
const next = jest.fn();


describe('middleware', () => {
  beforeEach(() => {
    state = {
      router: {
        location: {
          pathname: `/insights/twitter/${profileId}`,
        },
      },
      date: {
        startDate: '10/10/2016',
        endDate: '30/10/2016',
      },
      profiles: {
        profiles: mockProfiles,
        selectedProfileService: 'facebook',
        selectedProfileId: 'foo42',
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

  it('shoud dispatch a data fetch for audience comparison once a profile has been selected', () => {
    const action = {
      type: actionTypes.SELECT_PROFILE,
      id: mockProfiles[0].id,
      profileService: 'twitter',
    };
    middleware(store)(next)(action);
    expect(store.dispatch).toHaveBeenCalledWith(actions.fetch({
      name: 'audience_comparison',
      args: {
        profileId: mockProfiles[0].id,
        profileService: 'twitter',
        startDate: state.date.startDate,
        endDate: state.date.endDate,
      },
    }));
    expect(next).toHaveBeenCalledWith(action);
  });

  it('shoud dispatch a data fetch for audience comparison on date change', () => {
    const action = {
      type: dateActionTypes.SET_DATE_RANGE,
      startDate: state.date.startDate,
      endDate: state.date.endDate,
      id: mockProfiles[0].id,
    };
    middleware(store)(next)(action);
    expect(store.dispatch).toHaveBeenCalledWith(actions.fetch({
      name: 'audience_comparison',
      args: {
        profileService: 'facebook',
        profileId: 'foo42',
        startDate: state.date.startDate,
        endDate: state.date.endDate,
      },
    }));
    expect(next).toHaveBeenCalledWith(action);
  });
});
