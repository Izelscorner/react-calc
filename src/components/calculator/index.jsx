import React, { Component } from 'react'
import Calculate from './services/calculate'
import ButtonList from './controls/buttonList'
import Display from './controls/display'

export default class Calculator extends Component {
  constructor() {
    super()
    this.calculate = new Calculate();
    this.state = this.calculate.result;
  }
  
  handleEvent = (value) => {
    if(value === 'AC') {
      this.calculate.reset();
    } else {
      this.calculate.process(value);
    }

    this.setState(this.calculate.result);
  }
  
  render() {
    return (
      <div className="calculator">
        <Display display={this.state.current || this.state.outcome || 0} >
          {this.props.children}
        </Display>
        <ButtonList handleEvent={this.handleEvent}  />
      </div>
    )
  }
}
