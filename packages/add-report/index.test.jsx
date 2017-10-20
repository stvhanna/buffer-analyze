import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import AddReport, {
  actions,
  actionTypes,
  middleware,
} from './index';
import AddReportComponent from './components/AddReport';

configure({ adapter: new Adapter() });

const storeFake = state => ({
  default: () => {},
  subscribe: () => {},
  dispatch: () => {},
  getState: () => ({ ...state }),
});

describe('AddReport', () => {
  it('should render', () => {
    const store = storeFake({
      i18n: {
        translations: {
        },
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <AddReport />
      </Provider>,
    );
    expect(wrapper.find(AddReportComponent).length)
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
