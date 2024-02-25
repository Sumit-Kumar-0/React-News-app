import React, { Component } from "react";
import Button from "../shared/buttons/Button";
import { Link } from "react-router-dom";
import Layout from "../layout/Layout";

export default class NotFound extends Component {
  render() {
    return (
      <Layout>
        <div className="not-found-page">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <Link>
            <Button text="go to home" className="primary-btn" />
          </Link>
        </div>
      </Layout>
    );
  }
}
