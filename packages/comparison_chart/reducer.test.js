
import { actionTypes as asyncDataFetchActionTypes } from '@bufferapp/async-data-fetch';
import reducer from './reducer';

describe('reducer', () => {
  let initialState = {};

  beforeEach(() => {
    initialState = {
      loading: false,
      metrics: {},
    };
  });

  it('should initialize default state', () => {
    expect(reducer(undefined, { type: 'INIT' }))
      .toEqual(initialState);
  });

  it('should return initial state on FETCH_START', () => {
    expect(reducer(undefined, { type:
        `comparison_${asyncDataFetchActionTypes.FETCH_START}` }))
      .toEqual({
        ...initialState,
        loading: true,
      });
  });

  it('should update data on fetch', () => {
    const profileTotals = {
      audience: [
        {
          currentPeriodTotal: 0,
          pastPeriodTotal: 0,
          metric: { label: 'Followers', color: '#ffffff' },
          profileId: '1',
        },
        {
          currentPeriodTotal: 0,
          pastPeriodTotal: 0,
          metric: { label: 'Followers', color: '#ffffff' },
          profileId: '2',
        },
      ],
      likes: [
        {
          currentPeriodTotal: 0,
          pastPeriodTotal: 0,
          metric: { label: 'Followers', color: '#ffffff' },
          profileId: '1',
        },
        {
          currentPeriodTotal: 0,
          pastPeriodTotal: 0,
          metric: { label: 'Followers', color: '#ffffff' },
          profileId: '2',
        },
      ],
    };
    const profilesMetricData = [
      { dailyData: [], profileId: '1' },
      { dailyData: [], profileId: '2' },
    ];

    const result = {
      audience: { profilesMetricData, profileTotals },
      likes: { profilesMetricData, profileTotals },
    };

    expect(reducer({}, {
      type: `comparison_${asyncDataFetchActionTypes.FETCH_SUCCESS}`,
      args: { metric: 'audience' },
      result,
    }))
      .toEqual(Object.assign({}, {
        metrics: result,
        loading: false,
      }));
  });
});
