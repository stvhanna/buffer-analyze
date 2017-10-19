import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import ContextualCompareContainer, {
  reducer,
  actions,
  actionTypes,
  middleware,
} from './index';
import ContextualCompare from './components/ContextualCompare';
import mockProfiles from './mocks/profiles';

configure({ adapter: new Adapter() });
describe('ContextualCompareContainer', () => {
  let state = {};
  beforeEach(() => {
    state = {
      contextual: {
        loading: true,
        metrics: { totals: [], daily: [], totalPeriodDaily: [] },
        selectedMetricLabel: '',
        visualizePreviousPeriod: false,
        dailyMode: 0,
      },
      profiles: {
        profiles: mockProfiles,
        selectedProfileId: mockProfiles[0].id,
        selectedProfileService: 'twitter',
      },
    };
  });
  it('should render', () => {
    const mockStore = configureMockStore();
    const store = mockStore(state);

    const component = shallow(<ContextualCompareContainer
      store={store}
    />);
    expect(component.find(ContextualCompare).length)
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
