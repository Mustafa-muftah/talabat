import React, { Component } from "react";
import "./Navbar.css";
import logo from "./Assets/logo.svg";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <NavLink className="navbar-brand mx-5 my-2" to="/">
            <img src={logo} alt="" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item mx-5">
                <NavLink className="nav-link" to="/">
                  Offers
                </NavLink>
              </li>
              <li className="nav-item mx-5">
                <NavLink className="nav-link" to="/">
                  Become a partner
                </NavLink>
              </li>
              <li className="nav-item  mx-5">
                <NavLink className="nav-link" to="/Restraunat">
                  All Restaurants
                </NavLink>
              </li>
              <li className="nav-item  mx-5">
                <NavLink className="nav-link" to="/">
                  العربيه
                </NavLink>
              </li>
              <li className="nav-item  mx-5 searchbtn">
                <NavLink to="/SearchAndFilter">
                  <i aria-hidden="true" className="fa fa-search"></i>
                </NavLink>
              </li>
              <li className="nav-item  mx-4 ">
                <NavLink className="nav-link" to="/">
                  <img
                    src="https://www.talabat.com/images/talabat/flag-eg.png"
                    alt=""
                    style={{ width: "40%", height: "70%" }}
                  ></img>
                </NavLink>
              </li>
              <li className="nav-item  mx-2">
                <NavLink to="/login">
                  <button className="btn nav-btn">Login</button>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
