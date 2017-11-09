export const actionTypes = {
  CREATE_REPORT: 'CREATE_REPORT',
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
};
