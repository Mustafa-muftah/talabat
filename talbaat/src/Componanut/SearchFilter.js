import React, { Component } from "react";
import "./Search.css";
import ListItems from "./ListItems";

class SearchAndFilter extends Component {
  state = {
    value: "",
    searchItem: [],
  };
  //   npx kill-port 3000

  changeHandler = (e) => {
    this.setState({ value: e.target.value });
  };

  searchAndFilter = () => {
    console.log("click");
  };

  render() {
    const search = this.state.value;
    if (search.length > 0) {
      const Restname = this.props.resturant.filter((rest) => {
        return rest.name.toLowerCase().includes(search.toLowerCase());
      });

      this.state.searchItem = Restname;
    }

    return (
      <div>
        <div className="container searchAFilter">
          <div className="input-container">
            <input
              className="input"
              placeholder="Search..."
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "Search...")}
              type="text"
              onChange={this.changeHandler}
            ></input>
            <div className="searchbtn">
              <a className="SearchAndFilterBtn" onClick={this.searchAndFilter}>
                <i aria-hidden="true" className="fa fa-search"></i>
              </a>
            </div>
          </div>
          {this.state.value.length > 0 && (
            <ListItems searchItem={this.state.searchItem} />
          )}
        </div>
      </div>
    );
  }
}

export default SearchAndFilter;
