import React, { PureComponent } from 'react'
import "./button.css"
export class Button extends PureComponent {
  handleEvent = () => {
      this.props.handleEvent(this.props.value);
  }  
  render() {
    return (
        <button className="button" onClick={this.handleEvent}>{this.props.value}</button>
    )
  }
}

export default Button
