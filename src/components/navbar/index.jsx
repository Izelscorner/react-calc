import React, { PureComponent } from 'react';
import './index.css';

export default class navbar extends PureComponent {
  render() {
    return (
        <nav className="nav-bar">
            {this.props.children}
        </nav>
    )
  }
}
