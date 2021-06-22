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
  const totalPrice = () => {
    const price = props.item.map((e) => {
      const itemPrice = Number(e.price);
      const itemNum = e.count;
      const price = itemPrice * itemNum;
      return price;
    });
    const TotalPrice = price.reduce((a, b) => a + b, 0);
    return TotalPrice;
  };

  console.log(state);
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <span>Main Dish </span>
        </div>
        <div className="col-3">
          <span>Price </span>
        </div>
        <div className="col-3">
          {" "}
          <span>Count </span>
        </div>
        <div className="row">
          {props.item.map((oneItem) => {
            return (
              <div className="row">
                {" "}
                <div className="col-3">{oneItem.name}</div>{" "}
                <div className="col-3">{oneItem.price}</div>{" "}
                <div className="col-3">{oneItem.count}</div>{" "}
                <div className="col-3">
                  {" "}
                  <span className={getClasses()}></span>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => props.increment(oneItem)}
                  >
                    +
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => props.decrement(oneItem)}
                  >
                    -
                  </button>
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => props.delete(oneItem)}
                  >
                    <i className="fas fa-trash m-2"></i>
                  </span>
                </div>{" "}
              </div>
            );
          })}
        </div>
      </div>
      <div className="chosen-item text-center">
        <Link to="/Check-Out" onClick={() => setstate(true)}>
          <i className="fas fa-shopping-cart"></i>
          <span className="bg bg-primary">{countItem()}</span>
        </Link>
      </div>
      {state ? (
        <div className="total-price text-center">
          <span>
            {" "}
            Total Price = <span className="bg ">{`${totalPrice()} $`}</span>
          </span>
        </div>
      ) : (
        ""
      )}
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
