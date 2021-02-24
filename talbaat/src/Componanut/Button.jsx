import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
  state = {};
  render() {
    return <button className="btn All-btns m-3">{this.props.text}</button>;
  }
}

export default Button;
