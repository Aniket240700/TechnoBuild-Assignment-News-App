import React from "react";

function NewsItems({ title, description, imageUrl, newsUrl, author, date }) {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={imageUrl}
          className="card-img-top"
          alt="bulletien_image"
        ></img>
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unkown" : author} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-dark"
          >
            Know More
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsItems;
