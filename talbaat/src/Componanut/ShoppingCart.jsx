import React from "react";
import { connect } from "react-redux";

function ShoppingCart(props) {
  //   const getClasses = () => {
  //     return menu.count == 0
  //       ? "badge bg-warning text-dark m-2"
  //       : "badge bg-primary m-2";
  //   };
  console.log(props.details);
  return (
    <h3>Ji</h3>

    // <div className="container">
    //   <div className="row">
    //     <div className="col-2">
    //       <span>Main Dish </span>
    //     </div>
    //     <div className="col-2">
    //       <span>Price </span>
    //     </div>
    //     <div className="col">
    //       <span className={getClasses()}>{menu.count}</span>
    //       <button className="btn btn-primary btn-sm">+</button>
    //       <span style={{ cursor: "pointer" }}>
    //         <i className="fas fa-trash m-2"></i>
    //       </span>
    //     </div>
    //   </div>
    // </div>
  );
}
const mapStateToProps = (state) => {
  return {
    item: state.shopping,
  };
};

export default connect(mapStateToProps)(ShoppingCart);
