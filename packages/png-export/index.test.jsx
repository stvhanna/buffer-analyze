import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import PngExport, {
  reducer,
  actions,
  actionTypes,
  middleware,
} from './index';
import ExportButton from './components/ExportButton';

const storeFake = state => ({
  default: () => {},
  subscribe: () => {},
  dispatch: () => {},
  getState: () => ({ ...state }),
});

describe('PngExport', () => {
  it('should render', () => {
    const store = storeFake({
      exportToPNG: {
        exporting: false,
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <PngExport />
      </Provider>,
    );
    expect(wrapper.find(ExportButton).length)
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

  it('exportToPNG should call the exportToPNG action with the filename prop', () => {
    const store = {
      dispatch: jest.fn(),
      getState: jest.fn(() => ({
        exportToPNG: {},
      })),
    };
    const component = shallow(<PngExport filename="overview" store={store} />);

    component.props().exportToPNG();
    expect(store.dispatch).toHaveBeenCalledWith(actions.exportToPNG('overview'));
  });
});
