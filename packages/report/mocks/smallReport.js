import { JSDOM } from 'jsdom';

const { document } = (new JSDOM(`
  <div id="report-page">
    <section></section>
    <section></section>
    <section></section>
    <section></section>
    <section></section>
  </div>
`)).window;
const page = document.getElementById('report-page');
Object.defineProperty(Object.getPrototypeOf(page), 'clientHeight', {
  get: () => 100,
  configurable: true,
});

export default page;
