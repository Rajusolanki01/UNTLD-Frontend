import React, { useEffect } from "react";
import BreadCrum from "../components/BreadCrum";
import { Link, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getSingleblog } from "../feature/blog/blogSlice";
import LoadingCart from "../components/LoadingCart";
import moment from "moment";

const SingleBlog = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const singleBlogState = useSelector((state) => state.blog.singleBlog);
  const loadingState = useSelector((state) => state.blog.isLoading);

  useEffect(() => {
    dispatch(getSingleblog(id));
  }, [dispatch, id]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.lordicon.com/lordicon.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  if (loadingState) {
    return (
      <div className="LoadingBar2 row">
        <LoadingCart />
      </div>
    );
  }

  const imageUrl =
    singleBlogState.images && singleBlogState.images.length > 0
      ? singleBlogState.images[0].url
      : "";

  return (
    <>
      <Meta title={singleBlogState?.title} />
      <BreadCrum title={singleBlogState?.title} />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link to="/blogs" className="d-flex align-items-center gap-2">
                <BiArrowBack style={{ fontSize: "20px" }} />
                Go Back to Blogs{" "}
              </Link>
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="title mt-2">{singleBlogState?.title}</h3>
                <p className="mb-0">
                  {moment(singleBlogState?.createdAt).format(
                    "MMMM Do YYYY, h:mm:ss a"
                  )}
                </p>
              </div>
              <img
                src={imageUrl}
                className="img-fluid w-100 my-4"
                alt={singleBlogState?.title}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: singleBlogState?.description,
                }}
              ></p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;
