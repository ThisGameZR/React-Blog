import React from "react";
import "./article.css";

const Article = ({ imgUrl, date, href, description, text }) => (
  <div className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="gpt3__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
        <span>{description}</span>
      </div>
      <p>
        <a href={href} target="_blank">
          See more
        </a>
      </p>
    </div>
  </div>
);

export default Article;
