import { actions } from '@bufferapp/async-data-fetch';
import { actionTypes } from '@bufferapp/analyze-profile-selector';
import { actionTypes as dateActionTypes } from '@bufferapp/analyze-date-picker';
import { actions as exportActions, actionTypes as exportActionTypes } from '@bufferapp/analyze-png-export';
import { actionTypes as exportCSVActionTypes, actions as exportCSVActions } from '@bufferapp/analyze-csv-export';
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
    selectedProfileService: 'instagram',
  },
  summary: {
    metrics: [
      {
        label: 'Engagements',
        value: 13,
      },
      {
        label: 'Clicks',
        value: 60,
      },
      {
        label: 'Followers',
        value: 50,
      },
    ],
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

  it('shoud dispatch a data fetch for summary once a profile has been selected', () => {
    const action = {
      type: actionTypes.SELECT_PROFILE,
      profile: {
        id: '1235519asd',
        service: 'instagram',
      },
    };
    middleware(store)(next)(action);
    expect(store.dispatch).toHaveBeenCalledWith(actions.fetch({
      name: 'summary',
      args: {
        profileService: 'instagram',
        profileId: '1235519asd',
        startDate: state.date.startDate,
        endDate: state.date.endDate,
      },
    }));
    expect(next).toHaveBeenCalledWith(action);
  });

  it('shoud dispatch a data fetch for summary once a dateRange has been selected', () => {
    const action = {
      type: actionTypes.SELECT_PROFILE,
      profile: {
        id: '1235519asd',
        service: 'instagram',
      },
    };
    middleware(store)(next)(action);
    expect(store.dispatch).toHaveBeenCalledWith(actions.fetch({
      name: 'summary',
      args: {
        profileId: '1235519asd',
        profileService: 'instagram',
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
    expect(store.dispatch).toHaveBeenCalledWith(exportActions.exportChart('js-dom-to-png-summary', 'performance-statistics'));
  });

  it('should listen to EXPORT_TO_CSV_START and trigger a exportChart action', () => {
    const action = {
      type: exportCSVActionTypes.EXPORT_TO_CSV_START,
    };
    const csvData = {
      Engagements: 13,
      Clicks: 60,
      Followers: 50,
    };
    middleware(store)(next)(action);
    expect(store.dispatch).toHaveBeenCalledWith(exportCSVActions.exportChart('performance-statistics', csvData));
  });

  describe('SET_DATE_RANGE', () => {
    it('should dispatch a summary fetch if there is a profile selected', () => {
      const action = {
        type: dateActionTypes.SET_DATE_RANGE,
        startDate: state.date.startDate,
        endDate: state.date.endDate,
      };
      state.profiles = {
        selectedProfileId: profileId,
      };
      middleware(store)(next)(action);
      expect(store.dispatch).toHaveBeenCalledWith(actions.fetch({
        name: 'summary',
        args: {
          profileId,
          startDate: state.date.startDate,
          endDate: state.date.endDate,
        },
      }));
      expect(next).toHaveBeenCalledWith(action);
    });
    it('should not dispatch it if there is no profile selected', () => {
      const action = {
        type: dateActionTypes.SET_DATE_RANGE,
        startDate: state.date.startDate,
        endDate: state.date.endDate,
      };
      state.profiles = {
        selectedProfileId: null,
      };
      middleware(store)(next)(action);
      expect(store.dispatch).not.toHaveBeenCalled();
    });
  });

  afterEach(() => jest.clearAllMocks());
});
