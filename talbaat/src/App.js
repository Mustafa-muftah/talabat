import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import axios from "axios";
import Footer from "./Componanut/Footer";
import Navbar from "./Componanut/Navbar";
import Home from "./Componanut/Home";
import Menus from "./Componanut/Menus";
import Login from "./Componanut/Login";
import Search from "./Componanut/Search";
import RestPagination from "./Componanut/RestPagination";
import ShoppingCart from "./Componanut/ShoppingCart";
import Cart from "./Componanut/Cart";
import CheckOut from "./CheckOut";
import "./App.css";
import SearchAndFilter from "./Componanut/SearchFilter";

class App extends Component {
  state = {
    resturant: [],
    menus: [],
  };
  getResturatns = async () => {
    const { data } = await axios.get("http://localhost:3005/Restaruant");
    this.setState({ resturant: data });
  };
  getMenus = async () => {
    const { data } = await axios.get("http://localhost:3005/menus");
    this.setState({ menus: data });
  };
  async componentDidMount() {
    await this.getResturatns();
    await this.getMenus();
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route path="/Home" component={Home}></Route>
          <Route path="/login" component={Login}></Route>

          <Route
            path="/Restraunat"
            render={(props) => <RestPagination {...props} />}
          ></Route>

          <Route
            path="/menus/:id"
            render={(props) =>
              this.state.menus.length > 0 && (
                <Menus menus={this.state.menus} {...props} />
              )
            }
          ></Route>
          <Route
            path="/search"
            render={(props) => <Search {...props} />}
          ></Route>
          <Route
            path="/cart"
            render={(props) => <ShoppingCart {...props} />}
          ></Route>
          <Route
            path="/Check-Out"
            render={(props) => <CheckOut {...props} />}
          ></Route>
          <Route
            exact
            path="/SearchAndFilter"
            render={(props) => <SearchAndFilter {...props} />}
          ></Route>

          <Route exact path="/">
            <Redirect to="/Home"></Redirect>
          </Route>
        </Switch>

        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
