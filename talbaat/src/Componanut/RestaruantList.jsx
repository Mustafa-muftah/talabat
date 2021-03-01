import React, { Component } from "react";
import "./RestaruantList.css";
import Rstaruant from "./Restaruant";

class RestaruantList extends Component {
  state = {
    currentPage: 1,
    RestaruantPerPage: 10,
    // totalCount:
    //ay
  };

  handleClick = (event) => {
    this.setState({
      currentPage: Number(event.target.id),
    });
  };

  render() {
    const { currentPage, RestaruantPerPage } = this.state;
    const restaruant = this.props.resturant;

    // Logic for displaying Restaruant
    const indexOfLastRest = currentPage * RestaruantPerPage;
    const indexOfFirstRest = indexOfLastRest - RestaruantPerPage;
    const currentRestaruant = restaruant.slice(
      indexOfFirstRest,
      indexOfLastRest
    );

    const renderRestaruant = currentRestaruant.map((Rest) => {
      return (
        <Rstaruant
          key={Rest.id}
          id={Rest.id}
          name={Rest.name}
          cusisines={Rest.cusisines}
          area={Rest.area}
        />
      );
    });

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (
      let i = 1;
      i <= Math.ceil(restaruant.length / RestaruantPerPage);
      i++
    ) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map((number) => {
      return (
        <li key={number} id={number} onClick={this.handleClick}>
          {number}
        </li>
      );
    });

    return (
      <React.Fragment>
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
        <div className="Pagenation">
          <ul>{renderRestaruant}</ul>
          <ul id="page-numbers" className="center-block text-center">
            {renderPageNumbers}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default RestaruantList;
