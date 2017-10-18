import React from 'react';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import AddReport, {
  reducer,
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
    });
    const wrapper = mount(
      <Provider store={store}>
        <AddReport />
      </Provider>,
    );
    expect(wrapper.find(AddReportComponent).length)
      .toBe(1);
  });

  xit('should export reducer', () => {
    expect(reducer)
      .toBeDefined();
  });

  xit('should export actions', () => {
    expect(actions)
      .toBeDefined();
  });

  xit('should export actionTypes', () => {
    expect(actionTypes)
      .toBeDefined();
  });

  xit('should export middleware', () => {
    expect(middleware)
      .toBeDefined();
  });
});
