import { actions } from '@bufferapp/async-data-fetch';
import { actionTypes } from '@bufferapp/analyze-profile-selector';
import { actionTypes as dateActionTypes } from '@bufferapp/analyze-date-picker';
import { actions as exportActions, actionTypes as exportActionTypes } from '@bufferapp/analyze-png-export';
import middleware from './middleware';

const profileId = '12359182129asd';

const state = {
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
    selectedProfileId: '12359182129asd',
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

  it('shoud dispatch a data fetch for top posts once a profile has been selected', () => {
    const action = {
      type: actionTypes.SELECT_PROFILE,
      id: '1235519asd',
    };
    middleware(store)(next)(action);
    expect(store.dispatch).toHaveBeenCalledWith(actions.fetch({
      name: 'top_posts',
      args: {
        profileId: '1235519asd',
        startDate: state.date.startDate,
        endDate: state.date.endDate,
      },
    }));
    expect(next).toHaveBeenCalledWith(action);
  });

  it('shoud dispatch a data fetch for top posts once date range is changed', () => {
    const action = {
      type: dateActionTypes.SET_DATE_RANGE,
      id: '1235519asd',
    };
    middleware(store)(next)(action);
    expect(store.dispatch).toHaveBeenCalledWith(actions.fetch({
      name: 'top_posts',
      args: {
        profileId: '1235519asd',
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
    expect(store.dispatch).toHaveBeenCalledWith(exportActions.exportChart('js-dom-to-png-top-posts', 'top-posts'));
  });
});
