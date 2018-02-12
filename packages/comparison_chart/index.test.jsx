import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import ChartWrapper from './components/ChartWrapper';
import ComparisonChartContainer, {
  reducer,
  actionTypes,
  middleware,
  Chart,
  Title,
} from './index';

import mockProfiles from './mocks/profiles';

configure({ adapter: new Adapter() });
describe('ComparisonChartContainer', () => {
  let state = {};
  beforeEach(() => {
    state = {
      comparison: {
        metrics: { audience: [] },
      },
      profiles: {
        profiles: mockProfiles,
      },
      multiProfileSelector: {
        selectedProfiles: mockProfiles,
      },
    };
  });
  it('should render', () => {
    const mockStore = configureMockStore();
    const store = mockStore(state);
    const component = shallow(
      <ComparisonChartContainer
        store={store}
        metricKey="audience"
      />);
    expect(component.find(ChartWrapper).length)
      .toBe(1);
  });

  it('should export reducer', () => {
    expect(reducer)
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

  it('should export chart', () => {
    expect(Chart)
      .toBeDefined();
  });

  it('should export Title', () => {
    expect(Title)
      .toBeDefined();
  });
});
