import React from "react";
import { Link } from "react-router-dom";
import "./Search.css";

export default function ListItems(props) {
  return (
    <div className="List">
      {props.searchItem.map((e) => {
        return (
          <div className="row text-primary">
            <Link to={`/menus/${e.id}`}> {e.name}</Link>
          </div>
        );
      })}
    </div>
  );
}
