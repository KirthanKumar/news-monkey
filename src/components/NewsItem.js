import React, { Component } from "react";

export class NewsItem extends Component {
  // constructor() {
  //   super();
  //   console.log("Hello I am a constructor"); 
  // }

  render() {
    let { title, description, imageUrl, newsUrl } = this.props; // destructuring
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={imageUrl} className="card-img-top" alt="..." height="161 px" width="286 px"/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
