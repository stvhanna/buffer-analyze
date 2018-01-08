import PDFFormatter from './PDFFormatter';

global.getComputedStyle = jest.fn(() => ({
  getPropertyValue: jest.fn(),
  marginTop: 0,
}));

const hasPageBreak = (elements) => {
  let hasBreak = false;
  Array.prototype.forEach.call(elements, (element) => {
    hasBreak = hasBreak || element.style._values['page-break-before'] === 'always';
  });
  return hasBreak;
};

describe('PDF formatter', () => {
  it('exists', () => {
    expect(PDFFormatter).not.toBe(undefined);
  });

  describe('adds page breaks', () => {
    it('should not add a page break if the sunm of the heights of all the children is smaller than an A4', () => {
      const smallReport = require('./mocks/smallReport').default; // eslint-disable-line global-require
      const formatter = new PDFFormatter(smallReport);
      formatter.formatPage();
      expect(hasPageBreak(smallReport.children)).toBeFalsy();
    });

    it('should add a page break between two elements if the sum of their heights is greater than an A4', () => {
      const reportWithPageBreak = require('./mocks/reportWithPageBreak').default; // eslint-disable-line global-require
      const formatter = new PDFFormatter(reportWithPageBreak);
      formatter.formatPage();
      expect(hasPageBreak(reportWithPageBreak.children)).toBeTruthy();
    });

    it('should break down the top posts table into multiple pages if it is larger than an A4', () => {
      const fullReport = require('./mocks/fullReport').default; // eslint-disable-line global-require
      const formatter = new PDFFormatter(fullReport);
      formatter.formatPage();
      expect(hasPageBreak(fullReport.getElementsByTagName('li'))).toBeTruthy();
    });
  });
});
