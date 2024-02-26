import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./compoents/pages/Home";
import NotFound from "./compoents/pages/NotFound";

class App extends Component {
  constructor() {
    super();
    this.state = {
      language: "en",
      search: "",
    };
  }
  changeLanguage = (lang) => {
    this.setState({
      language: lang,
    });
  };
  changeSearch = (searchText) => {
    this.setState({
      search: searchText,
    });
  };
  render() {
    const { language } = this.state;
    return (
      <div className="app-container">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                changeLanguage={this.changeLanguage}
                changeSearch={this.changeSearch}
                language={language}
                q={this.state.search ? this.state.search : "All"}
              />
            }
          />
          <Route
            path="/All"
            element={
              <Home
                changeLanguage={this.changeLanguage}
                changeSearch={this.changeSearch}
                language={language}
                q={this.state.search ? this.state.search : "All"}
              />
            }
          />
          <Route
            path="/Politics"
            element={
              <Home
                changeLanguage={this.changeLanguage}
                changeSearch={this.changeSearch}
                language={language}
                q={this.state.search ? this.state.search : "Politics"}
              />
            }
          />
          <Route
            path="/Science"
            element={
              <Home
                changeLanguage={this.changeLanguage}
                changeSearch={this.changeSearch}
                language={language}
                q={this.state.search ? this.state.search : "Science"}
              />
            }
          />
          <Route
            path="/Technology"
            element={
              <Home
                changeLanguage={this.changeLanguage}
                changeSearch={this.changeSearch}
                language={language}
                q={this.state.search ? this.state.search : "Technology"}
              />
            }
          />
          <Route
            path="/Education"
            element={
              <Home
                changeLanguage={this.changeLanguage}
                changeSearch={this.changeSearch}
                language={language}
                q={this.state.search ? this.state.search : "Education"}
              />
            }
          />
          <Route
            path="/Crime"
            element={
              <Home
                changeLanguage={this.changeLanguage}
                changeSearch={this.changeSearch}
                language={language}
                q={this.state.search ? this.state.search : "Crime"}
              />
            }
          />
          <Route
            path="/Entertainment"
            element={
              <Home
                changeLanguage={this.changeLanguage}
                changeSearch={this.changeSearch}
                language={language}
                q={this.state.search ? this.state.search : "Entertainment"}
              />
            }
          />
          <Route
            path="/Sports"
            element={
              <Home
                changeLanguage={this.changeLanguage}
                changeSearch={this.changeSearch}
                language={language}
                q={this.state.search ? this.state.search : "Sports"}
              />
            }
          />
          <Route
            path="/Cricket"
            element={
              <Home
                changeLanguage={this.changeLanguage}
                changeSearch={this.changeSearch}
                language={language}
                q={this.state.search ? this.state.search : "Cricket"}
              />
            }
          />
          <Route
            path="/World"
            element={
              <Home
                changeLanguage={this.changeLanguage}
                changeSearch={this.changeSearch}
                language={language}
                q={this.state.search ? this.state.search : "World"}
              />
            }
          />
          <Route
            path="/Covid-19"
            element={
              <Home
                changeLanguage={this.changeLanguage}
                changeSearch={this.changeSearch}
                language={language}
                q={this.state.search ? this.state.search : "Covid-19"}
              />
            }
          />
          <Route
            path="/Jokes"
            element={
              <Home
                changeLanguage={this.changeLanguage}
                changeSearch={this.changeSearch}
                language={language}
                q={this.state.search ? this.state.search : "Jokes"}
              />
            }
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    );
  }
}

export default App;
