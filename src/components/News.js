import React, { Component } from "react"; // rce
import NewsItem from "./NewsItem";

// rce
export class News extends Component {
  constructor() {
    super();
    // console.log("Hello I am a constructor from News component");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    console.log("componentDidMount");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c4c450c08e904226a8ff20ed56c63844&page=${this.state.page}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  handleNextClick = async () => {
    // console.log("Next");
    console.log(Math.ceil(this.state.totalResults / 20));
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c4c450c08e904226a8ff20ed56c63844&page=${
        this.state.page + 1
      }&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      // console.log(parsedData);
      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1,
      });
    }
  };

  handlePrevClick = async () => {
    // console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c4c450c08e904226a8ff20ed56c63844&page=${
      this.state.page - 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({ articles: parsedData.articles, page: this.state.page - 1 });
  };

  render() {
    // console.log("render");
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  // title={element.title ? element.title.slice(0, 40) : ""}
                  title={element.title ? element.title : ""} // no need to slice it looks good without slicing
                  // description={(element.title.length+element.description.length > 100)?element.description.slice(0, 100-element.title.length):element.description}
                  description={
                    // element.description ? element.description.slice(0, 80) : ""
                    element.description ? element.description : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
            disabled={this.state.page <= 1}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          disabled = {this.state.page + 1 > Math.ceil(this.state.totalResults / 20)}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
