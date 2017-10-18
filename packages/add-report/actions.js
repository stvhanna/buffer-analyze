import { actionTypes as asyncDataFetchActionTypes } from '@bufferapp/async-data-fetch';

export const actionTypes = {
  CREATE_REPORT: 'CREATE_REPORT',
};

export const actions = {
  createReport(name, chart_id) {
    return {
      type: actionTypes.CREATE_REPORT,
      name,
      chart_id,
    };
  },
};
