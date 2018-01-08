import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import PdfExport, {
  actions,
  actionTypes,
  middleware,
} from './index';
import PDFExportButton from './components/PDFExportButton';

configure({ adapter: new Adapter() });
const storeFake = state => ({
  default: () => {},
  subscribe: () => {},
  dispatch: () => {},
  getState: () => ({ ...state }),
});

describe('PdfExport', () => {
  it('should render', () => {
    const store = storeFake({
    });
    const wrapper = mount(
      <Provider store={store}>
        <PdfExport />
      </Provider>,
    );
    expect(wrapper.find(PDFExportButton).length)
      .toBe(1);
  });

  it('should export actions', () => {
    expect(actions)
      .toBeDefined();
  });

  it('should export actionTypes', () => {
    expect(actionTypes)
      .toBeDefined();
  });

  it('should export middleware', () => {
    expect(middleware)
      .toBeDefined();
  });
});
