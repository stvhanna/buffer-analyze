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

  it('formatWrapper prevents page breaks after the main content', () => {
    const wrapper = require('./mocks/smallReport').default; // eslint-disable-line global-require
    PDFFormatter.formatWrapper(wrapper);
    expect(wrapper.style._values.border).toBe('1px solid white');
    expect(wrapper.style._values.height).toBe('99%');
    expect(wrapper.style._values['page-break-before']).toBe('avoid');
    expect(wrapper.style._values['page-break-after']).toBe('avoid');
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
  });
});
