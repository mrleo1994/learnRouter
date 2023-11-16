import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
        <NavLink to="/" className="btn btn-warning">
          Home
        </NavLink>
        <NavLink to="/life-cycle" className="btn btn-warning">
          Life Cycle
        </NavLink>
        <NavLink to="/login" className="btn btn-warning">
          Login
        </NavLink>
      </div>
    );
  }
}
