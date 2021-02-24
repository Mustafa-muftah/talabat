import React, { Component } from "react";
import "./HeaderText.css";

class HeaderText extends Component {
  state = {};
  render() {
    return <h1 className="Header-text my-4 ">{this.props.text}</h1>;
  }
}

export default HeaderText;
