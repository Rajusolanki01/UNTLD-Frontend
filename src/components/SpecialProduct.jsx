import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const SpecialProduct = ({ productData, index }) => {
  const [hours, setHours] = useState(1);
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(1);

  useEffect(() => {
    const totalSeconds = 7 * 24 * 60 * 60;
    let remainingSeconds = totalSeconds;

    const timer = setInterval(() => {
      remainingSeconds--;

      if (remainingSeconds < 0) {
        clearInterval(timer);
      } else {
        const hours = Math.floor(remainingSeconds / 3600);
        const minutes = Math.floor((remainingSeconds % 3600) / 60);
        const seconds = remainingSeconds % 60;

        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  return (
    <div className="special-product-card me-3" key={index}>
      <div className="card-mobile d-flex justify-content-between">
        <div className="w-100 d-flex align-items-center">
          <img
            src={productData?.images[0]?.url}
            alt="Watch"
            className="w-75 img-fluid special-card-img"
          />
        </div>
        <div className="special-product-content">
          <h5 className="brand">{productData?.brand}</h5>{" "}
          <Link>
            <h6 className="title text-black d-flex flex-wrap">
              {productData?.title.substr(0, 30) + ".."}
            </h6>
          </Link>
          <ReactStars
            count={5}
            size={23}
            value={
              !isNaN(parseFloat(productData?.totalrating))
                ? parseFloat(productData?.totalrating)
                : 0
            }
            edit={false}
            activeColor="#febd69"
          />
          <p className="price">
            <span className="red-p">
              {" "}
              ₹ {parseFloat(productData?.price).toLocaleString("en-IN")} /-
            </span>
            &nbsp;
            <strike>
              ₹ {parseFloat(productData?.price + 100).toLocaleString("en-IN")}{" "}
              /-
            </strike>
          </p>
          <div className="discount-till d-flex align-items-center gap-3">
            <p className="mb-0">
              <b>7 &nbsp;</b>Days
            </p>
            <div className="badge-circle d-flex justify-content-center gap-2 align-items-center">
              <span className="py-1 p-1">{formattedHours}</span>:
              <span className="py-1 p-2">{formattedMinutes}</span>:
              <span className="py-1 p-2">{formattedSeconds}</span>
            </div>
          </div>
          <div className="product-count mt-3">
            <p>Products:&nbsp;{productData?.quantity}</p>
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                role="progressbar"
                aria-valuenow={
                  productData?.quantity === 0
                    ? 0
                    : (productData?.sold / productData?.quantity) * 100
                }
                aria-valuemin={0}
                aria-valuemax={productData?.quantity}
                style={{
                  width: `${
                    productData?.quantity === 0
                      ? 0
                      : (productData?.sold / productData?.quantity) * 100
                  }%`,
                }}
              ></div>
            </div>
          </div>
          <Link to={`/product/${productData?._id}`} className="mt-3">
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
              <p className="cart-text">See Product</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
