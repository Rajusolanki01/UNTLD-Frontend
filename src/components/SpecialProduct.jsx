import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { Watch2 } from "../assets/assets";

const SpecialProduct = () => {
  return (
    <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
      <div className="special-product-card">
        <div className="d-flex justify-content-between">
          <div className="w-50 d-flex align-items-center">
            <img src={Watch2} alt="Watch" className="w-75 img-fluid" />
          </div>
          <div className="special-product-content">
            <h5 className="brand">Samung</h5>{" "}

            <Link>
              <h6 className="title text-black d-flex flex-wrap">
                Samsung Galaxy Watch Series 7
              </h6>
            </Link>
            <ReactStars
              count={5}
              size={23}
              value={3}
              edit={false}
              activeColor="#febd69"
            />
            <p className="price">
              <span className="red-p">₹50,000/-</span>&nbsp;
              <strike>₹70,000</strike>
            </p>
            <div className="discount-till d-flex align-items-center gap-3">
              <p className="mb-0">
                <b>7 </b>Days
              </p>
              <div className="badge-circle d-flex gap-2 align-items-center">
                <span className="">1</span>:<span className="">1</span>:
                <span className="">1</span>
              </div>
            </div>
            <div className="product-count mt-3">
              <p>Products: 5</p>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated  bg-success"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "45%" }}
                ></div>
              </div>
            </div>
            <Link to="/cart" className="mt-3">
              <button className="CartBtn">
                <span className="IconContainer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 576 512"
                    fill="rgb(17, 17, 17)"
                    className="cart"
                  >
                    <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                  </svg>
                </span>
                <p className="cart-text">Add to Cart</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
