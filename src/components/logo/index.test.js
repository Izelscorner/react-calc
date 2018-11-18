import React from 'react';
import { shallow } from 'enzyme';
import Logo from './index';
import toJson from 'enzyme-to-json';

describe('<Logo />', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<Logo url={"test"} />);
  });

  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders the logo and src', () => {
    const img = wrapper.find('img');
    expect(img).toHaveLength(1);
    expect(img.prop('src')).toEqual('test');
  });

});
