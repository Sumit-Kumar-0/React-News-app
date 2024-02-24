import React, { Component } from "react";
import Layout from "../layout/Layout";

export default class Home extends Component {
  render() {
    return <Layout>
        <h1>{this.props.q} related news</h1>
    </Layout>;
  }
}
