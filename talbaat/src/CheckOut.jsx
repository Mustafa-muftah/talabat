import React, { Component } from "react";
import ShoppingCart from "./Componanut/ShoppingCart";
import { connect } from "react-redux";

class CheckOut extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //   totalPrice = () => {
  //     const price = this.props.item.map((e) => {
  //       const itemPrice = Number(e.price);
  //       const itemNum = e.count;
  //       const price = itemPrice * itemNum;
  //       return price;
  //     });
  //     const TotalPrice = price.reduce((a, b) => a + b, 0);
  //     return TotalPrice;
  //   };

  render() {
    return (
      <div>
        <ShoppingCart />
        <div className="total-price ">
          <span>
            {" "}
            Total Price ={" "}
            <span className="bg bg-primary lastPrice ">
              {` ${this.props.Price.totalPrice} $`}
            </span>
          </span>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    Price: state.Price,
  };
};
const mapDispatchToProps = () => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);
