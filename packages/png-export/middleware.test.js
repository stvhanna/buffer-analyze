/* eslint-disable import/first */
import middleware from './middleware';
import { actions, actionTypes } from './reducer';

jest.mock('./lib/generatePNGFromChart');
jest.mock('./lib/downloadAsZip');
import generatePNGFromChart from './lib/generatePNGFromChart';
import downloadAsZip from './lib/downloadAsZip';

describe('middleware', () => {
  const next = jest.fn();
  const store = {
    dispatch: jest.fn(),
    getState: () => ({
      exportToPNG: {},
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

  it('should dispatch processCharts 100ms after the last EXPORT_CHART call', () => {
    jest.useFakeTimers();
    const action = {
      type: actionTypes.EXPORT_CHART,
    };
    middleware(store)(next)(action);
    expect(store.dispatch).not.toHaveBeenCalledWith(actions.processCharts());
    jest.runAllTimers();
    expect(store.dispatch).toHaveBeenCalledWith(actions.processCharts());
  });

  describe('PROCESS_CHARTS', () => {
    it('should generate a PNG for every chart', () => {
      const action = {
        type: actionTypes.PROCESS_CHARTS,
      };
      const state = {
        exportToPNG: {
          charts: ['a chart', 'another chart'],
        },
        date: {
          startDate: '10/06/2017',
          endDate: '18/06/2017',
        },
      };
      generatePNGFromChart.mockReturnValue(Promise.resolve());

      middleware({
        getState: () => state,
        dispatch: jest.fn(),
      })(next)(action);
      expect(generatePNGFromChart)
        .toHaveBeenCalledWith(state.exportToPNG.charts, state.date);
    });

    it('should create a zip with the PNGs once they have been generated', (done) => {
      const action = {
        type: actionTypes.PROCESS_CHARTS,
      };
      const state = {
        exportToPNG: {
          zipFilename: 'buffer-overview-analytics',
        },
      };
      const pngs = ['a png', 'another png'];
      generatePNGFromChart.mockReturnValue(Promise.resolve(pngs));

      const promise = middleware({
        getState: () => state,
        dispatch: jest.fn(),
      })(next)(action);
      promise.then(() => {
        expect(generatePNGFromChart).toHaveBeenCalled();
        expect(downloadAsZip).toHaveBeenCalledWith(state.exportToPNG.zipFilename, pngs);
        done();
      });
    });

    it('should trigger endExportToPNG when downloadAsZip is done', (done) => {
      const action = {
        type: actionTypes.PROCESS_CHARTS,
      };
      generatePNGFromChart.mockReturnValue(Promise.resolve());

      const promise = middleware(store)(next)(action);
      promise.then(() => {
        expect(store.dispatch).toHaveBeenCalledWith(actions.endExportToPNG());
        done();
      });
    });
  });
});
