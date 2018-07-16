import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import EditDescription from './index';

configure({ adapter: new Adapter() });
describe('EditDescription', () => {
  it('should update the description on change', () => {
    const component = shallow(<EditDescription description="foo" saveDescription={() => {}} />);
    const input = component.children();
    input.simulate('change', {
      target: { value: 'bar' },
    });
    expect(component.state('description')).toBe('bar');
  });

  it('should save the description on blur', () => {
    const saveDescription = jest.fn();
    const component = shallow(<EditDescription description="foo" saveDescription={saveDescription} />);
    const input = component.children();
    input.simulate('change', {
      target: { value: 'bar' },
    });
    input.simulate('blur');
    expect(saveDescription).toHaveBeenCalledWith('bar');
  });

  it('should save the description on submit', () => {
    const saveDescription = jest.fn();
    const component = shallow(<EditDescription description="foo" saveDescription={saveDescription} />);
    const input = component.children();
    input.simulate('change', {
      target: { value: 'bar' },
    });
    component.simulate('submit');
    expect(saveDescription).toHaveBeenCalledWith('bar');
  });
});
