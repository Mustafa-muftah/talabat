import React, { Component } from "react";

class Select extends Component {
  state = {};
  render() {
    return (
      <div className="select">
        {/* value={this.state.value}  */}
        <select value={this.props.value} onChange={this.props.handleChange}>
          {this.props.option.map((option) => (
            <option key={option.id} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default Select;
