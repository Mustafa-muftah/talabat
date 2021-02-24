import React, { Component } from "react";
import "../Componanut/Search.css";
import Button from "./Button";
import HeaderText from "./HeaderText";

class Search extends Component {
  state = {};
  render() {
    const text = "Order food online in Egypt";
    const buttonText = "Let's go";
    return (
      <div className="search">
        <div className=" search-area center-block text-center">
          <HeaderText text={text} />
          <input
            type="text"
            placeholder={` Search for area , street area , landmark ...`}
            size="50"
          ></input>
          <Button text={buttonText} />
        </div>
      </div>
    );
  }
}

export default Search;
