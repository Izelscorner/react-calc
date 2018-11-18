import React, { PureComponent } from 'react';
import "./display.css";
export class Display extends PureComponent {
  render() {
    return (
        <div className="display">
           <div className="display-branding">{this.props.children}</div> 
          <label>{this.props.display}</label>
        </div> 

    )
  }
}

export default Display
