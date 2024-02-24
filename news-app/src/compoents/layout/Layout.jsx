import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import "../css/Layout.css"

export default class YourComponent extends Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </>
    );
  }
}
