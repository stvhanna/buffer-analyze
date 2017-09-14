import reducer, { actionTypes, actions } from './reducer';

describe('reducer', () => {
  describe('initial state', () => {
    it('is not exporting', () => {
      const state = reducer(undefined, {
        type: 'TEST',
      });
      expect(state.exporting).toBeFalsy();
    });

    it('has no charts to export', () => {
      const state = reducer(undefined, {
        type: 'TEST',
      });
      expect(state.charts).toHaveLength(0);
    });
  });

  it('EXPORT_CHART stores a filename and DOM node id', () => {
    const state = reducer(undefined, {
      type: actionTypes.EXPORT_CHART,
      filename: 'averages',
      id: 'average-container',
    });
    expect(state.charts[0]).toEqual({
      filename: 'averages',
      id: 'average-container',
    });
  });

  it('EXPORT_CHART sets exporting=true', () => {
    const state = reducer(undefined, {
      type: actionTypes.EXPORT_CHART,
      filename: 'averages',
      id: 'average-container',
    });
    expect(state.exporting).toBeTruthy();
  });

  describe('EXPORT_TO_PNG_END', () => {
    it('exporting is false again', () => {
      const exportingState = reducer(undefined, {
        type: actionTypes.EXPORT_TO_PNG_START,
      });
      const state = reducer(exportingState, {
        type: actionTypes.EXPORT_TO_PNG_END,
      });
      expect(state.exporting).toBeFalsy();
    });

    it('charts is empty', () => {
      const exportingState = reducer(undefined, {
        type: actionTypes.EXPORT_CHART,
        filename: 'averages',
        id: 'average-container',
      });
      const state = reducer(exportingState, {
        type: actionTypes.EXPORT_TO_PNG_END,
      });
      expect(state.charts).toHaveLength(0);
    });
  });
});

describe('actions', () => {
  it('endExportToPNG triggers EXPORT_TO_PNG_END', () => {
    expect(actions.endExportToPNG()).toEqual({
      type: actionTypes.EXPORT_TO_PNG_END,
    });
  });
  it('exportToPNG triggers EXPORT_TO_PNG_START', () => {
    expect(actions.exportToPNG()).toEqual({
      type: actionTypes.EXPORT_TO_PNG_START,
    });
  });
  it('exportChart triggers EXPORT_CHART', () => {
    const id = 'chart-dom-id';
    const filename = 'top-posts';
    expect(actions.exportChart(id, filename)).toEqual({
      type: actionTypes.EXPORT_CHART,
      id,
      filename,
    });
  });
});
