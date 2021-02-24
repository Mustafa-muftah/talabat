import React, { Component } from "react";
import Button from "./Button";
import "./Card.css";

class RegisterCard extends Component {
  state = {};
  render() {
    return (
      <div className="col">
        <div className="card mb-3">
          <div className="row g-0">
            <div
              className="col-img"
              style={{ backgroundColor: `${this.props.color}` }}
            >
              <img src={this.props.src} alt="..." />
            </div>
            <div className="col">
              <div className="card-body">
                <h5 className="card-title">{this.props.text}</h5>
                <p className="card-text" style={{ width: "100%" }}>
                  {this.props.pargraph}
                </p>

                <Button text={this.props.buttonText} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterCard;
