import { actions } from '@bufferapp/async-data-fetch';
import { actionTypes } from '@bufferapp/analyze-profile-selector';
import { actionTypes as dateActionTypes } from '@bufferapp/analyze-date-picker';
import { actions as exportActions, actionTypes as exportActionTypes } from '@bufferapp/analyze-png-export';
import { actions as csvExportActions, actionTypes as csvExportActionTypes } from '@bufferapp/analyze-csv-export';
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
      compare: {
        selectedMetricLabel: 'Posts',
        metrics: {
          daily: [
            {
              day: '1507593600000',
              metrics: [
                {
                  label: 'Posts',
                  value: 1,
                },
              ],
            },
            {
              day: '1507680000000',
              metrics: [
                {
                  label: 'Posts',
                  value: 1,
                },
              ],
            },
            {
              day: '1507766400000',
              metrics: [
                {
                  label: 'Posts',
                  value: 1,
                },
              ],
            },
          ],
        },
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

  it('shoud dispatch a data fetch for compare once a profile has been selected', () => {
    const action = {
      type: actionTypes.SELECT_PROFILE,
      id: mockProfiles[0].id,
      profileService: 'twitter',
    };
    middleware(store)(next)(action);
    expect(store.dispatch).toHaveBeenCalledWith(actions.fetch({
      name: 'compare',
      args: {
        profileId: mockProfiles[0].id,
        profileService: 'twitter',
        startDate: state.date.startDate,
        endDate: state.date.endDate,
      },
    }));
    expect(next).toHaveBeenCalledWith(action);
  });

  it('shoud dispatch a data fetch for compare on  date change', () => {
    const action = {
      type: dateActionTypes.SET_DATE_RANGE,
      startDate: state.date.startDate,
      endDate: state.date.endDate,
      id: mockProfiles[0].id,
    };
    middleware(store)(next)(action);
    expect(store.dispatch).toHaveBeenCalledWith(actions.fetch({
      name: 'compare',
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
    expect(store.dispatch).toHaveBeenCalledWith(exportActions.exportChart('js-dom-to-png-compare', 'metrics-breakdown'));
  });

  it('should listen to EXPORT_TO_PNG_START and trigger a exportChart action for twitter', () => {
    const action = {
      type: exportActionTypes.EXPORT_TO_PNG_START,
    };
    state.profiles.selectedProfileService = 'twitter';
    middleware(store)(next)(action);
    expect(store.dispatch).toHaveBeenCalledWith(exportActions.exportChart('js-dom-to-png-compare', 'engagements-audience'));
  });

  it('should listen to EXPORT_TO_CSV_START and trigger a exportChart action', () => {
    const action = {
      type: csvExportActionTypes.EXPORT_TO_CSV_START,
    };
    middleware(store)(next)(action);
    const csvData = {
      Posts: [1, 1, 1],
      date: ["10/10/2017", "10/11/2017", "10/12/2017"],
    };
    expect(store.dispatch).toHaveBeenCalledWith(csvExportActions.exportChart('metrics-breakdown', csvData));
  });
});
