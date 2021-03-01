import React, { Component } from "react";

class Menu extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <div className="col">
          <span>{this.props.menu.mainDishes}</span>
        </div>
        <div className="col">
          <span className="mx-3">{this.props.menu.sideDishes}</span>
        </div>
      </div>
    );
  }
}

export default Menu;
