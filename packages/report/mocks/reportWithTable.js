import { JSDOM } from 'jsdom';

const { document } = (new JSDOM(`
  <div id="report-page">
    <div>Title</div>
    <div>
        <div>Title</div>
        <div>
          <ol>
            <li></li>
            <li></li>
            <li></li>
          </ol>
        </div>
    </div>
  </div>
`)).window;
const page = document.getElementById('report-page');
Object.defineProperty(Object.getPrototypeOf(page), 'clientHeight', {
  get: () => 800,
  configurable: true,
});

const li = document.getElementsByTagName('li')[0];
Object.defineProperty(Object.getPrototypeOf(li), 'clientHeight', {
  get: () => 600,
  configurable: true,
});

export default page;
