import React, { Component } from "react";
import Cart from "./Cart";
import axios from "axios";
import { connect } from "react-redux";

class Menu extends Component {
  state = {};

  chosenItem = (item) => {
    console.log(item);
  };

  sendData = () => {
    // let customerOrder = {
    //   id: this.props.menu.id,
    //   mainDishe: this.props.menu.mainDishes,
    //   price: this.props.menu.price,
    //   count: this.props.menu.count,
    // };
    // axios.post("http://localhost:3005/menus", customerOrder);
    console.log("click");
  };
  render() {
    console.log();
    return (
      <div className="rest-menu">
        <div className="row">
          <div className="col-md-4 col-xs-12">
            <p>Main Dish</p>
          </div>
          <div className="col-md-4 col-xs-12">
            <p> Price</p>{" "}
          </div>
          <div className="col-md-4 col-xs-12">
            <p> Cart</p>{" "}
          </div>
          {this.props.menu.mainDishes.map((detalis) => {
            return (
              <Cart
                key={detalis.id}
                detalis={detalis}
                changeInCart={this.props.changeInCart}
                sendData={this.sendData}
                chosenItem={this.chosenItem}
              />
            );
          })}
        </div>
        <hr></hr>
        {console.log(this.props.menu.mainDishes)}
        <p>The chosen Item {this.props.item}</p>
        {console.log(this.props.item)}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    item: state.shopping,
  };
};

export default connect(mapStateToProps)(Menu);
