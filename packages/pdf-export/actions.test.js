import { actions, actionTypes } from './actions';

describe('actions', () => {
  it('exportToPDF should trigger EXPORT_TO_PDF', () => {
    expect(actions.exportToPDF()).toEqual({
      type: actionTypes.EXPORT_TO_PDF,
    });
  });
});
