import React from 'react';
import { mount } from 'enzyme';
import Index from './index';
import toJson from 'enzyme-to-json';
import ButtonList from './controls/buttonList'
import Display from './controls/display'

describe('<Index />', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = mount(<Index />);
  });

  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('render button list ', () => {
    let buttonList = wrapper.find(ButtonList);
    expect(buttonList).toHaveLength(1);
  });

  it('render display ', () => {
    let display = wrapper.find(Display);
    expect(display).toHaveLength(1);
  });

  it('check initial state value', () => {
    const state = wrapper.state();
    expect(state.outcome).toEqual(null);
    expect(state.current).toEqual(null);
    expect(state.operator).toEqual(null);
  });

});
