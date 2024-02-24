import React, { useRef } from "react";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import InputField from "../shared/input-field/InputField";
import Button from "../shared/buttons/Button";

const Header = () => {
  const navDropDown = useRef();
  const navUp = useRef();
  const navDown = useRef();
  const navDropDownHandler = () => {
    navDropDown.current.classList.toggle("active-dropdown");
    navUp.current.classList.toggle("nav-up-active");
    navDown.current.classList.toggle("nav-down-active");
    console.log(navDropDown.current.className);
  };

  const navItems = [
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

  const dropDownItems = [
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
            {navItems.map((navItem, i) => (
              <NavItem
                key={i}
                to={navItem.to}
                navLinkName={navItem.navLinkName}
              />
            ))}
            <div onClick={navDropDownHandler} className="others-nav">
              <p className="others">
                Others
                <ChevronDown ref={navUp} className="nav-up" />
                <ChevronUp ref={navDown} className="nav-down" />
              </p>
              <ul ref={navDropDown} className="nav-drop-down">
                {dropDownItems.map((navItem, i) => (
                  <NavItem
                    key={i}
                    to={navItem.to}
                    navLinkName={navItem.navLinkName}
                  />
                ))}
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
};

export default Header;
