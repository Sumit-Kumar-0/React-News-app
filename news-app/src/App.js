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
    };
  }
  changeLanguage = (lang) => {
    this.setState({
      language: lang,
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
                language={language}
                q="All"
              />
            }
          />
          <Route
            path="/All"
            element={
              <Home
                changeLanguage={this.changeLanguage}
                language={language}
                q="All"
              />
            }
          />
          <Route
            path="/Politics"
            element={
              <Home
                changeLanguage={this.changeLanguage}
                language={language}
                q="Politics"
              />
            }
          />
          <Route
            path="/Science"
            element={
              <Home
                changeLanguage={this.changeLanguage}
                language={language}
                q="Science"
              />
            }
          />
          <Route
            path="/Technology"
            element={
              <Home
                changeLanguage={this.changeLanguage}
                language={language}
                q="Technology"
              />
            }
          />
          <Route
            path="/Education"
            element={
              <Home
                changeLanguage={this.changeLanguage}
                language={language}
                q="Education"
              />
            }
          />
          <Route
            path="/Crime"
            element={
              <Home
                changeLanguage={this.changeLanguage}
                language={language}
                q="Crime"
              />
            }
          />
          <Route
            path="/Entertainment"
            element={
              <Home
                changeLanguage={this.changeLanguage}
                language={language}
                q="Entertainment"
              />
            }
          />
          <Route
            path="/Sports"
            element={
              <Home
                changeLanguage={this.changeLanguage}
                language={language}
                q="Sports"
              />
            }
          />
          <Route
            path="/Cricket"
            element={
              <Home
                changeLanguage={this.changeLanguage}
                language={language}
                q="Cricket"
              />
            }
          />
          <Route
            path="/World"
            element={
              <Home
                changeLanguage={this.changeLanguage}
                language={language}
                q="World"
              />
            }
          />
          <Route
            path="/Covid-19"
            element={
              <Home
                changeLanguage={this.changeLanguage}
                language={language}
                q="Covid-19"
              />
            }
          />
          <Route
            path="/Jokes"
            element={
              <Home
                changeLanguage={this.changeLanguage}
                language={language}
                q="Jokes"
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
