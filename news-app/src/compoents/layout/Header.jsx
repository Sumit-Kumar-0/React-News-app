import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, Search, Menu, X } from "lucide-react";
import InputField from "../shared/input-field/InputField";
import Button from "../shared/buttons/Button";
import NavItem from "./NavItem";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOtherDropDownActive: false,
      isLanguageDropDownActive: false,
      search: "",
      isSearchInput: false,
      isMobileActive: true,
    };

    this.navItems = [
      { to: "/All", navLinkName: "All" },
      { to: "/Politics", navLinkName: "Politics" },
      { to: "/Science", navLinkName: "Science" },
    ];

    this.dropDownItems = [
      { to: "/Technology", navLinkName: "Technology" },
      { to: "/Education", navLinkName: "Education" },
      { to: "/Crime", navLinkName: "Crime" },
      { to: "/Entertainment", navLinkName: "Entertainment" },
      { to: "/Sports", navLinkName: "Sports" },
      { to: "/Cricket", navLinkName: "Cricket" },
      { to: "/World", navLinkName: "World" },
      { to: "/Covid-19", navLinkName: "Covid-19" },
      { to: "/Jokes", navLinkName: "Jokes" },
    ];
  }

  searchSubmitHandler = (e) => {
    e.preventDefault();
    this.props.changeSearch(this.state.search);
    this.setState({
      search: "",
    });
    this.setState({ isSearchInput: false, isMobileActive: true });
  };

  toggleOtherDropDown = () => {
    this.setState((prevState) => ({
      isOtherDropDownActive: !prevState.isOtherDropDownActive,
    }));
  };

  toggleLanguageDropDown = () => {
    this.setState((prevState) => ({
      isLanguageDropDownActive: !prevState.isLanguageDropDownActive,
    }));
  };

  render() {
    const { isOtherDropDownActive, isLanguageDropDownActive } = this.state;
    return (
      <div className="header-container">
        <header className="header">
          <div className="logo">
            <Link onClick={() => this.props.changeSearch("")} to="/">
              <img src="/assets/img/logo.png" alt="logo" />
            </Link>
          </div>
          <nav
            className={`nav ${!this.state.isMobileActive ? "mobile-nav" : ""}`}
          >
            <ul className="navlist">
              {this.navItems.map((navItem, i) => (
                <NavItem
                  onClick={() => {
                    this.props.changeSearch("");
                    this.setState({ isMobileActive: true });
                  }}
                  key={i}
                  to={navItem.to}
                  navLinkName={navItem.navLinkName}
                />
              ))}
              <div onClick={this.toggleOtherDropDown} className="others-nav">
                <p className="others">
                  Others
                  {isOtherDropDownActive ? <ChevronUp /> : <ChevronDown />}
                </p>
                <ul
                  className={`nav-drop-down ${
                    isOtherDropDownActive ? "active-dropdown" : ""
                  }`}
                >
                  {this.dropDownItems.map((navItem, i) => (
                    <NavItem
                      onClick={() => {
                        this.props.changeSearch("");
                        this.setState({ isMobileActive: true });
                      }}
                      key={i}
                      to={navItem.to}
                      navLinkName={navItem.navLinkName}
                    />
                  ))}
                </ul>
              </div>
              <div onClick={this.toggleLanguageDropDown} className="others-nav">
                <p className="others">
                  Language
                  {isLanguageDropDownActive ? <ChevronUp /> : <ChevronDown />}
                </p>
                <ul
                  className={`nav-drop-down lang ${
                    isLanguageDropDownActive ? "active-dropdown" : ""
                  }`}
                >
                  <li
                    onClick={() => {
                      this.props.changeLanguage("hi");
                      this.setState({ isMobileActive: true });
                    }}
                  >
                    Hindi
                  </li>
                  <li
                    onClick={() => {
                      this.props.changeLanguage("en");
                      this.setState({ isMobileActive: true });
                    }}
                  >
                    English
                  </li>
                </ul>
              </div>
            </ul>
            <form
              className={`search ${
                this.state.isSearchInput ? "mobile-search-class" : ""
              }`}
              onSubmit={this.searchSubmitHandler}
            >
              <>
                <div className="input mobile-screen">
                  <InputField
                    type="search"
                    id="search"
                    placeholder="type to search.."
                    autoComplete="search"
                    onChange={(e) => this.setState({ search: e.target.value })}
                    value={this.state.search}
                  />
                </div>
                <Button
                  type="submit"
                  className="primary-btn mobile-screen"
                  text="search"
                />
                <div
                  onClick={() => this.setState({ isSearchInput: true })}
                  className="search-icon"
                >
                  <Search />
                </div>
              </>
            </form>
          </nav>

          {!this.state.isMobileActive ? (
            <X
              onClick={() =>
                this.setState((prevState) => ({
                  isMobileActive: !prevState.isMobileActive,
                }))
              }
            />
          ) : (
            <Menu
              className="menu"
              onClick={() =>
                this.setState((prevState) => ({
                  isMobileActive: !prevState.isMobileActive,
                }))
              }
            />
          )}
        </header>
      </div>
    );
  }
}

export default Header;
