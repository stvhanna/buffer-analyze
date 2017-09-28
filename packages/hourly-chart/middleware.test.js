import { actions } from '@bufferapp/async-data-fetch';
import { actionTypes } from '@bufferapp/analyze-profile-selector';
import { actionTypes as dateActionTypes } from '@bufferapp/analyze-date-picker';

import middleware from './middleware';

const profileId = '12359182129asd';

const state = {
  router: {
    location: {
      pathname: `/insights/twitter/${profileId}`,
    },
  },
  profiles: {
    selectedProfileId: profileId,
  },
  date: {
    startDate: '10/10/2016',
    endDate: '30/10/2016',
  },
};
describe('middleware', () => {
  const next = jest.fn();
  const store = {
    dispatch: jest.fn(),
    getState: jest.fn(() => state),
  };
  it('should exist', () => {
    expect(middleware).toBeDefined();
  });

  it('should keep propagating the action through the chain', () => {
    const action = {
      type: 'TEST',
    };
    middleware(store)(next)(action);
  });

  it('shoud dispatch a data fetch for hourly data once a profile has been selected', () => {
    const action = {
      type: actionTypes.SELECT_PROFILE,
      id: '1235519asd',
    };
    middleware(store)(next)(action);
    expect(store.dispatch).toHaveBeenCalledWith(actions.fetch({
      name: 'hourly',
      args: {
        profileId: '1235519asd',
        startDate: state.date.startDate,
        endDate: state.date.endDate,
      },
    }));
    expect(next).toHaveBeenCalledWith(action);
  });

  it('shoud dispatch a data fetch for hourly data once a new date range has been selected', () => {
    const action = {
      type: dateActionTypes.SET_DATE_RANGE,
      startDate: '07/10/2016',
      endDate: '08/10/2016',
    };
    middleware(store)(next)(action);
    expect(store.dispatch).toHaveBeenCalledWith(actions.fetch({
      name: 'hourly',
      args: {
        profileId,
        startDate: '07/10/2016',
        endDate: '08/10/2016',
      },
    }));
    expect(next).toHaveBeenCalledWith(action);
  });

  afterEach(() => jest.clearAllMocks());
});
