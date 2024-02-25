import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import "../css/Layout.css"

export default class Layout extends Component {
  render() {
    const { children  } = this.props;
    
    return (
      <>
        <Header changeLanguage={this.props.changeLanguage} changeSearch={this.props.changeSearch}/>
        <Main>{children}</Main>
        <Footer />
      </>
    );
  }
}
