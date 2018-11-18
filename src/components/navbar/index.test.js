import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './index';
import toJson from 'enzyme-to-json';

describe('<Logo />', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<Navbar  />);
  });

  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders the logo and src', () => {
    const navBar = wrapper.find('.nav-bar');
    expect(navBar).toHaveLength(1);
  });

});
