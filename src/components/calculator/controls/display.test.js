import React from 'react';
import { shallow } from 'enzyme';
import Display from './display';
import toJson from 'enzyme-to-json';

describe('<Display />', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<Display display={10}  />);
  });

  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders the label and value', () => {
    const label = wrapper.find("label");
    expect(label.text()).toEqual("10");
  });

});
