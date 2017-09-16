import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import CompareChartContainer, {
  reducer,
  actions,
  actionTypes,
  middleware,
} from './index';
import CompareChart from './components/CompareChart';
import mockProfiles from './mocks/profiles';

describe('CompareChartContainer', () => {
  it('should render', () => {
    const mockStore = configureMockStore();
    const state = {
      compare: {
        loading: true,
        metrics: { totals: [], daily: [] },
        selectedMetricLabel: '',
        visualizePreviousPeriod: false,
      },
      profiles: {
        profiles: mockProfiles,
        selectedProfileId: mockProfiles[0].id,
      },
    };
    const store = mockStore(state);

    const component = shallow(<CompareChartContainer
      store={store}
    />);
    expect(component.find(CompareChart).length)
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
