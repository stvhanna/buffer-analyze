const PDF_HEIGHT = 1122; // 842 pt to px

class PDFFormatter {
  currentPageHeight = 0;

  needsPageBreak() {
    return this.currentPageHeight >= PDF_HEIGHT;
  }

  addToCurrentPage(element) {
    this.currentPageHeight += element.clientHeight;
  }

  formatPage() {
    const modules = document.getElementById('report-page').children;
    Array.prototype.forEach.call(modules, (module) => {
      this.addToCurrentPage(module);
      if (this.needsPageBreak()) {
        this.addPageBreak(module);
      }
    });
  }

  static canBeBrokenDownIntoMultiplePages (element) {
    return element.getElementsByTagName('aside').length > 0;
  }

  removeFromCurrentPage(element) {
    this.currentPageHeight -= element.clientHeight;
  }

  addHeaderToCurrentPage(title, subtitle) {
    this.currentPageHeight += title.clientHeight + subtitle.clientHeight;
  }

  addNewPage(element) {
    element.style.setProperty('page-break-before', 'always');
    this.currentPageHeight = element.clientHeight;
  }

  addPageBreak(element) {
    if (PDFFormatter.canBeBrokenDownIntoMultiplePages(element)) {
      const [title, subtitle, list] = element.children;
      this.removeFromCurrentPage(element);
      this.addHeaderToCurrentPage(title, subtitle);
      this.breakIntoPages(list.getElementsByTagName('ul')[0]);
    } else {
      this.addNewPage(element);
    }
  }

  static addBorder(element) {
    const color = getComputedStyle(element).getPropertyValue('border-bottom-color');
    element.style.setProperty('border-top-color', color);
    element.style.setProperty('border-top-width', '1px');
    element.style.setProperty('border-top-style', 'solid');
    element.style.setProperty('margin-top', '2.8rem');
  }

  breakIntoPages(items) {
    Array.prototype.forEach.call(items, (li) => {
      this.addToCurrentPage(li);
      if (this.needsPageBreak()) {
        this.addNewPage(li);
        PDFFormatter.addBorder(li);
      }
    });
  }
}

export default PDFFormatter;
