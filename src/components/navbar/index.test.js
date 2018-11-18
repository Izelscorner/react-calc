import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './index';
import toJson from 'enzyme-to-json';

describe('<Logo />', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<Navbar> <ul><li>Home</li></ul> </Navbar>);
  });

  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders the navbar and src', () => {
    const navBar = wrapper.find('.nav-bar');
    expect(navBar).toHaveLength(1); 
  });

  it('renders the navbar and children', () => {
    const navBarListItems = wrapper.find('ul').find('li');
    expect(navBarListItems).toHaveLength(1); 
    expect(navBarListItems.first().text()).toEqual("Home"); 
  });

});
