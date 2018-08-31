import { actionTypes } from '@bufferapp/async-data-fetch';
import reducer from './reducer';

describe('reducer', () => {
  it('initial state has no trial information', () => {
    const initialState = reducer(undefined, {});
    expect(initialState.onTrial).toBeFalsy();
    expect(initialState.trialDaysRemaining).toBe(-1);
  });

  it('gets trial information on a successful response from /get_account_details', () => {
    const state = reducer(undefined, {
      type: `get_account_details_${actionTypes.FETCH_SUCCESS}`,
      result: {
        onTrial: true,
        daysRemaining: 7,
      },
    });

    expect(state.onTrial).toBeTruthy();
    expect(state.trialDaysRemaining).toBe(7);
  });
});
