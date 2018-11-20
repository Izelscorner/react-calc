import React, { Component } from 'react';
import "./display.css";
export class Display extends Component {
  constructor() {
    super();
    this.labelRef = React.createRef();
  }

  componentDidUpdate(prevProps) {
    //If same display prop comes in create a refreshing effect.
    if(this.props.display === prevProps.display)  {
      this.labelRef.current.style.visibility = 'hidden';
      setTimeout(() => this.labelRef.current.style.visibility = 'visible', 100);
    }
  }

  render() {
    return (
        <div className="display">
           <div className="display-branding">{this.props.children}</div> 
          <label ref={this.labelRef} >{this.props.display}</label>
        </div> 

    )
  }
}

export default Display
