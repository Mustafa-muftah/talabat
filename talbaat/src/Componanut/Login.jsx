import React, { Component } from "react";

import Joi from "joi-browser";
import Button from "./Button";
import "./Login.css";

class Login extends Component {
  state = {
    username: "",
    password: "",
    errors: {},
    //nothing
  };

  schema = {
    username: Joi.string().alphanum().min(3).max(30).required(),

    password: Joi.string()
      .regex(new RegExp("^[a-zA-Z0-9]{3,30}$"), ["error"])
      .required(),
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();

    if (errors) return;

    //Call Backend
  };

  validate = () => {
    const errors = {};
    //Clone State
    const state = { ...this.state };
    delete state.errors;
    const res = Joi.validate(state, this.schema, { abortEarly: false });
    if (res.error === null) {
      this.setState({ errors: {} });
      return null;
    }

    for (const error of res.error.details) {
      errors[error.path] = error.message;
    }

    //Set State
    this.setState({ errors });
    return errors;
  };

  handleChange = (e) => {
    //Clone
    let state = { ...this.state };
    //Edit
    state[e.currentTarget.name] = e.currentTarget.value;
    //Set state
    this.setState(state);
  };

  render() {
    const buttonText = "Submit";
    return (
      <div className="login container">
        <h1 className="login-text my-5 text-center">Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              autoFocus
              id="username"
              type="text"
              className="form-control"
            />
            {this.state.errors.username && (
              <div className="alert alert-danger">
                {this.state.errors.username}
              </div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              id="password"
              type="text"
              className="form-control"
            />
            {this.state.errors.password && (
              <div className="alert alert-danger">
                {this.state.errors.password}
              </div>
            )}
          </div>
          <Button text={buttonText} />
        </form>
      </div>
    );
  }
}

export default Login;
