import React, { Component } from "react";

class Menu extends Component {
  state = {};
  render() {
    return (
      // <div className="div">
      //   <h3>Msh</h3>
      //   {console.log(this.props.menu)}
      // </div>
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
