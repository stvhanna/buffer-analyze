import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import AudienceChartContainer, {
  reducer,
  actions,
  actionTypes,
  middleware,
} from './index';
import AudienceChart from './components/AudienceChart';
import mockProfiles from './mocks/profiles';

configure({ adapter: new Adapter() });
describe('AudienceChartContainer', () => {
  let state = {};
  beforeEach(() => {
    state = {
      audience: {
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

    const component = shallow(<AudienceChartContainer
      store={store}
    />);
    expect(component.find(AudienceChart).length)
      .toBe(1);
  });

  it('should dispatch', () => {
    const mockStore = configureMockStore();
    const store = mockStore(state);

    const component = shallow(<AudienceChartContainer
      store={store}
    />);

    expect(component.props().openPrimaryMetricDropdown()).toEqual({
      type: `audience_${actionTypes.OPEN_PRIMARY_DROPDOWN}`,
    });
    expect(component.props().closePrimaryMetricDropdown()).toEqual({
      type: `audience_${actionTypes.CLOSE_PRIMARY_DROPDOWN}`,
    });
    expect(component.props().openSecondaryMetricDropdown()).toEqual({
      type: `audience_${actionTypes.OPEN_SECONDARY_DROPDOWN}`,
    });
    expect(component.props().closeSecondaryMetricDropdown()).toEqual({
      type: `audience_${actionTypes.CLOSE_SECONDARY_DROPDOWN}`,
    });
    expect(component.props().selectPrimaryMetric('foo')).toEqual({
      metricIndex: 0,
      selectedMetricLabel: 'foo',
      type: `audience_${actionTypes.SELECT_CUSTOM_METRIC}`,
    });
    expect(component.props().selectSecondaryMetric('foo')).toEqual({
      metricIndex: 1,
      selectedMetricLabel: 'foo',
      type: `audience_${actionTypes.SELECT_CUSTOM_METRIC}`,
    });
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
