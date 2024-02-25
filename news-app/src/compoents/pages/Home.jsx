import React, { Component } from "react";
import Layout from "../layout/Layout";
import Button from "../shared/buttons/Button";
import { Link } from "react-router-dom";

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
        `https://newsapi.org/v2/everything?q=${this.props.q}&language=hi&sortBy=publishedAt&apiKey=5cf39ca281de48599645ed32393550d4`
      );
      if (!response.ok) {
        console.log("error while fetching articles!!!");
        return;
      }
      const result = await response.json();
      this.setState({
        articles: result.articles,
        totalResults: result.totalResults,
      });
      console.log(result);
    } catch (error) {
      console.log("error while fetching articles", error);
    }
  };
  componentDidMount() {
    this.getData();
  }
  componentDidUpdate(oldProps) {
    if (oldProps !== this.props) {
      this.getData();
    }
  }
  render() {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>> render");
    return (
      <Layout>
        <div className="home-container">
          <h1 className="heading">{this.props.q} related news</h1>
          <div className="content">
            {this.state.articles.map((article, index) => {
              return (
                <div key={index} className="card">
                  <div className="card__img">
                    
                    {console.log(">>>>>>>",article.urlToImage) && article.urlToImage && <img src={article.urlToImage} alt="" />}
                  </div>
                  <h3 className="card__heading">{article.title}</h3>
                  <div className="source">
                    <p className="source__name">{article.source.name}</p>
                    <p className="source__date">{article.publishedAt}</p>
                  </div>
                  <p className="card__detail">{article.description}</p>
                  <div className="source__link">
                    <Link to={article.url} target="_blank">
                      <Button
                        text="read full article"
                        className="primary-btn"
                      />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Layout>
    );
  }
}
