import React from "react";
import BreadCrum from "../components/BreadCrum";
import BlogCard from "../components/BlogCard";
import Meta from "../components/Meta";
import Container from "../components/Container";

const Blog = () => {
  return (
    <>
      <Meta title={"Blogs"} />
      <BreadCrum title="Blogs" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
            <div className="filter-card">
              <h3 className="filter-title">Find by Categories</h3>
              <div>
                <ul className="ps-0">
                  <li>Watch</li>
                  <li>Tv</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-8 col-sm-6">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                <BlogCard />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                <BlogCard />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                <BlogCard />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                <BlogCard />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                <BlogCard />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                <BlogCard />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Blog;
