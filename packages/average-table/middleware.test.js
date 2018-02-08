import { actions } from '@bufferapp/async-data-fetch';
import { actionTypes } from '@bufferapp/analyze-profile-selector';
import { actionTypes as dateActionTypes } from '@bufferapp/analyze-date-picker';
import { actions as exportActions, actionTypes as exportActionTypes } from '@bufferapp/analyze-png-export';
import { actions as csvExportActions, actionTypes as csvExportActionTypes } from '@bufferapp/analyze-csv-export';
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
  average: {
    metrics: {
      totals: [
        {
          label: 'Engagement',
          value: 40,
        },
        {
          label: 'Clicks',
          value: 13,
        },
      ],
    },
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

  it('shoud dispatch a data fetch for average once a profile has been selected', () => {
    const action = {
      type: actionTypes.SELECT_PROFILE,
      profile: {
        id: '1235519asd',
      },
    };
    middleware(store)(next)(action);
    expect(store.dispatch).toHaveBeenCalledWith(actions.fetch({
      name: 'average',
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
    expect(store.dispatch).toHaveBeenCalledWith(exportActions.exportChart('js-dom-to-png-average', 'average-performance-statistics'));
  });

  it('should listen to EXPORT_TO_CSV_START and trigger a exportChart action', () => {
    const action = {
      type: csvExportActionTypes.EXPORT_TO_CSV_START,
    };
    const csvData = {
      Engagement: 40,
      Clicks: 13,
    };
    middleware(store)(next)(action);
    expect(store.dispatch).toHaveBeenCalledWith(csvExportActions.exportChart('average-performance-statistics', csvData));
  });

  describe('SET_DATE_RANGE', () => {
    it('should dispatch an average metrics fetch if there is a profile selected', () => {
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
        name: 'average',
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
