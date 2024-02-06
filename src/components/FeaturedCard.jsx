import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { ultraWatch, ultraWatch2 } from "../assets/assets";

const FeaturedCard = ({ grid }) => {
  let location = useLocation();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.lordicon.com/lordicon.js";
    script.async = true;
    document.body.appendChild(script);

    const script2 = document.createElement("script");
    script2.src = "https://creattie.com/js/embed.js?id=3f6954fde297cd31b441";
    script2.async = true;
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(script2);
    };
  }, []);
  return (
    <>
      <div
        className={`${
          location.pathname === "/store" ? `gr-${grid}` : "col-3"
        } `}
      >
        <Link to="/product/:id" className="product-card position-relative">
          <div className="wishlist-icons position-absolute">
            <button className="border-0 bg-transparent">
              <lord-icon
                className="img"
                src="https://cdn.lordicon.com/xyboiuok.json"
                trigger="hover"
                colors="primary:#1c1c1b"
                style={{ width: "27px", height: "27px" }}
              ></lord-icon>
            </button>
          </div>
          <div className="product-image">
            <img
              src={ultraWatch}
              alt="Watch"
              className="mb-5 mx-5 img-fluid mb-5"
            />{" "}
            <img
              src={ultraWatch2}
              alt="Watch"
              className="mb-5 mx-5 img-fluid"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Samsung</h6>
            <h5 className="product-title">New Samsung Watch Ultra S2</h5>
            <ReactStars
              count={5}
              size={23}
              value={4}
              edit={false}
              activeColor="#febd69"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
              quisquam! Suscipit tenetur corporis libero enim earum, ratione,
              dolores facere. Blanditiis voluptatibus eum itaque obcaecati?
            </p>
            <p className="price">₹20,000/-</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-1">
              <button className="border-0 bg-transparent">
                <lord-icon
                  className="img"
                  src="https://cdn.lordicon.com/mfmkufkr.json"
                  trigger="hover"
                  colors="primary:#1c1c1b"
                  style={{ width: "27px", height: "27px" }}
                ></lord-icon>{" "}
              </button>
              <button className="border-0 bg-transparent">
                <creattie-embed
                  src="https://d1jj76g3lut4fe.cloudfront.net/saved_colors/82910/OHb6H6qcu7za1wx7.json"
                  delay="1"
                  speed="100"
                  frame_rate="24"
                  stroke_width="15"
                  trigger="hover"
                  style={{ width: "32px", height: "32px" }}
                ></creattie-embed>
              </button>
              <button className="border-0 bg-transparent">
                <lord-icon
                  className="img"
                  src="https://cdn.lordicon.com/rsbokaso.json"
                  trigger="hover"
                  colors="primary:#1c1c1b"
                  style={{ width: "27px", height: "27px" }}
                ></lord-icon>
              </button>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={`${
          location.pathname === "/store" ? `gr-${grid}` : "col-3"
        } `}
      >
        <Link to="/product/:id" className="product-card position-relative">
          <div className="wishlist-icons position-absolute">
            <button className="border-0 bg-transparent">
              <lord-icon
                className="img"
                src="https://cdn.lordicon.com/xyboiuok.json"
                trigger="hover"
                colors="primary:#1c1c1b"
                style={{ width: "27px", height: "27px" }}
              ></lord-icon>
            </button>
          </div>
          <div className="product-image">
            <img
              src={ultraWatch}
              alt="Watch"
              className="mb-5 mx-5 img-fluid mb-5"
            />{" "}
            <img
              src={ultraWatch2}
              alt="Watch"
              className="mb-5 mx-5 img-fluid"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Samsung</h6>
            <h5 className="product-title">New Samsung Watch Ultra S2</h5>
            <ReactStars
              count={5}
              size={23}
              value={4}
              edit={false}
              activeColor="#febd69"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
              quisquam! Suscipit tenetur corporis libero enim earum, ratione,
              dolores facere. Blanditiis voluptatibus eum itaque obcaecati?
            </p>
            <p className="price">₹20,000/-</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-1">
              <button className="border-0 bg-transparent">
                <lord-icon
                  className="img"
                  src="https://cdn.lordicon.com/mfmkufkr.json"
                  trigger="hover"
                  colors="primary:#1c1c1b"
                  style={{ width: "27px", height: "27px" }}
                ></lord-icon>{" "}
              </button>
              <button className="border-0 bg-transparent">
                <creattie-embed
                  src="https://d1jj76g3lut4fe.cloudfront.net/saved_colors/82910/OHb6H6qcu7za1wx7.json"
                  delay="1"
                  speed="100"
                  frame_rate="24"
                  stroke_width="15"
                  trigger="hover"
                  style={{ width: "32px", height: "32px" }}
                ></creattie-embed>
              </button>
              <button className="border-0 bg-transparent">
                <lord-icon
                  className="img"
                  src="https://cdn.lordicon.com/rsbokaso.json"
                  trigger="hover"
                  colors="primary:#1c1c1b"
                  style={{ width: "27px", height: "27px" }}
                ></lord-icon>
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default FeaturedCard;
