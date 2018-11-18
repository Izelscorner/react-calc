import React, { PureComponent } from 'react'
import "./button.css"
export class Button extends PureComponent {
  handleEvent = () => {
      this.props.handleEvent(this.props.value);
  }
  renderClassName() {
    let name = 'button';
    
    if(this.props.additionalClassName) {
      name = `${name} ${this.props.additionalClassName}`;
    } 

    return name;
  }  
  render() {
    return (
        <button className={this.renderClassName()} onClick={this.handleEvent}>{this.props.value}</button>
    )
  }
}

export default Button
