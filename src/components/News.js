import React, { Component } from "react"; // rce
import NewsItem from "./NewsItem";

export class News extends Component {
  // rce
  render() {
    return (
      <div>
        This is news component
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </div>
    );
  }
}

export default News;
