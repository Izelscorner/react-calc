import React, { PureComponent } from 'react'
import './index.css'

export default class Logo extends PureComponent {
  renderClassName() {
    let name = 'logo';
    
    if(this.props.additionalClassName) {
      name = `${name} ${this.props.additionalClassName}`;
    } 

    return name;
  }    
  render() {
    return (
      <img  className={this.renderClassName()} src={this.props.url} alt=""/>
    )
  }
}
