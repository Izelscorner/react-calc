import React, { PureComponent } from 'react'
import "./display.css"
export class Display extends PureComponent {
  render() {
    return (
        <label className="display">{this.props.display}</label>
    )
  }
}

export default Display
