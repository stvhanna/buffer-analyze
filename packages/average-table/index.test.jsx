import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import AverageTableContainer, {
  reducer,
  actions,
  actionTypes,
  middleware,
} from './index';
import AverageTable from './components/AverageTable';

describe('AverageTable', () => {
  it('should render', () => {
    const mockStore = configureMockStore();
    const state = {
      average: {
        loading: true,
        metrics: { totals: [], daily: [] },
      },
    };
    const store = mockStore(state);

    const component = shallow(<AverageTableContainer
      store={store}
    />);
    expect(component.find(AverageTable).length)
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
