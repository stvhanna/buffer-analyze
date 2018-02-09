import { actions } from '@bufferapp/async-data-fetch';
import { actionTypes } from '@bufferapp/analyze-profile-selector';
import { actionTypes as dateActionTypes } from '@bufferapp/analyze-date-picker';
import { actions as exportActions, actionTypes as exportActionTypes } from '@bufferapp/analyze-png-export';
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

  it('should dispatch a data fetch for audience once a profile has been selected', () => {
    const action = {
      type: actionTypes.SELECT_PROFILE,
      profile: {
        id: mockProfiles[0].id,
        service: 'twitter',
      },
    };
    middleware(store)(next)(action);
    expect(store.dispatch).toHaveBeenCalledWith(actions.fetch({
      name: 'audience',
      args: {
        profileId: mockProfiles[0].id,
        profileService: 'twitter',
        startDate: state.date.startDate,
        endDate: state.date.endDate,
      },
    }));
    expect(next).toHaveBeenCalledWith(action);
  });

  it('should dispatch a data fetch for audience on  date change', () => {
    const action = {
      type: dateActionTypes.SET_DATE_RANGE,
      startDate: state.date.startDate,
      endDate: state.date.endDate,
      id: mockProfiles[0].id,
    };
    middleware(store)(next)(action);
    expect(store.dispatch).toHaveBeenCalledWith(actions.fetch({
      name: 'audience',
      args: {
        profileService: 'facebook',
        profileId: 'foo42',
        startDate: state.date.startDate,
        endDate: state.date.endDate,
      },
    }));
    expect(next).toHaveBeenCalledWith(action);
  });

  it('should listen to EXPORT_TO_PNG_START and trigger a exportChart action', () => {
    const action = {
      type: exportActionTypes.EXPORT_TO_PNG_START,
    };
    middleware(store)(next)(action);
    expect(store.dispatch).toHaveBeenCalledWith(exportActions.exportChart('js-dom-to-png-audience', 'audience-compare'));
  });

  it('should listen to EXPORT_TO_PNG_START and trigger a exportChart action for twitter', () => {
    const action = {
      type: exportActionTypes.EXPORT_TO_PNG_START,
    };
    state.profiles.selectedProfileService = 'twitter';
    middleware(store)(next)(action);
    expect(store.dispatch).toHaveBeenCalledWith(exportActions.exportChart('js-dom-to-png-audience', 'audience-compare'));
  });
});
