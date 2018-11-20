import React, { PureComponent } from 'react';
import "./button.css";
export class Button extends PureComponent {
  handleEvent = (e) => {
      this.props.handleEvent(this.props.value);
      e.target.blur();
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
        <button className={this.renderClassName()} onClick={(e) => this.handleEvent(e)}>{this.props.value}</button>
    )
  }
}

export default Button
