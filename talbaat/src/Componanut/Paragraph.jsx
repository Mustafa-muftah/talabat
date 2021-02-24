import React, { Component } from "react";
import "./Paragraph.css";
class Paragraph extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <p className="Paragraph">{this.props.text}</p>
      </React.Fragment>
    );
  }
}

export default Paragraph;
