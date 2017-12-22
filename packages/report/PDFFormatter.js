const PDF_HEIGHT = 1122; // 842 pt to px

class PDFFormatter {
  currentPageHeight = 0;

  formatPage() {
    const modules = document.getElementById('report-page').children;
    Array.prototype.forEach.call(modules, (module) => {
      this.addToCurrentPage(module);
      if (this.needsPageBreak()) {
        this.addPageBreak(module);
      }
    });
  }

  needsPageBreak() {
    return this.currentPageHeight >= PDF_HEIGHT;
  }

  addToCurrentPage(element) {
    this.currentPageHeight += element.clientHeight;
  }

  removeFromCurrentPage(element) {
    this.currentPageHeight -= element.clientHeight;
  }

  static canBeBrokenDownIntoMultiplePages (element) {
    return element.getElementsByTagName('aside').length > 0;
  }

  addPageBreak(element) {
    if (PDFFormatter.canBeBrokenDownIntoMultiplePages(element)) {
      const [title, subtitle, list] = element.children;
      this.removeFromCurrentPage(element);
      this.addToCurrentPage(title);
      this.addToCurrentPage(subtitle);
      const listItems = list.getElementsByTagName('ul')[0].children;
      this.breakIntoPages(listItems);
    } else {
      this.addNewPage(element);
    }
  }

  addNewPage(element) {
    element.style.setProperty('page-break-before', 'always');
    this.currentPageHeight = element.clientHeight;
  }

  breakIntoPages(listItems) {
    Array.prototype.forEach.call(listItems, (li) => {
      this.addToCurrentPage(li);
      if (this.needsPageBreak()) {
        this.addNewPage(li);
        PDFFormatter.addBorder(li);
      }
    });
  }

  static addBorder(element) {
    const color = getComputedStyle(element).getPropertyValue('border-bottom-color');
    element.style.setProperty('border-top-color', color);
    element.style.setProperty('border-top-width', '1px');
    element.style.setProperty('border-top-style', 'solid');
    element.style.setProperty('margin-top', '2.8rem');
  }
}

export default PDFFormatter;
