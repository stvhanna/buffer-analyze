import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import Summary, {
  reducer,
  actions,
  actionTypes,
  middleware,
} from './index';
import SummaryTable from './components/SummaryTable';

const storeFake = state => ({
  default: () => {},
  subscribe: () => {},
  dispatch: () => {},
  getState: () => ({ ...state }),
});

describe('SummaryTable', () => {
  it('should render', () => {
    const store = storeFake({
      summary: {
        loading: false,
        metrics: [],
      },
      date: {},
    });
    const wrapper = mount(
      <Provider store={store}>
        <Summary profileService="twitter" />
      </Provider>,
    );
    expect(wrapper.find(SummaryTable).length)
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
