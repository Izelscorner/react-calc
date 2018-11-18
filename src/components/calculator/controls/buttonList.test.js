import React from 'react';
import { mount } from 'enzyme';
import ButtonList from './buttonList';
import Button from './button';
import toJson from 'enzyme-to-json';

describe('<ButtonList />', () => {
  let wrapper;
  let handleEvent;

  beforeAll(() => {
    handleEvent = jest.fn();
    wrapper = mount(<ButtonList handleEvent={handleEvent}  />);
  });

  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders the all button components', () => {
    const buttons = wrapper.find(Button);
    expect(buttons).toHaveLength(17);
  });

});
