import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import axios from "axios";
import Footer from "./Componanut/Footer";
import Navbar from "./Componanut/Navbar";
import Home from "./Componanut/Home";
import Pagination from "./Componanut/Pagination";
import Menus from "./Menus";
import Login from "./Componanut/Login";
class App extends Component {
  state = {
    resturant: [],
    menus: [],
  };
  getResturatns = async () => {
    const { data } = await axios.get("http://localhost:4000/Restaruant");
    this.setState({ resturant: data });
  };
  getMenus = async () => {
    const { data } = await axios.get("http://localhost:4000/menus");
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
            render={(props) => (
              <Pagination resturant={this.state.resturant} {...props} />
            )}
          ></Route>
          <Route
            path="/menus/:id"
            render={(props) =>
              this.state.menus.length > 0 && (
                <Menus menus={this.state.menus} {...props} />
              )
            }
          ></Route>
          <Redirect from="/" to="/Home"></Redirect>
          <Redirect to="/Home"></Redirect>
        </Switch>

        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
