import React, { Component } from "react";
import Cart from "./Cart";
import axios from "axios";
import { connect } from "react-redux";
import "./Menu.css";
import { Link } from "react-router-dom";

class Menu extends Component {
  state = {};

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
        <div className="chosen-item text-center">
          <div className="heading">
            <h3>Select Items</h3>
          </div>
          <div className="cartItems">
            <Link to="/Cart">
              {" "}
              <i className="fas fa-shopping-cart"></i>
            </Link>
            <span className="bg bg-primary">{this.props.item.length}</span>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <p>Main Dish</p>
          </div>
          <div className="col-4">
            <p> Price</p>{" "}
          </div>
          <div className="col-4">
            <p> Cart</p>{" "}
          </div>
          {this.props.menu.mainDishes.map((detalis) => {
            return (
              <Cart
                key={detalis.id}
                detalis={detalis}
                changeInCart={this.props.changeInCart}
                sendData={this.sendData}
              />
            );
          })}
        </div>
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
