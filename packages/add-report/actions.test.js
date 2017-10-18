import { actions, actionTypes } from './actions';

describe('actions', () => {
  it('createReport triggers CREATE_REPORT with name and chartId', () => {
    const name = 'Weekly Sync';
    const chart_id = 'summary-table';
    expect(actions.createReport(name, chart_id)).toEqual({
      type: actionTypes.CREATE_REPORT,
      name,
      chart_id,
    });
  });
});
