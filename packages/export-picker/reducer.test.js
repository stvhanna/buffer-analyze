import reducer, { actions, actionTypes } from './reducer';

describe('reducer', () => {
  describe('initial state', () => {
    let state;

    beforeEach(() => {
      state = reducer(undefined, {
        type: 'TEST_ACTION',
      });
    });

    it('is loading', () => {
      expect(state.loading).toBeTruthy();
    });

    it('is closed', () => {
      expect(state.open).toBe(false);
    });
  });
});

describe('actions', () => {
  describe('opening and closing', () => {
    it(`open triggers ${actionTypes.OPEN_EXPORT_PICKER_LIST}`, () => {
      expect(actions.open()).toEqual({
        type: actionTypes.OPEN_EXPORT_PICKER_LIST,
      });
    });
    it(`close triggers ${actionTypes.CLOSE_EXPORT_PICKER_LIST}`, () => {
      expect(actions.close()).toEqual({
        type: actionTypes.CLOSE_EXPORT_PICKER_LIST,
      });
    });
  });
});
