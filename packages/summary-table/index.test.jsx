import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import Summary, {
  reducer,
  actions,
  actionTypes,
  middleware,
} from './index';
import SummaryTable from './components/SummaryTable';

jest.mock('@bufferapp/add-report');

configure({ adapter: new Adapter() });
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
      i18n: {
        translations: {},
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
