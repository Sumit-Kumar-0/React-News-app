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
        `https://newsapi.org/v2/everything?q=${this.props.q}&language=${this.props.language}&sortBy=publishedAt&apiKey=59d85fee0ee644558eed48afd0b7d4ca`
      );
      if (!response.ok) {
        console.log("error while fetching articles!!!");
        return;
      }
      const result = await response.json();
      this.setState({
        articles: result.articles.filter((withTitle) => withTitle.title !== "[Removed]"),
        totalResults: result.totalResults,
      });
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

    return (
      <Layout changeLanguage={this.props.changeLanguage}>
        <div className="home-container">
          <h1 className="heading">{this.props.q} related news</h1>
          <div className="content-articles">
            {this.state.articles.map((article, index) => {
              return (
                <Link className="single-article" to={article.url} target="_blank" key={index}>
                <div className="card">
                  <div className="card__img">
                    {article.urlToImage ? (
                      <img src={article.urlToImage} alt="" />
                    ) : (
                      <div className="not-found-img"><img src="/assets/img/no-img.jpg" alt="" /></div>
                    )}
                  </div>
                  <div className="card__content">
                    <h3 className="card__heading">{article.title}</h3>
                    <div className="source">
                      <p className="source__name">{article.source.name}</p>
                      <p className="source__date">{new Date(article.publishedAt).toDateString()}</p>
                    </div>
                    <p className="card__detail">{article.description}</p>
                    <div className="source__link">
                        <Button
                          text="read full article"
                          className="primary-btn"
                        />
                    </div>
                  </div>
                </div>
                </Link>
              );
            })}
          </div>
        </div>
      </Layout>
    );
  }
}
