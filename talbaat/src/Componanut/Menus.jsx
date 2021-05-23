import React, { Component } from "react";
import Menu from "./Menu";
import { connect } from "react-redux";
import { get_Menu } from "./Redux/CountActions";

class Menus extends Component {
  state = {
    menu: null,
  };
  // getMenu = async () => {
  //   const resId = window.location.pathname.split("/")[2]; //1- get last sigment of url
  //   console.log(resId);
  //   const { data } = await axios.get(`http://localhost:4000/menus/${resId}`);
  //   this.setState({ menu: data });
  // };

  getMenu = async () => {
    const resId = this.props.match.params.id;
    this.props.getRestMenu(resId);
    // const { data } = await axios.get(`http://localhost:3005${resId}`);
    // this.setState({ menu: data });
  };
  componentDidMount() {
    this.getMenu();
  }
  changeInCart = () => {
    this.props.history.push(`/Cart`);
  };

  render() {
    //componanutdidmount
    //1- get last sigment of url
    //2- send axios request to backend with res id to get the menu
    //3-update compenet state with menu
    console.log(this.props.menu);
    return (
      <React.Fragment>
        {/* {this.props.menu && (
          <Menu menu={this.props.menu} changeInCart={this.changeInCart} />
        )} */}
        {this.props.Loading ? (
          <h2>Loading</h2>
        ) : this.props.error ? (
          <h2>{this.props.error}</h2>
        ) : (
          this.props.menu &&
          !this.props.loading && (
            <Menu menu={this.props.menu} changeInCart={this.changeInCart} />
          )
        )}
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    menu: state.menu.menu,
    loading: state.menu.loading,
    error: state.menu.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getRestMenu: (id) => dispatch(get_Menu(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Menus);
