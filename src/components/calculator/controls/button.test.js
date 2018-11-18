import React from 'react';
import { shallow } from 'enzyme';
import Button from './button';
import toJson from 'enzyme-to-json';

describe('<Button />', () => {
  let wrapper;
  let handleEvent;

  beforeAll(() => {
    handleEvent = jest.fn();
    wrapper = shallow(<Button handleEvent={handleEvent} value="1" />);
  });

  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders the button and value', () => {
    const button = wrapper.find('button');
    expect(button).toHaveLength(1);
    expect(button.text()).toEqual('1');
  });

  it('renders orange button and value', () => {
    const wrapper = shallow(<Button additionalClassName="button--orange" handleEvent={handleEvent} value="1" />);
    expect(wrapper.hasClass('button--orange')).toEqual(true);
    expect(wrapper.hasClass('button')).toEqual(true);
  });

  it('calls handleEvent on button click', function () {
    const button = wrapper.find('button');
    expect(button).toHaveLength(1);
    button.simulate('click');
    expect(handleEvent).toHaveBeenCalledWith("1");
  });
});
