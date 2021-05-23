import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
import { connect } from "react-redux";
import ShoppingReducer from "./Redux/ShoppingReducer";
import { addToCart, add_to_cart } from "./Redux/CountActions";

const Cart = (props) => {
  return (
    <div className="Cart">
      <tr>
        <td>{props.detalis.dishname}</td>
        <td>{props.detalis.price}</td>{" "}
        <td>
          <i
            style={{ cursor: "pointer" }}
            className="fas fa-cart-plus"
            onClick={() => {
              props.chosenItem(props.detalis);
              props.addToCart(props.detalis);
            }}
          ></i>
        </td>
      </tr>
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
