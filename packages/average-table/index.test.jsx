import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import AverageTable, {
  reducer,
  actions,
  actionTypes,
  middleware,
} from './index';
import AverageTable from './components/AverageTable';

const storeFake = state => ({
  default: () => {},
  subscribe: () => {},
  dispatch: () => {},
  getState: () => ({ ...state }),
});

describe('AverageTable', () => {
  it('should render', () => {
    const store = storeFake({
    });
    const wrapper = mount(
      <Provider store={store}>
        <AverageTable />
      </Provider>,
    );
    expect(wrapper.find(AverageTable).length)
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
