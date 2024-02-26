import React, { Component } from "react";
import { NavLink } from "react-router-dom"; 

export default class NavItem extends Component {
  render() {
    const { to, navLinkName, onClick } = this.props;

    return (
      <li className="nav-item">
        <NavLink onClick={onClick} to={to}>{navLinkName}</NavLink>
      </li>
    );
  }
}