import { actions } from '@bufferapp/async-data-fetch';
import { actionTypes } from '@bufferapp/analyze-profile-selector';
import { actionTypes as dateActionTypes } from '@bufferapp/analyze-date-picker';
import { actionTypes as exportCSVActionTypes, actions as exportCSVActions } from '@bufferapp/analyze-csv-export';

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
  hourly: {
    selectedMetric: 'Engagements',
    metrics: [
      {
        label: 'Engagements',
        hourlyMetrics: [331, 670, 451, 333, 354, 1167, 519, 877, 462, 337, 323, 354,
          1431, 637, 455, 848, 2654, 935, 803, 1097, 795, 444, 474, 339],
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

  it('should listen to EXPORT_TO_CSV_START and trigger a exportChart action', () => {
    const action = {
      type: exportCSVActionTypes.EXPORT_TO_CSV_START,
    };
    middleware(store)(next)(action);
    const csvData = {
      hour: ['12 AM', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM',
        '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM',
        '7 PM', '8 PM', '9 PM', '10 PM', '11 PM'],
      Engagements: [331, 670, 451, 333, 354, 1167, 519, 877, 462, 337, 323, 354,
        1431, 637, 455, 848, 2654, 935, 803, 1097, 795, 444, 474, 339],
    };
    expect(store.dispatch).toHaveBeenCalledWith(exportCSVActions.exportChart('hourly-engagements', csvData));
  });

  afterEach(() => jest.clearAllMocks());
});
