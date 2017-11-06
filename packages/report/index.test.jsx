import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import Report, {
  reducer,
  actions,
  actionTypes,
  middleware,
} from './index';
import ReportComponent from './components/Report';

configure({ adapter: new Adapter() });
const storeFake = state => ({
  default: () => {},
  subscribe: () => {},
  dispatch: () => {},
  getState: () => ({ ...state }),
});

describe('Report', () => {
  it('should render', () => {
    const store = storeFake({
      date: {},
      report: {
        name: 'A report',
        charts: [],
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <Report />
      </Provider>,
    );
    expect(wrapper.find(ReportComponent).length)
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
