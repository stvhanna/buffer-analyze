import { actions, actionTypes } from './actions';

describe('actions', () => {
  it('createReport triggers CREATE_REPORT with name and chartId', () => {
    const name = 'Weekly Sync';
    const chartId = 'summary-table';
    expect(actions.createReport(name, chartId)).toEqual({
      type: actionTypes.CREATE_REPORT,
      name,
      chart_id: chartId,
    });
  });
});
