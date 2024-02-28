import React, { Component } from "react";
import Layout from "../layout/Layout";
import Button from "../shared/buttons/Button";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../shared/spinner/Spinner";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      totalResults: 0,
      page: 1,
    };
  }
  getData = async (page) => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${this.props.q}&page=${page}&language=${this.props.language}&pageSize=12&sortBy=publishedAt&apiKey=eff60c9a258248f4801d0954f393b1e9`
      );
      if (!response.ok) {
        console.log("error while fetching articles!!!");
        return;
      }
      const result = await response.json();
      if (result.articles) {
        if (page === 1) {
          this.setState({
            articles: result.articles.filter(
              (fitered) =>
                fitered.title !== "[Removed]" &&
                fitered.source.name.length < 20 &&
                fitered.description.length > 150
            ),
            totalResults: result.totalResults,
          });
        } else {
          this.setState({
            articles: this.state.articles.concat(
              result.articles.filter(
                (fitered) =>
                  fitered.title !== "[Removed]" &&
                  fitered.source.name.length < 20 &&
                  fitered.description.length > 150
              )
            ),
            totalResults: result.totalResults,
          });
        }
      }
    } catch (error) {
      console.log("error while fetching articles", error);
    }
  };

  fetchData = async () => {
    this.getData(this.state.page + 1);
    this.setState({ page: this.state.page + 1 });
  };

  componentDidMount() {
    this.getData(1);
  }
  componentDidUpdate(oldProps) {
    if (oldProps !== this.props) {
      this.getData(1);
    }
  }
  render() {
    return (
      <Layout
        changeLanguage={this.props.changeLanguage}
        changeSearch={this.props.changeSearch}
      >
        <div className="home-container">
          <h1 className="heading">{this.props.q} news articles</h1>

          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchData}
            hasMore={this.state.articles.length < this.state.totalResults}
            loader={<Spinner />}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b style={{ fontSize: "28px" }}>No more data available!!</b>
              </p>
            }
          >
            <div className="content-articles">
              {this.state.articles.map((article, index) => {
                return (
                  <Link
                    className="single-article"
                    to={article.url}
                    target="_blank"
                    key={index}
                  >
                    <div className="card">
                      <div className="card__img">
                        {article.urlToImage ? (
                          <img src={article.urlToImage} alt="" />
                        ) : (
                          <div className="not-found-img">
                            <img src="/assets/img/no-img.jpg" alt="" />
                          </div>
                        )}
                      </div>
                      <div className="card__content">
                        <h3 className="card__heading">{article.title}</h3>
                        <div className="source">
                          <p className="source__name">{article.source.name}</p>
                          <p className="source__date">
                            {new Date(article.publishedAt).toDateString()}
                          </p>
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
          </InfiniteScroll>
        </div>
      </Layout>
    );
  }
}
