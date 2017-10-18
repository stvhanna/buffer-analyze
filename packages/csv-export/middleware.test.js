/* eslint-disable import/first */
import middleware from './middleware';
import { actions, actionTypes } from './reducer';

jest.mock('./lib/generateCSVFromChart');
jest.mock('./lib/downloadAsZip');
import generateCSVFromChart from './lib/generateCSVFromChart';
import downloadAsZip from './lib/downloadAsZip';

describe('middleware', () => {
  const next = jest.fn();
  const store = {
    dispatch: jest.fn(),
    getState: () => ({
      exportToCSV: {},
      date: {},
    }),
  };
  it('should exist', () => {
    expect(middleware).toBeDefined();
  });

  it('should keep propagating the action through the chain', () => {
    const action = {
      type: 'TEST',
    };
    middleware(store)(next)(action);
    expect(next).toHaveBeenCalledWith(action);
  });

  describe('EXPORT_TO_CSV_START', () => {
    it('should generate a CSV for every chart', () => {
      const action = {
        type: actionTypes.EXPORT_TO_CSV_START,
      };
      const state = {
        exportToCSV: {
          charts: ['a chart', 'another chart'],
        },
        date: {
          startDate: '10/06/2017',
          endDate: '18/06/2017',
        },
      };
      generateCSVFromChart.mockReturnValue(Promise.resolve());

      middleware({
        getState: () => state,
        dispatch: jest.fn(),
      })(next)(action);
      expect(generateCSVFromChart)
        .toHaveBeenCalledWith(state.exportToCSV.charts, state.date);
    });

    it('should create a zip with the CSVs once they have been generated', (done) => {
      const action = {
        type: actionTypes.EXPORT_TO_CSV_START,
        filename: 'buffer-overview-analytics',
      };
      const state = {
        exportToCSV: {},
      };
      const csvs = ['a csv', 'another csv'];
      generateCSVFromChart.mockReturnValue(Promise.resolve(csvs));

      const promise = middleware({
        getState: () => state,
        dispatch: jest.fn(),
      })(next)(action);
      promise.then(() => {
        expect(generateCSVFromChart).toHaveBeenCalled();
        expect(downloadAsZip).toHaveBeenCalledWith('buffer-overview-analytics', csvs);
        done();
      });
    });

    it('should trigger endExportToCSV when downloadAsZip is done', (done) => {
      const action = {
        type: actionTypes.EXPORT_TO_CSV_START,
      };
      generateCSVFromChart.mockReturnValue(Promise.resolve());

      const promise = middleware(store)(next)(action);
      promise.then(() => {
        expect(store.dispatch).toHaveBeenCalledWith(actions.endExportToCSV());
        done();
      });
    });
  });
});
