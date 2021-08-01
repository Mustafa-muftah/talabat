import React, { Component } from "react";
import Select from "./Select";
import { FilterCusinie, FilterArea, FilterPrice } from "./Redux/CountActions";
import { connect } from "react-redux";
import "./Search.css";

class Filter extends Component {
  state = {
    Cusinevalue: "",
    priceValue: 0,
    areaValue: "",
  };
  onPriceChange = (e) => {
    this.setState({ priceValue: e.target.value });
  };
  componentDidUpdate = () => {
    if (this.state.Cusinevalue.length > 0) {
      this.props.cusinineFilter(this.state.Cusinevalue);
    } else if (this.state.areaValue.length > 0) {
      this.props.areaFilter(this.state.areaValue);
    }
  };
  handleCusinieChange = (e) => {
    this.setState({ Cusinevalue: e.target.value, areaValue: "" });
  };
  handleAreaChange = (e) => {
    this.setState({ areaValue: e.target.value, Cusinevalue: "" });
  };
  render() {
    const cusinies = [
      { id: "empty", label: "---", value: "" },
      { id: 0, label: "Italian", value: "Italian" },
      { id: 1, label: "Syrian", value: "Syrian" },
      { id: 2, label: "American", value: "American" },
      { id: 3, label: "Egyptian", value: "Egyptian" },
    ];
    const area = [
      { id: "empty", label: "---", value: "" },
      { id: 0, label: "NasrCity", value: "NasrCity" },
      { id: 1, label: "Misr El Gdeda", value: "Misr El Gdeda" },
      { id: 2, label: "Maadi", value: "Maadi" },
    ];

    return (
      <div className="filterContainer">
        <label className="head-line">Filter:</label>

        <span className="price-span">Price under</span>
        <div className="price-sec">
          <input
            className="price-input"
            type="number"
            onChange={this.onPriceChange}
            value={this.state.priceValue}
            step="10"
            min="0"
          ></input>
          <button
            className="btn btn-primary price-btn"
            onClick={() => this.props.priceFilter(this.state.priceValue)}
          >
            Confirm
          </button>
        </div>
        <div className="Cusinie-sec">
          <span className="cusine-span">Choose Cusinie</span>
          <Select
            option={cusinies}
            value={this.state.Cusinevalue}
            handleChange={this.handleCusinieChange}
          />
        </div>
        <div className="area-sec">
          <span className="cusine-span">Choose area </span>
          <Select
            option={area}
            value={this.state.areaValue}
            handleChange={this.handleAreaChange}
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = () => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    cusinineFilter: (e) => dispatch(FilterCusinie(e)),
    areaFilter: (e) => dispatch(FilterArea(e)),
    priceFilter: (e) => dispatch(FilterPrice(e)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
