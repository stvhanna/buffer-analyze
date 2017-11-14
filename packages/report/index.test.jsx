import React from 'react';
import { mount, configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
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
  const state = {
    date: {},
    report: {
      name: 'A report',
      charts: [],
    },
  };
  it('should render', () => {
    const store = storeFake(state);
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

  it('edit name should dispatch the editName', () => {
    const mockStore = configureMockStore();
    const store = mockStore(state);

    const component = shallow(<Report
      store={store}
    />);

    expect(component.props().editName()).toEqual(actions.editName());
  });

  it('save changes should dispatch saveChanges', () => {
    const mockStore = configureMockStore();
    const store = mockStore(state);

    const component = shallow(<Report
      store={store}
    />);

    expect(component.props().saveChanges('a new name!')).toEqual(actions.saveChanges('a new name!'));
  });
});
