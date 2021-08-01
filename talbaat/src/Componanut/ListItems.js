import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Search.css";
import { connect } from "react-redux";
class ListItems extends Component {
  state = {};
  render() {
    const finalres = [];
    const state = this.props.search;
    for (let i = 0; i < state.length; i++) {
      for (let j = 0; j < state[i].length; j++) {
        finalres.push(state[i][j]);
      }
    }

    return (
      <div className="List">
        {finalres.map((e) => {
          return (
            <div className="row text-primary">
              <Link key={e.id} to={`/menus/${e.id}`}>
                {e.name}
              </Link>{" "}
              <Link key={e.id} to={`/menus/${e.id}`}>
                {e.dishname}
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    search: state.Search,
  };
};

export default connect(mapStateToProps)(ListItems);
