import React, { Component } from "react";
import { Link } from "react-router-dom";

class Rstaruant extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col">
            <Link to={`/menus/${this.props.id}`} className="mx-3">
              {this.props.name}
            </Link>
          </div>
          <div className="col">
            <span>{this.props.cusisines}</span>
          </div>
          <div className="col">
            <span className="mx-3">{this.props.area}</span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Rstaruant;
