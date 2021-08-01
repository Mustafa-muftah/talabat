import React, { Component } from "react";
import "./Search.css";
import ListItems from "./ListItems";
import { connect } from "react-redux";
import { SearchForItem } from "./Redux/CountActions";
import Filter from "./Filter";

class SearchAndFilter extends Component {
  state = {
    value: "",
  };
  //   npx kill-port 3000
  componentDidUpdate = () => {
    this.props.searchForAnItem(this.state.value);
  };

  changeHandler = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
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
              <a className="SearchAndFilterBtn">
                <i aria-hidden="true" className="fa fa-search"></i>
              </a>
            </div>
          </div>
          <Filter />
          <ListItems />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    search: state.Search,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchForAnItem: (e) => dispatch(SearchForItem(e)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchAndFilter);
