import React, { PureComponent } from "react";
import Button from "./button";
import "./buttonList.css"
export class ButtonList extends PureComponent {
    
    handleEvent = (value) => {
       this.props.handleEvent(value);
   } 
  render() {
    return (
      <div className="button-list">
        <div className="button-list__row">
          <Button value="7" handleEvent={this.handleEvent} />
          <Button value="8" handleEvent={this.handleEvent} />
          <Button value="9" handleEvent={this.handleEvent} />
          <Button value="*" handleEvent={this.handleEvent} />
        </div>
        <div className="button-list__row">
          <Button value="4" handleEvent={this.handleEvent} />
          <Button value="5" handleEvent={this.handleEvent} />
          <Button value="6" handleEvent={this.handleEvent} />
          <Button value="-" handleEvent={this.handleEvent} />
        </div>
        <div className="button-list__row">
          <Button value="1" handleEvent={this.handleEvent} />
          <Button value="2" handleEvent={this.handleEvent} />
          <Button value="3" handleEvent={this.handleEvent} />
          <Button value="+" handleEvent={this.handleEvent} />
        </div>
        <div className="button-list__row">
          <Button value="0" handleEvent={this.handleEvent} />
          <Button value="." handleEvent={this.handleEvent} />
          <Button value="=" handleEvent={this.handleEvent} />
          <Button value="/"  handleEvent={this.handleEvent} />
        </div>
        <div className="button-list__row">
          <Button value="AC" handleEvent={this.handleEvent} />
        </div>
      </div>
    );
  }
}

export default ButtonList;
