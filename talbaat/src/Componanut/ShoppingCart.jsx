import React from "react";
import { connect } from "react-redux";
import { IncreaseItem } from "./Redux/CountActions";

function ShoppingCart(props) {
  const getClasses = () => {
    return props.item.count == 0
      ? "bg bg-warning text-dark m-2"
      : "bg bg-primary m-2";
  };

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
                    onClick={props.increment}
                  >
                    +
                  </button>
                  {console.log(oneItem)}
                  <span style={{ cursor: "pointer" }}>
                    <i className="fas fa-trash m-2"></i>
                  </span>
                </div>{" "}
              </div>
            );
          })}
        </div>
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
    increment: () => dispatch(IncreaseItem()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
