import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import ExportPickerContainer, {
  reducer,
  actions,
  actionTypes,
  middleware,
} from './index';
import ExportPicker from './components/ExportPicker';

configure({ adapter: new Adapter() });
const storeFake = state => ({
  default: () => {},
  subscribe: () => {},
  dispatch: () => {},
  getState: () => ({ ...state }),
});

describe('ExportPicker', () => {
  it('should render', () => {
    const store = storeFake({
      exportPicker: {
        open: true,
      },
      exportToCSV: {
        exporting: false,
      },
      exportToPNG: {
        exporting: false,
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <ExportPickerContainer filename="buffer-overview-analytics" />
      </Provider>,
    );
    expect(wrapper.find(ExportPicker).length)
      .toBe(1);
  });

  it('should export reducer', () => {
    expect(reducer)
      .toBeDefined();
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
