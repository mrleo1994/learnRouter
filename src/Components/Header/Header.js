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
        <NavLink to="/learn-hook" className="btn btn-warning">
          Learn Hook
        </NavLink>
        <NavLink to="/shoe-shop" className="btn btn-warning">
          Shoe Shop
        </NavLink>
        <NavLink to="/use-effect" className="btn btn-warning">
          Use Effect
        </NavLink>
        <NavLink to="/use-management" className="btn btn-warning">
          Use Management
        </NavLink>
      </div>
    );
  }
}
