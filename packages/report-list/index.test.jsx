import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import ReportList, {
  reducer,
  actions,
  actionTypes,
  middleware,
} from './index';
import ReportListComponent from './components/ReportList';

configure({ adapter: new Adapter() });
const storeFake = state => ({
  default: () => {},
  subscribe: () => {},
  dispatch: () => {},
  getState: () => ({ ...state }),
});

describe('ReportList', () => {
  it('should render', () => {
    const store = storeFake({
      reportList: {
        reports: [],
        loading: true,
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <ReportList />
      </Provider>,
    );
    expect(wrapper.find(ReportListComponent).length)
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
