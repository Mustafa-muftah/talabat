import React, { Component } from "react";
import axios from "axios";
import Rstaruant from "./Restaruant";
import { Route, useLocation, Link } from "react-router-dom";
import queryString from "query-string";
import "./Resturant.css";

class RestPagination extends Component {
  state = {
    resturant: [],
    pageIndex: 0,
    totalCount: 20,
    count: 5,
  };

  componentDidUpdate = async () => {
    // let pageIndex = Number.parseInt(
    //   window.location.href.split("?")[1]?.split("&")[0]?.split("=")[1] ?? 1
    // );
    // if (pageIndex != this.state.pageIndex) await this.getResturatns(pageIndex);
    let parsed = queryString.parse(this.props.location.search);

    let pageIndex = Number.parseInt(parsed._page ?? 1);

    pageIndex != this.state.pageIndex && (await this.getResturatns(pageIndex));
  };

  getResturatns = async (pageIndex) => {
    let url = `http://localhost:3005/Restaruant?_page=${pageIndex}&_limit=${this.state.count}`;
    const { data } = await axios.get(url);
    this.setState({ resturant: data, pageIndex });
  };
  //componanut did mount
  componentDidMount = async () => {
    await this.getResturatns(1);
  };

  handleIncrement = async () => {
    let index = this.state.pageIndex;
    let incerment = index + 1;
    this.state.pageIndex < this.state.totalCount / this.state.count &&
      this.props.history.push(`/Restraunat?_page=${incerment}&_limit=5`);
  };
  handleDecrement = async () => {
    let index = this.state.pageIndex;
    let decrement = index - 1;
    this.state.pageIndex > 1 &&
      this.props.history.push(`/Restraunat?_page=${decrement}&_limit=5`);
  };

  render() {
    return (
      <div className="restList row">
        <div className="row">
          <div className="Rest col m-3 ">
            <h3>Restraunat</h3>
          </div>
          <div className="Rest col m-3 ">
            <h3>Cusisines</h3>
          </div>
          <div className="Rest col m-3 ">
            <h3>Area</h3>
          </div>
        </div>
        {this.state.resturant.length > 0 &&
          this.state.resturant.map((Rest) => {
            return (
              <Rstaruant
                key={Rest.id}
                id={Rest.id}
                name={Rest.name}
                cusisines={Rest.cusisines}
                area={Rest.area}
              />
            );
          })}
        <div className="next-prev-buttons text-center">
          <button
            className="btn btn-primary m-3"
            onClick={() => this.handleDecrement()}
          >
            Previous
          </button>
          <button
            className="btn btn-primary m-3"
            onClick={this.handleIncrement}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default RestPagination;
