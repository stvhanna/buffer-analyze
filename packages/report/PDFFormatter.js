const PDF_HEIGHT = 1404; // 11.7 in to px at 120 dpi
const PAGE_MARGIN = 84; // 0.7 in to px at 120 dpi

class PDFFormatter {
  constructor(page) {
    this.currentPageHeight = 0;
    this.modules = page.children;
  }

  formatPage() {
    Array.prototype.forEach.call(this.modules, (module) => {
      this.addToCurrentPage(module);
      if (this.needsPageBreak()) {
        this.addPageBreak(module);
      }
    });
  }

  static formatWrapper(wrapper) {
    wrapper.style.setProperty('border', '1px solid white');
    wrapper.style.setProperty('height', '99%');
    wrapper.style.setProperty('page-break-after', 'avoid');
    wrapper.style.setProperty('page-break-before', 'avoid');
  }

  needsPageBreak() {
    return this.currentPageHeight >= (PDF_HEIGHT - PAGE_MARGIN);
  }

  addToCurrentPage(element) {
    this.currentPageHeight += element.clientHeight;
    this.currentPageHeight += parseInt(window.getComputedStyle(element).marginTop, 10);
  }

  removeFromCurrentPage(element) {
    this.currentPageHeight -= element.clientHeight;
    this.currentPageHeight -= parseInt(window.getComputedStyle(element).marginTop, 10);
  }

  static canBeBrokenDownIntoMultiplePages (element) {
    return element.getElementsByTagName('ol').length > 0;
  }

  addPageBreak(element) {
    if (PDFFormatter.canBeBrokenDownIntoMultiplePages(element)) {
      this.removeFromCurrentPage(element);
      const [title, content] = element.children;
      const [list] = content.children;
      const listItems = list.getElementsByTagName('li');
      this.breakTableIntoPages(listItems, title);
    } else {
      this.addNewPage(element);
    }
  }

  addNewPage(element) {
    element.style.setProperty('page-break-before', 'always');
    this.currentPageHeight = element.clientHeight;
  }

  breakTableIntoPages(listItems, title) {
    this.addToCurrentPage(title);
    Array.prototype.forEach.call(listItems, (li, index) => {
      this.addToCurrentPage(li);
      const needsPageBreak = this.needsPageBreak();

      // We don't want to send the first element to a new page
      // if that is needed we should break before the title.
      if (needsPageBreak && index === 0) {
        this.addNewPage(title);
        this.addToCurrentPage(li);
      } else if (needsPageBreak) {
        this.addNewPage(li);
        PDFFormatter.addBorder(li);
      }
    });
  }

  static addBorder(element) {
    const color = getComputedStyle(element).getPropertyValue('border-bottom-color');
    element.style.setProperty('border-top-color', color);
    element.style.setProperty('border-top-width', '1px');
    element.style.setProperty('border-top-style', 'dotted');
    element.style.setProperty('margin-top', '2.8rem');
  }
}

export default PDFFormatter;
