import React, { useRef } from "react";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from 'lucide-react';

const Header = () => {
  const navDropDown = useRef();
  const navDropDownHandler = () => {
    navDropDown.current.classList.toggle('active-dropdown');
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
          <Link to="/">logo</Link>
        </div>
        <nav className="nav">
          <ul className="navlist">
            {navItems.map((navItem, i) => (
              <NavItem key={i} to={navItem.to} navLinkName={navItem.navLinkName} />
            ))}
          </ul>
          <div onClick={navDropDownHandler} className="others-nav">
            <p className="others">Others <ChevronDown /> <ChevronUp /></p>
            <ul ref={navDropDown} className="nav-drop-down">
              {dropDownItems.map((navItem, i) => (
                <NavItem key={i} to={navItem.to} navLinkName={navItem.navLinkName} />
              ))}
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
