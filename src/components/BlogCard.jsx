import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import NotFound from "./NotFound";

const BlogCard = ({ blogData }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.lordicon.com/lordicon.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  if (blogData.length === 0) {
    return <NotFound />;
  }

  return (
    <div className="blog-card me-3">
      <div className="card-image">
        <img
          src={blogData.images[0]?.url || ""}
          className="img-fluid w-100"
          alt="Blog"
        />
      </div>
      <div className="blog-content">
        <p className="date">
          {moment(blogData.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
        </p>
        <h6 className="title">{blogData.title}</h6>
        <p
          className="desc"
          dangerouslySetInnerHTML={{
            __html: blogData.description.substr(0, 72) + "...",
          }}
        ></p>
        <div className="d-flex justify-content-between align-items-center">
          <Link to={`/blog/${blogData._id}`}>
            <button className="buttons mt-1 mb-2">Read More</button>
          </Link>
          <div className="d-flex gap-2 justify-content-between align-items-center">
            <lord-icon
              src="https://cdn.lordicon.com/vfczflna.json"
              trigger="loop-on-hover"
              stroke="bold"
              colors="primary:#121331,secondary:#2A9D8F"
              style={{ width: "24px", height: "25px" }}
            ></lord-icon>
            <span>{blogData.numViews}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
