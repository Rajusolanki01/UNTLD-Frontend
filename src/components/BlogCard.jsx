import React from "react";
import { Link } from "react-router-dom";
import { Blog } from "../assets/assets";

const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img src={Blog} className="img-fluid w-100" alt="Blog" />
      </div>
      <div className="blog-content">
        <p className="date">16 Jan 2024</p>
        <h6 className="title">A Beautiful Sunday Morning renaissance</h6>
        <p className="desc">
          In the soft glow of dawn's embrace, A Sunday morning, a moment of
          grace. The world awakens, bathed in golden light, A renaissance
          unfolds, pure and bright.
        </p>
        <Link to="/blog/:id">
          <button className="buttons mt-1 mb-2">Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
