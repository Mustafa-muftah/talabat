import React, { Component } from "react";
import Menu from "./Componanut/Menu";
import axios from "axios";

class Menus extends Component {
  state = {
    menu: null,
  };
  getMenu = async () => {
    const resId = window.location.pathname.split("/")[2]; //1- get last sigment of url
    console.log(resId);
    const { data } = await axios.get(`http://localhost:4000/menus/${resId}`);
    this.setState({ menu: data });
  };
  async componentDidMount() {
    await this.getMenu();
  }
  render() {
    //componanutdidmount
    //1- get last sigment of url
    //2- send axios request to backend with res id to get the menu
    //3-update compenet state with menu

    return (
      <React.Fragment>
        {this.state.menu && <Menu menu={this.state.menu} />}
      </React.Fragment>
    );
  }
}

export default Menus;
