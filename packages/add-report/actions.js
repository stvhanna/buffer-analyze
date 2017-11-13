export const actionTypes = {
  CREATE_REPORT: 'CREATE_REPORT',
  ADD_TO_REPORT: 'ADD_TO_REPORT',
};

export const actions = {
  createReport(name, chartId, state = {}) {
    return {
      type: actionTypes.CREATE_REPORT,
      name,
      state,
      chart_id: chartId,
    };
  },
  addToReport(id, chartId, state = {}) {
    return {
      type: actionTypes.ADD_TO_REPORT,
      state,
      chart_id: chartId,
      reportId: id,
    };
  },
};
