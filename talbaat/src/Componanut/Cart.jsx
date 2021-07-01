import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
import { connect } from "react-redux";
import ShoppingReducer from "./Redux/ShoppingReducer";
import { addToCart, add_to_cart } from "./Redux/CountActions";

const Cart = (props) => {
  const [state, setState] = useState(false);

  return (
    <div className="row">
      <div className="col-4 item">{props.detalis.dishname}</div>
      <div className="col-4 item">{props.detalis.price}</div>
      <div className="col-4 item">
        <i
          style={{ cursor: "pointer", color: state ? "blue" : "black" }}
          className="fas fa-cart-plus cartItem"
          onClick={() => {
            setState(!state);
            props.addToCart(props.detalis);
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
