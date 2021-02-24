import React, { Component } from "react";
import "./DownloadButton.css";

class DownloadButton extends Component {
  state = {};
  render() {
    return (
      <a className="DownloadButton mx-1">
        <img
          src={this.props.src}
          alt=""
          style={{ width: `${this.props.width}`, cursor: "pointer" }}
        />
      </a>
    );
  }
}

export default DownloadButton;
