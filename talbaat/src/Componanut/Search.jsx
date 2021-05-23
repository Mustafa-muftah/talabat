import React, { Component } from "react";
import "../Componanut/Search.css";
import Button from "./Button";
import HeaderText from "./HeaderText";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import axios from "axios";
import { Link } from "react-router-dom";

class Search extends Component {
  state = {
    resturant: [],
    restData: {},
  };
  getResturatns = async () => {
    const { data } = await axios.get("http://localhost:3005/Restaruant");
    this.setState({ resturant: data });
  };
  async componentDidMount() {
    await this.getResturatns();
  }
  // handleClick = () => {
  //   // console.log(this.state.restName);
  //   this.props.history.push(`/menus/${this.state.restData.id}`);
  //   console.log(this.state.restData);
  // };
  render() {
    const text = "Order food online in Egypt";
    const buttonText = "Let's go";
    return (
      <div className="search">
        <div className=" search-area center-block text-center">
          <HeaderText text={text} />

          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            // options={this.state.resturant.map((rest) => rest.name)}
            options={this.state.resturant}
            getOptionLabel={(option) => option.name}
            // onChange={(event, value) => this.setState({ restName: value })}
            renderInput={(params) => (
              <TextField
                className="input mb-5"
                {...params}
                label="Search for area , street area , landmark ..."
                InputProps={{ ...params.InputProps, type: "search" }}
              />
            )}
            onChange={(event, newValue) => {
              JSON.stringify(newValue, null, " ");
              this.setState({ restData: newValue });
            }}
          />
          <Link
            to={`/menus/${this.state.restData.id}`}
            className="search-button "
          >
            Let's go
          </Link>
          {/* <Button onclick={this.handleClick} text={buttonText} /> */}
        </div>
      </div>
    );
  }
}

export default Search;
