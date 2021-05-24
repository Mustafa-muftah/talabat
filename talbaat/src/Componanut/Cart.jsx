import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
import { connect } from "react-redux";
import ShoppingReducer from "./Redux/ShoppingReducer";
import { addToCart, add_to_cart } from "./Redux/CountActions";

const Cart = (props) => {
  return (
    <div className="row">
      <div className="col-md-4">{props.detalis.dishname}</div>
      <div className="col-md-4">{props.detalis.price}</div>
      <div className="col-md-4">
        <i
          style={{ cursor: "pointer" }}
          className="fas fa-cart-plus"
          onClick={() => {
            props.chosenItem(props.detalis);
            props.addToCart(props.detalis.dishname);
          }}
        ></i>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => dispatch(add_to_cart(item)),
  };
};

export default connect(() => {
  return {};
}, mapDispatchToProps)(Cart);
