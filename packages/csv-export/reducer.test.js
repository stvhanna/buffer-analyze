import reducer, { actionTypes, actions } from './reducer';

const data = {
  foo: 'bar',
};

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

  it('EXPORT_CHART stores a filename and a data object', () => {
    const state = reducer(undefined, {
      type: actionTypes.EXPORT_CHART,
      filename: 'averages',
      data,
    });
    expect(state.charts[0]).toEqual({
      filename: 'averages',
      data,
    });
  });

  it('EXPORT_CHART sets exporting=true', () => {
    const state = reducer(undefined, {
      type: actionTypes.EXPORT_CHART,
      filename: 'averages',
      data,
    });
    expect(state.exporting).toBeTruthy();
  });

  describe('EXPORT_TO_CSV_END', () => {
    it('exporting is false again', () => {
      const exportingState = reducer(undefined, {
        type: actionTypes.EXPORT_TO_CSV_START,
      });
      const state = reducer(exportingState, {
        type: actionTypes.EXPORT_TO_CSV_END,
      });
      expect(state.exporting).toBeFalsy();
    });

    it('charts is empty', () => {
      const exportingState = reducer(undefined, {
        type: actionTypes.EXPORT_CHART,
        filename: 'averages',
        data,
      });
      const state = reducer(exportingState, {
        type: actionTypes.EXPORT_TO_CSV_END,
      });
      expect(state.charts).toHaveLength(0);
    });
  });
});

describe('actions', () => {
  it('endExportToCSV triggers EXPORT_TO_CSV_END', () => {
    expect(actions.endExportToCSV()).toEqual({
      type: actionTypes.EXPORT_TO_CSV_END,
    });
  });
  it('exportToCSV triggers EXPORT_TO_CSV_START', () => {
    expect(actions.exportToCSV()).toEqual({
      type: actionTypes.EXPORT_TO_CSV_START,
    });
  });
  it('exportChart triggers EXPORT_CHART', () => {
    const filename = 'top-posts';
    expect(actions.exportChart(filename, data)).toEqual({
      type: actionTypes.EXPORT_CHART,
      filename,
      data,
    });
  });
});
