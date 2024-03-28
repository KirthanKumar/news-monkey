import React, { Component } from "react";

export class NewsItem extends Component {
  // constructor() {
  //   super();
  //   console.log("Hello I am a constructor");
  // }

  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props; // destructuring
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=s0-w300-rw"
            }
            className="card-img-top"
            alt="..."
            // height="161 px"
            // width="286 px"
          />
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              style={{ left: "90%", zIndex: "1" }}
            >
              {source}
            </span>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "UnKnown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            {/* <p>{new Date(date).getDate()}</p>
            <p>{new Date(date).getSeconds()}</p> */}
            {/* <p>{new Date(date).toGMTString()}</p> */}

            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
