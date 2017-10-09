import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import DatePickerContainer, {
  reducer,
  actions,
  actionTypes,
  middleware,
} from './index';
import DatePicker from './components/DatePicker';

configure({ adapter: new Adapter() });
const storeFake = state => ({
  default: () => {},
  subscribe: () => {},
  dispatch: () => {},
  getState: () => ({ ...state }),
});

describe('DatePicker', () => {
  it('should render', () => {
    const store = storeFake({
      date: {
        loading: true,
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <DatePickerContainer />
      </Provider>,
    );
    expect(wrapper.find(DatePicker).length)
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
