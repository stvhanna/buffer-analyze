/* eslint-disable import/first */
import moment from 'moment';
import generatePNGFromChart from './generatePNGFromChart';

jest.mock('dataurl-to-blob');
jest.mock('html2canvas');
import html2canvas from 'html2canvas';
import dataURLToBlob from 'dataurl-to-blob';

describe('generatePNGFromChart', () => {
  const date = {
    startDate: moment('20170707', 'YYYYMMDD').unix(),
    endDate: moment('20170715', 'YYYYMMDD').unix(),
  };

  const charts = [{
    id: 'chart-1',
    filename: 'summary',
  }, {
    id: 'chart-2',
    filename: 'averages',
  }, {
    id: 'chart-3',
    filename: 'top-posts',
  }];

  const canvasMock = {
    toDataURL: jest.fn(),
  };

  beforeEach(() => {
    html2canvas.mockReturnValue(Promise.resolve(canvasMock));
  });

  it('exists', () => expect(generatePNGFromChart).toBeDefined());

  it('for every chart grabs the DOM element with id=chart.id and transforms it into a canvas object with white background', (done) => {
    document.getElementById = jest.fn();
    document.getElementById.mockReturnValue('an html node');
    generatePNGFromChart(charts, date).then((pngs) => {
      expect(html2canvas).toHaveBeenCalledWith('an html node', {
        background: '#fff',
        dpi: 300,
        useCORS: true,
      });
      expect(pngs.length).toBe(charts.length);
      done();
    });
  });

  it('for every canvas generates a PNG as a blob', (done) => {
    canvasMock.toDataURL.mockReturnValue('dataURL');
    generatePNGFromChart(charts, date).then(() => {
      expect(canvasMock.toDataURL).toHaveBeenCalledWith('image/png');
      expect(dataURLToBlob).toHaveBeenCalledWith('dataURL');
      done();
    });
  });

  it('only returns PNGs for html nodes found', (done) => {
    document.getElementById
      .mockReturnValueOnce('an html node')
      .mockReturnValueOnce(null)
      .mockReturnValueOnce('another html node');
    canvasMock.toDataURL.mockReturnValue('dataURL');
    generatePNGFromChart(charts, date).then((pngs) => {
      expect(pngs).toHaveLength(2);
      done();
    });
  });

  it('names each file as <filename>-<startDate>-to-<endDate>', (done) => {
    generatePNGFromChart(charts, date).then((pngs) => {
      expect(pngs[0].filename).toBe('summary-20170707-to-20170715.png');
      expect(pngs[1].filename).toBe('averages-20170707-to-20170715.png');
      expect(pngs[2].filename).toBe('top-posts-20170707-to-20170715.png');
      done();
    });
  });
});
