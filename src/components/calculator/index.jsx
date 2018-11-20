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

  componentDidMount() {
    this.handleKeyPress();
  }

  handleKeyPress() {
    document.addEventListener('keydown', (e) => {
      e.preventDefault()
      if(e.key.match(/([0-9])?([+-/*.])?(a)?/g)[0].length > 0 || e.key === "Backspace" || e.key === "Enter") {
        this.handleEvent(e.key);
      }
    })
  }
  
  handleEvent = (value) => {
    if(value === 'AC' || value === 'a') {
      this.calculate.reset();
    } 
    else if(value === "Backspace"){
      this.calculate.deleteChar();
    } 
    else if(value === "Enter"){
      this.calculate.process("=");
    }
    else {
      this.calculate.process(value);
    }

    this.setState(this.calculate.result);
  }
  
  render() {
    return (
      <div className="calculator">
        <Display display={this.state.current || this.state.outcome || "0"} >
          {this.props.children}
        </Display>
        <ButtonList handleEvent={this.handleEvent}  />
      </div>
    )
  }
}
