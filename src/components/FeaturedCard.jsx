import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { ultraWatch, ultraWatch2 } from "../assets/assets";

const FeaturedCard = ({ grid, data }) => {
  let location = useLocation();

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
      {data &&
        data.map((item, index) => {
          return (
            <div
              key={index}
              className={`${
                location.pathname === "/store" ? `gr-${grid}` : "col-3"
              } `}
            >
              <div className="product-card position-relative">
                <div className="wishlist-icons position-absolute">
                  <button className="border-0 bg-transparent">
                    <lord-icon
                      className="img"
                      src="https://cdn.lordicon.com/xyboiuok.json"
                      trigger="click"
                      colors="primary:#1c1c1b"
                      style={{ width: "27px", height: "27px" }}
                    ></lord-icon>
                  </button>
                </div>
                <div>
                  <div>
                    <div className="product-image">
                      <img
                        src={ultraWatch}
                        alt="Watch"
                        className="mb-4 mx-5 img-fluid"
                      />{" "}
                      <img
                        src={ultraWatch2}
                        alt="Watch"
                        className="mb-4 mx-5 img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div className="product-details">
                  <h6 className="brand">{item.brand}</h6>
                  <h5 className="product-title">{item.title}</h5>
                  <ReactStars
                    count={parseInt(item.totalrating)}
                    size={23}
                    value={parseInt(item.totalrating)}
                    edit={false}
                    activeColor="#febd69"
                  />
                  <p
                    className={`description ${
                      grid === 12 ? "d-block" : "d-none"
                    }`}
                  >
                    {item.description}
                  </p>
                  <p className="price">₹ {item.price}/-</p>
                </div>
                <div className="action-bar position-absolute">
                  <div className="d-flex flex-column gap-1">
                    <button className="border-0 bg-transparent">
                      <lord-icon
                        className="img"
                        src="https://cdn.lordicon.com/mfmkufkr.json"
                        trigger="click"
                        colors="primary:#1c1c1b"
                        style={{ width: "27px", height: "27px" }}
                      ></lord-icon>{" "}
                    </button>
                    <div className="border-0 bg-transparent">
                      <Link to="/product/:id">
                        <lord-icon
                          src="https://cdn.lordicon.com/vfczflna.json"
                          trigger="click"
                          stroke="bold"
                          colors="primary:#121331,secondary:#000000"
                          style={{ width: "24px", height: "25px" }}
                        ></lord-icon>
                      </Link>
                    </div>
                    <div className="border-0 bg-transparent">
                      <lord-icon
                        className="img"
                        src="https://cdn.lordicon.com/rsbokaso.json"
                        trigger="click"
                        colors="primary:#1c1c1b"
                        style={{ width: "27px", height: "27px" }}
                      ></lord-icon>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default FeaturedCard;
