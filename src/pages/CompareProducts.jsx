import React, { useEffect } from "react";
import BreadCrum from "../components/BreadCrum";
import Color from "../components/Color";
import Meta from "../components/Meta";
import {
  Watch,
  Watch2,
  appleWatchUltra,
  appleWatchUltra2,
  ssamsungWatchUltra,
  ssamsungWatchUltra2,
} from "../assets/assets";
import Container from "../components/Container";

const CompareProducts = () => {
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
      <Meta title={"Compare Products"} />
      <BreadCrum title="Compare Products" />
      <Container class1="compare-product-wrapper home-wrapper-2 py-5 ">
        <div className="row">
          <div className="col-3 col-66">
            <div className="compare-product-card position-relative mb-0">
              <div className="position-absolute cross">
                <script src="https://cdn.lordicon.com/lordicon.js"></script>
                <lord-icon
                  src="https://cdn.lordicon.com/nqtddedc.json"
                  trigger="boomerang"
                  colors={{ primary: "#ffffff" }}
                  style={{ width: "30px", height: "30px" }}
                ></lord-icon>
              </div>
              <div className="product-card">
                <div className="product-image">
                  <img
                    src={ssamsungWatchUltra}
                    alt="Watch"
                    className="mb-4 img-fluid prod-img"
                  />{" "}
                  <img
                    src={ssamsungWatchUltra2}
                    alt="Watch"
                    className="mb-4 img-fluid prod-img"
                  />
                </div>
              </div>
              <div className="compare-product-details">
                <h5 className="title">Samsung Galary Watch 10mm</h5>
                <h6 className="price">₹50,000/-</h6>
              </div>
              <div className="product-detail">
                <h5>Brand:</h5>
                <p className="mt-2">Samsung</p>
              </div>
              <div className="product-detail">
                <h5>Type:</h5>
                <p className="mt-2">Watch</p>
              </div>
              <div className="product-detail">
                <h5>SKU:</h5>
                <p className="mt-2">SAM003</p>
              </div>
              <div className="product-detail">
                <h5>Availability:</h5>
                <p className="mt-2">In Stock</p>
              </div>
              <div className="product-detail">
                <h5>Color:</h5>
                <Color />
              </div>
              <div className="product-detail">
                <h5>Size:</h5>
                <div className="d-flex gap-2 mt-2">
                  <p>S</p>
                  <p>M</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3 col-66">
            <div className="compare-product-card position-relative mb-0">
              <div className="position-absolute cross ">
                <lord-icon
                  src="https://cdn.lordicon.com/nqtddedc.json"
                  trigger="hover"
                  style={{ width: "30px", height: "30px" }}
                ></lord-icon>
              </div>
              <div className="product-card">
                <div className="product-image">
                  <img
                    src={appleWatchUltra}
                    alt="Watch"
                    className="mb-4 img-fluid prod-img"
                  />{" "}
                  <img
                    src={appleWatchUltra2}
                    alt="Watch"
                    className="mb-4 img-fluid prod-img"
                  />
                </div>
              </div>
              <div className="compare-product-details">
                <h5 className="title">Apple Ultra 8 Watch 9mm</h5>
                <h6 className="price">₹90,000/-</h6>
              </div>
              <div className="product-detail">
                <h5>Brand:</h5>
                <p className="mt-2">Apple</p>
              </div>
              <div className="product-detail">
                <h5>Type:</h5>
                <p className="mt-2">Watch</p>
              </div>
              <div className="product-detail">
                <h5>SKU:</h5>
                <p className="mt-2">APL008</p>
              </div>
              <div className="product-detail">
                <h5>Availability:</h5>
                <p className="mt-2">In Stock</p>
              </div>
              <div className="product-detail">
                <h5>Color:</h5>
                <Color />
              </div>
              <div className="product-detail">
                <h5>Size:</h5>
                <div className="d-flex gap-2 mt-2">
                  <p>S</p>
                  <p>M</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CompareProducts;
