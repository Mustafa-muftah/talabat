import React, { Component } from "react";
import Search from "./Search";
import Features from "./Features";
import Register from "./Register";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Search />
        <Features />
        <Register />
      </React.Fragment>
    );
  }
}

export default Home;
