import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { useDispatch } from "react-redux";
import { addProductWishlist } from "../feature/product/productSlice";

const FeaturedCard = ({ grid, featuredData }) => {
  let location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [wishlist, setWishlist] = useState(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    return storedWishlist ? JSON.parse(storedWishlist) : {};
  });

  const addToWishlist = (id) => {
    const updatedWishlist = { ...wishlist, [id]: !wishlist[id] };
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    dispatch(addProductWishlist(id));
  };

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
      <div
        className={`me-1 product-card-right ${
          location.pathname === "/store"
            ? `gr-${grid}`
            : "col-lg-11 col-md-11 col-sm-3"
        } `}
      >
        <div className="product-card position-relative">
          <div className="wishlist-icons position-absolute">
            <button
              className="border-0 bg-transparent"
              onClick={() => addToWishlist(featuredData?._id)}
            >
              <lord-icon
                className="img"
                src={
                  wishlist[featuredData?._id]
                    ? "https://cdn.lordicon.com/xyboiuok.json"
                    : "https://cdn.lordicon.com/xyboiuok.json"
                }
                trigger="click"
                colors={
                  wishlist[featuredData?._id]
                    ? "primary:#e83a30"
                    : "primary:#1c1c1b"
                }
                style={{ width: "27px", height: "27px" }}
              ></lord-icon>
            </button>
          </div>
          <div>
            <div>
              <div className="product-image">
                <img
                  src={featuredData?.images[0]?.url}
                  alt="Watch"
                  className="mb-4 img-fluid prod-img"
                  onClick={() => navigate(`/product/${featuredData?._id}`)}
                />{" "}
                <img
                  src={featuredData?.images[1]?.url}
                  alt="Watch"
                  className="mb-4 img-fluid prod-img"
                  onClick={() => navigate(`/product/${featuredData?._id}`)}
                />
              </div>
            </div>
          </div>
          <div className="product-details">
            <h6 className="brand">{featuredData?.brand}</h6>
            <h5 className="product-title">
              {featuredData?.title.substr(0, 17) + "..."}
            </h5>
              <ReactStars
                count={5}
                size={23}
                value={
                  !isNaN(parseFloat(featuredData?.totalrating))
                    ? parseFloat(featuredData?.totalrating)
                    : 0
                }
                edit={false}
                activeColor="#febd69"
              />

            <div
              className={`description ${grid === 12 ? "d-block" : "d-none"}`}
            >
              <p
                dangerouslySetInnerHTML={{
                  __html: featuredData?.description,
                }}
              ></p>
            </div>
            <p className="price mt-2">
              ₹ {parseFloat(featuredData?.price).toLocaleString("en-IN")} /-
            </p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-1 mb-0">
              <button className="border-0 bg-transparent">
                <Link to="">
                  <lord-icon
                    className="img"
                    src="https://cdn.lordicon.com/mfmkufkr.json"
                    trigger="click"
                    colors="primary:#1c1c1b"
                    style={{ width: "27px", height: "27px" }}
                  ></lord-icon>
                </Link>
              </button>
              <div className="border-0 bg-transparent product-eye">
                <Link to={`/product/${featuredData?._id}`}>
                  <lord-icon
                    className="img"
                    src="https://cdn.lordicon.com/vfczflna.json"
                    trigger="click"
                    stroke="bold"
                    colors="primary:#121331,secondary:#000000"
                    style={{ width: "24px", height: "24px" }}
                  ></lord-icon>
                </Link>
              </div>
              <div className="border-0 bg-transparent mt-0">
                <button className="border-0 bg-transparent">
                  <lord-icon
                    className="img"
                    src="https://cdn.lordicon.com/rsbokaso.json"
                    trigger="click"
                    colors="primary:#1c1c1b"
                    style={{ width: "27px", height: "27px" }}
                  ></lord-icon>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedCard;
