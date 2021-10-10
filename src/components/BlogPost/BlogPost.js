import React from "react";
import "./BlogPost.css";

function BlogPost({ title, image, article, date }) {
  return (
    <div className="blog__post">
      <h2 className="blog__title">{title}</h2>
      <div className="blogpost__content">
        <img src={`images/${image}`} alt="" />
        <p className="blogpost__article">{article}</p>
      </div>
      <div className="date__readmore">
        <p className="blog__date">{date}</p>
        <button type="button" className="blog__readmore">
          Read More
        </button>
      </div>
    </div>
  );
}

export default BlogPost;
