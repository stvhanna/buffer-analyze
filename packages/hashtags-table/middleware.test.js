import { actions } from '@bufferapp/async-data-fetch';
import { actionTypes } from '@bufferapp/analyze-profile-selector';
import { actionTypes as dateActionTypes } from '@bufferapp/analyze-date-picker';
import { actionTypes as exportActionTypes, actions as exportActions } from '@bufferapp/analyze-png-export';
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
    selectedProfileId: '12359182129asd',
    profiles: [{
      id: '12359182129asd',
      service: 'facebook',
      timezone: 'Etc/UTC',
    }],
    selectedProfile: {
      id: '12359182129asd',
      service: 'facebook',
      timezone: 'Etc/UTC',
    },
  },
  hashtags: {
    hashtags: [
      {
        display_name: '#SundayFunday',
        posts_count: 3,
        primary_metric: 27692,
        secondary_metric: 155.66666666667,
      },
    ],
    labels: {
      primary_metric: 'Reach',
      secondary_metric: 'Engagement Rate',
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

  it('shoud dispatch a data fetch for hashtags once a profile has been selected', () => {
    const action = {
      type: actionTypes.SELECT_PROFILE,
      profile: {
        id: '12359182129asd',
      },
    };
    middleware(store)(next)(action);
    expect(store.dispatch).toHaveBeenCalledWith(actions.fetch({
      name: 'hashtags',
      args: {
        profileId: '12359182129asd',
        startDate: state.date.startDate,
        endDate: state.date.endDate,
      },
    }));
    expect(next).toHaveBeenCalledWith(action);
  });

  it('shoud dispatch a data fetch for hashtags once date range is changed', () => {
    const action = {
      type: dateActionTypes.SET_DATE_RANGE,
      startDate: '10/10/2016',
      endDate: '20/10/2016',
    };
    middleware(store)(next)(action);
    expect(store.dispatch).toHaveBeenCalledWith(actions.fetch({
      name: 'hashtags',
      args: {
        profileId: state.profiles.selectedProfileId,
        profileService: state.profiles.selectedProfile.service,
        startDate: '10/10/2016',
        endDate: '20/10/2016',
      },
    }));
    expect(next).toHaveBeenCalledWith(action);
  });

  it('should listen to EXPORT_TO_PNG_START and trigger a exportChart action', () => {
    const action = {
      type: exportActionTypes.EXPORT_TO_PNG_START,
    };
    middleware(store)(next)(action);
    expect(store.dispatch).toHaveBeenCalledWith(exportActions.exportChart('js-dom-to-png-hashtags', 'posts-hashtags'));
  });

  it('should listen to EXPORT_TO_CSV_START and trigger a exportChart action', () => {
    const action = {
      type: exportCSVActionTypes.EXPORT_TO_CSV_START,
    };
    const csvData = {
      hashtags: ['#SundayFunday'],
      'Posts count': [3],
      Reach: [27692],
      'Engagement Rate': [155.66666666667],
    };
    middleware(store)(next)(action);
    expect(store.dispatch).toHaveBeenCalledWith(exportCSVActions.exportChart('posts-hashtags', csvData));
  });

  afterEach(() => jest.clearAllMocks());
});
