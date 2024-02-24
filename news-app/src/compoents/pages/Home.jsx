import React, { Component } from "react";
import Layout from "../layout/Layout";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      totalResults: 0,
    };
  }
  getData = async () => {
    try {
      const response = await fetch(
        "https://newsapi.org/v2/everything?q=all&sortBy=publishedAt&apiKey=5cf39ca281de48599645ed32393550d4"
      );
      if(!response.ok){
        console.log("error while fetching articles!!!");
        return
      }
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log("error while fetching articles", error);
    }
  };
  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <Layout>
        <h1>{this.props.q} related news</h1>
      </Layout>
    );
  }
}
