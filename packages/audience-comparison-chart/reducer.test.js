
import { actionTypes as asyncDataFetchActionTypes } from '@bufferapp/async-data-fetch';
import reducer from './reducer';

describe('reducer', () => {
  let initialState = {};

  beforeEach(() => {
    initialState = {
      loading: false,
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
        `comparison_${asyncDataFetchActionTypes.FETCH_START}` }))
      .toEqual({
        ...initialState,
        loading: true,
      });
  });

  it('should update metric on fetch success if metric is audience', () => {
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
      type: `comparison_${asyncDataFetchActionTypes.FETCH_SUCCESS}`,
      args: { metric: 'audience' },
      result,
    }))
      .toEqual(Object.assign({}, {
        profilesMetricData: metrics,
        profileTotals: totals,
        loading: false,
      }));
  });

  it('should NOT update metric on fetch success if metric is NOT audience', () => {
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

    expect(reducer({
      profilesMetricData: [1, 2, 3],
      profileTotals: [5, 6, 7],
    }, {
      type: `comparison_${asyncDataFetchActionTypes.FETCH_SUCCESS}`,
      args: { metric: 'reach' },
      result,
    }))
      .toEqual(Object.assign({}, {
        profilesMetricData: [1, 2, 3],
        profileTotals: [5, 6, 7],
      }));
  });
});
