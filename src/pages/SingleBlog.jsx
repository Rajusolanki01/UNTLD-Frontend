import React, { useEffect } from "react";
import BreadCrum from "../components/BreadCrum";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Meta from "../components/Meta";
import { Blog } from "../assets/assets";
import Container from "../components/Container";

const SingleBlog = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.lordicon.com/lordicon.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrum title="Dynamic Blog Name" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link to="/blogs" className="d-flex align-items-center gap-2">
                <BiArrowBack style={{ fontSize: "20px" }} />
                Go Back to Blogs{" "}
              </Link>
              <h3 className="title mt-2">
                A Beautiful Sunday Morning renaissance
              </h3>
              <img src={Blog} className="img-fluid w-100 my-4" alt="Blog" />
              <p>
                Under the canvas of the waking sky, Nature's symphony begins to
                fly. Dew-kissed petals bloom with delight, As morning whispers
                secrets to the night. A gentle breeze, a tranquil hush, Through
                rustling leaves, it starts to brush. The earth adorned in a
                soft, verdant lace, A dance of colors, an enchanting embrace.
                The sun ascends with a radiant smile, Gilding landscapes mile by
                mile. A tranquil river mirrors the sun's descent, In its waters,
                a world of dreams is sent.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;
