import React from 'react';
import { mount, configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { push } from 'react-router-redux';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import ReportListContainer, {
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
  const state = {
    reportList: {
      reports: [],
      loading: true,
    },
  };
  it('should render', () => {
    const store = storeFake(state);
    const wrapper = mount(
      <Provider store={store}>
        <ReportListContainer />
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

  it('select report should dispatch a push navigation event', () => {
    const mockStore = configureMockStore();
    const store = mockStore(state);

    const component = shallow(<ReportListContainer
      store={store}
    />);

    expect(component.props().selectReport('id')).toEqual(push('/reports/id'));
  });

  it('remove report should dispatch removeReport', () => {
    const mockStore = configureMockStore();
    const store = mockStore(state);

    const component = shallow(<ReportListContainer
      store={store}
    />);

    expect(component.props().removeReport('id')).toEqual(actions.removeReport('id'));
  });
});
