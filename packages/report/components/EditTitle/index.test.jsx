import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import EditTitle from './index';

configure({ adapter: new Adapter() });
describe('EditTitle', () => {
  it('should update the name on change', () => {
    const component = shallow(<EditTitle name="foo" saveChanges={() => {}} />);
    const input = component.children();
    input.simulate('change', {
      target: { value: 'bar' },
    });
    expect(component.state('name')).toBe('bar');
  });

  it('should save the name on blur', () => {
    const saveChanges = jest.fn();
    const component = shallow(<EditTitle name="foo" saveChanges={saveChanges} />);
    const input = component.children();
    input.simulate('change', {
      target: { value: 'bar' },
    });
    input.simulate('blur');
    expect(saveChanges).toHaveBeenCalledWith('bar');
  });

  it('should save the name on submit', () => {
    const saveChanges = jest.fn();
    const component = shallow(<EditTitle name="foo" saveChanges={saveChanges} />);
    const input = component.children();
    input.simulate('change', {
      target: { value: 'bar' },
    });
    component.simulate('submit');
    expect(saveChanges).toHaveBeenCalledWith('bar');
  });
});
