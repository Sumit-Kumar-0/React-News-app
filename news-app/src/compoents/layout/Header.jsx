import React, { Component } from "react";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import InputField from "../shared/input-field/InputField";
import Button from "../shared/buttons/Button";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropDownActive: false,
    };

    this.navItems = [
      {
        to: "/All",
        navLinkName: "All",
      },
      {
        to: "/Politics",
        navLinkName: "Politics",
      },
      {
        to: "/Science",
        navLinkName: "Science",
      },
      {
        to: "/Technology",
        navLinkName: "Technology",
      },
    ];

    this.dropDownItems = [
      {
        to: "/Education",
        navLinkName: "Education",
      },
      {
        to: "/Crime",
        navLinkName: "Crime",
      },
      {
        to: "/Entertainment",
        navLinkName: "Entertainment",
      },
      {
        to: "/Sports",
        navLinkName: "Sports",
      },
      {
        to: "/Cricket",
        navLinkName: "Cricket",
      },
      {
        to: "/World",
        navLinkName: "World",
      },
      {
        to: "/Covid-19",
        navLinkName: "Covid-19",
      },
      {
        to: "/Jokes",
        navLinkName: "Jokes",
      },
    ];
  }

  toggleDropDown = () => {
    this.setState((prevState) => ({
      isDropDownActive: !prevState.isDropDownActive,
    }));
  };
  render() {
    return (
      <div className="header-container">
        <header className="header">
          <div className="logo">
            <Link to="/">
              <img src="/assets/img/logo.png" alt="logo" />
            </Link>
          </div>
          <nav className="nav">
            <ul className="navlist">
              {this.navItems.map((navItem, i) => {
                return (
                  <NavItem
                    key={i}
                    to={navItem.to}
                    navLinkName={navItem.navLinkName}
                  />
                );
              })}
              <div onClick={this.toggleDropDown} className="others-nav">
                <p className="others">
                  Others
                  {this.state.isDropDownActive ? (
                    <ChevronUp className="nav-up" />
                  ) : (
                    <ChevronDown className="nav-down" />
                  )}
                </p>
                <ul
                  className={`nav-drop-down ${
                    this.state.isDropDownActive ? "active-dropdown" : ""
                  }`}
                >
                  {this.dropDownItems.map((navItem, i) => {
                    return (
                      <NavItem
                        key={i}
                        to={navItem.to}
                        navLinkName={navItem.navLinkName}
                      />
                    );
                  })}
                </ul>
              </div>
            </ul>

            <div className="search">
              <div className="input">
                <InputField
                  type="search"
                  id="search"
                  placeholder="type to search.."
                  autoComplete="search"
                />
              </div>

              <Button className="primary-btn" text="search" />
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
