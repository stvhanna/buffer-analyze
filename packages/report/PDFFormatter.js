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
    return element.getElementsByTagName('aside').length > 0;
  }

  addPageBreak(element) {
    if (PDFFormatter.canBeBrokenDownIntoMultiplePages(element)) {
      const [title, aside] = element.children;
      const [header, list] = aside.children;
      this.removeFromCurrentPage(element);
      this.addToCurrentPage(title);
      this.addToCurrentPage(header);
      const listItems = list.children;
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
