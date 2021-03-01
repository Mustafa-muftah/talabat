import React, { Component } from "react";
import axios from "axios";
import Rstaruant from "./Restaruant";

class Pagination extends Component {
  state = {
    resturant: [],
    pageIndex: 1,
    //m
  };

  getResturatns = async () => {
    const { data } = await axios.get(
      `http://localhost:4000/Restaruant?_page=${this.state.pageIndex}&_limit=5`
    );
    this.setState({ resturant: data });
  };
  async componentDidMount() {
    await this.getResturatns();
  }
  handleIncrement = async (e) => {
    let index = this.state.pageIndex;
    let incerment = index + 1;
    this.state.pageIndex < 4 && this.setState({ pageIndex: incerment });
    await this.getResturatns();
    console.log(this.state.pageIndex);
  };
  handleDecrement = async (e) => {
    let index = this.state.pageIndex;
    let decrement = index - 1;
    this.state.pageIndex > 0 && this.setState({ pageIndex: decrement });
    await this.getResturatns();
    console.log(this.state.pageIndex);
  };

  render() {
    return (
      <div className="restList row">
        <div className="row">
          <div className="col m-3 ">
            <h3>Restraunat</h3>
          </div>
          <div className="col m-3 ">
            <h3>Cusisines</h3>
          </div>
          <div className="col m-3 ">
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

export default Pagination;
