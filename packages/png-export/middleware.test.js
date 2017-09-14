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

  describe('EXPORT_TO_PNG_START', () => {
    it('should generate a PNG for every chart', () => {
      const action = {
        type: actionTypes.EXPORT_TO_PNG_START,
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
        type: actionTypes.EXPORT_TO_PNG_START,
        filename: 'buffer-overview-analytics',
      };
      const state = {
        exportToPNG: {},
      };
      const pngs = ['a png', 'another png'];
      generatePNGFromChart.mockReturnValue(Promise.resolve(pngs));

      const promise = middleware({
        getState: () => state,
        dispatch: jest.fn(),
      })(next)(action);
      promise.then(() => {
        expect(generatePNGFromChart).toHaveBeenCalled();
        expect(downloadAsZip).toHaveBeenCalledWith('buffer-overview-analytics', pngs);
        done();
      });
    });

    it('should trigger endExportToPNG when downloadAsZip is done', (done) => {
      const action = {
        type: actionTypes.EXPORT_TO_PNG_START,
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
