import React, { Component } from 'react';
import Calculator from './calculator';
import NavBar from './navbar';
import Logo from './logo';
import logoUrl from '../img/logo.svg';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
         <NavBar>
           <Logo url={logoUrl} />
         </NavBar>
        <div className="calculator-container">
          <Calculator >
            <Logo additionalClassName="logo--small" url={logoUrl} />
          </Calculator>
        </div>
      </div>
    );
  }
}

export default App;
