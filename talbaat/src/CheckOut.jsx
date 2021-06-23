import React, { Component } from "react";
import ShoppingCart from "./Componanut/ShoppingCart";
import {
  deleteItem,
  decreaseItem,
  IncreaseItem,
} from "./Componanut/Redux/CountActions";
import { connect } from "react-redux";
class CheckOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: false,
    };
  }
  componentDidMount = () => {
    this.setState({ state: true });
  };
  totalPrice = () => {
    const price = this.props.item.map((e) => {
      const itemPrice = Number(e.price);
      const itemNum = e.count;
      const price = itemPrice * itemNum;
      return price;
    });
    const TotalPrice = price.reduce((a, b) => a + b, 0);
    return TotalPrice;
  };
  render() {
    return (
      <div>
        <ShoppingCart />
        {this.state ? (
          <div className="total-price ">
            <span>
              {" "}
              Total Price ={" "}
              <span className="bg bg-primary lastPrice ">{`${this.totalPrice()} $`}</span>
            </span>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
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
export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);
