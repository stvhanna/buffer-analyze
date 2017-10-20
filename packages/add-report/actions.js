export const actionTypes = {
  CREATE_REPORT: 'CREATE_REPORT',
};

export const actions = {
  createReport(name, chartId) {
    return {
      type: actionTypes.CREATE_REPORT,
      name,
      chart_id: chartId,
    };
  },
};
