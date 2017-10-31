
import { actionTypes as asyncDataFetchActionTypes } from '@bufferapp/async-data-fetch';
import reducer from './reducer';

describe('reducer', () => {
  let initialState = {};

  beforeEach(() => {
    initialState = {
      loading: true,
      profilesMetricData: [],
      profileTotals: [],
    };
  });

  it('should initialize default state', () => {
    expect(reducer(undefined, { type: 'INIT' }))
      .toEqual(initialState);
  });

  it('should return initial state on FETCH_START', () => {
    expect(reducer(undefined, { type:
        `audience_comparison_${asyncDataFetchActionTypes.FETCH_START}` }))
      .toEqual(initialState);
  });

  it('should update metric on fetch success', () => {
    const metrics = [
      { label: 'foo' },
      { label: 'bar' },
    ];

    const totals = [
      { day: '12345' },
      { day: '12345' },
    ];

    const result = {
      profilesMetricData: metrics,
      profileTotals: totals,
    };

    expect(reducer({}, {
      type: `audience_comparison_${asyncDataFetchActionTypes.FETCH_SUCCESS}`,
      result,
    }))
      .toEqual(Object.assign({}, {
        profilesMetricData: metrics,
        profileTotals: totals,
        loading: false,
      }));
  });
});
