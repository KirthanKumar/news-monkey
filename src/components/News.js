import React, { Component } from "react"; // rce
import NewsItem from "./NewsItem";

export class News extends Component {
  // rce
  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem title="My Title" description="desc" />
          </div>
          <div className="col-md-4">
            <NewsItem title="My Title" description="desc" />
          </div>
          <div className="col-md-4">
            <NewsItem title="My Title" description="desc" />
          </div>
          <div className="col-md-4">
            <NewsItem title="My Title" description="desc" />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
