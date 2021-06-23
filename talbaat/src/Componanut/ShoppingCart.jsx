import React, { useState } from "react";
import { connect } from "react-redux";
import { deleteItem, decreaseItem, IncreaseItem } from "./Redux/CountActions";
import { Link } from "react-router-dom";
import "./ShoppingCart.css";

function ShoppingCart(props) {
  let [state, setstate] = useState(false);

  const getClasses = () => {
    return props.item.count == 0
      ? "bg bg-warning text-dark m-2"
      : "bg bg-primary m-2";
  };
  const countItem = () => {
    const num = props.item.map((e) => {
      const num = e.count;
      return num;
    });
    const finalNum = num.reduce((a, b) => a + b, 0);
    return finalNum;
  };

  const NaviToCHeck = () => {
    props.history.push("/Check-Out");
  };

  console.log(state);
  return (
    <div className="container shopping">
      <div className="row">
        <div className="col-3 heading">
          <span>Main Dish </span>
        </div>
        <div className="col-3 heading">
          <span>Price </span>
        </div>
        <div className="col-3 heading">
          {" "}
          <span>Count </span>
        </div>
        <div className="col-3 heading">
          {" "}
          <span> </span>
        </div>
        <div className="row">
          {props.item.map((oneItem) => {
            return (
              <div className="row">
                {" "}
                <div className="col-3 oneItem">{oneItem.name}</div>{" "}
                <div className="col-3 oneItem">{oneItem.price}</div>{" "}
                <div className="col-3 oneItem">{oneItem.count}</div>{" "}
                <div className="col-3 oneItem">
                  {" "}
                  <span className={getClasses()}></span>
                  <button
                    className="btn btn-primary btn-sm mx-1"
                    onClick={() => props.increment(oneItem)}
                  >
                    +
                  </button>
                  <button
                    className="btn btn-danger btn-sm mx-1"
                    onClick={() => props.decrement(oneItem)}
                  >
                    -
                  </button>
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => props.delete(oneItem)}
                  >
                    <i className="fas fa-trash trash mx-1"></i>
                  </span>
                </div>{" "}
              </div>
            );
          })}
        </div>
      </div>
      <div className="chosed text-center">
        <i className="fas fa-shopping-cart mx-1"></i>
        <span className="bg bg-primary count mx-1">{countItem()}</span>
        <Link className="mx-1" to="/Check-Out">
          Confirm
        </Link>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    item: state.shopping,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increment: (e) => dispatch(IncreaseItem(e)),
    decrement: (e) => dispatch(decreaseItem(e)),
    delete: (e) => dispatch(deleteItem(e)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
