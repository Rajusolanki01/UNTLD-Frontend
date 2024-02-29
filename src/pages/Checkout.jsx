import React, { useState } from "react";
import BreadCrum from "../components/BreadCrum";
import Meta from "../components/Meta";
import { UNTLD, Watch2 } from "../assets/assets";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Container from "../components/Container";

const Checkout = () => {
  const [loading, setLoading] = useState(false);

  const startoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };
  return (
    <>
      <Meta title={"Checkout"} />
      <BreadCrum title="Checkout" />

      <Container class1="checkout-wrapper home-wrapper-2 py-3">
        <div className="row">
          <div className="col-7 bg-white py-4">
            <div className="checkout-left-data">
              <img
                src={UNTLD}
                alt=""
                style={{ width: "130px", height: "28px" }}
              />
              <div className="mt-2">
                {" "}
                <nav
                  aria-label="breadcrumb"
                  style={{
                    "--bs-breadcrumb-divider": "var(--divider-url)",
                  }}
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item total-price">
                      <Link to="/cart" className="text-dark">
                        Cart
                      </Link>
                    </li>
                    <li className="breadcrumb-item active total-price">
                      Information
                    </li>
                    <li className="breadcrumb-item active total-price">
                      Shipping
                    </li>
                    <li
                      className="breadcrumb-item active total-price"
                      aria-current="page"
                    >
                      Payments
                    </li>
                  </ol>
                </nav>
              </div>
              <h4 className="title total">Contact Information</h4>
              <p className="user-detail total">
                Raju Solanki (rajusolanki787@gmail.com)
              </p>
              <h4 className="mb-3">Shipping Address</h4>
              <form
                action=""
                className="d-flex gap-2 flex-wrap justify-content-between"
              >
                <div className="w-100">
                  <select
                    name=""
                    id="floatingInput"
                    className="form-control form-select"
                  >
                    {" "}
                    <option value="" selected disabled>
                      Saved Address
                    </option>
                    <option value="Address-1">
                      Hno.552 Sector-23, Faridabad Haryana, PinCode: 121005
                    </option>
                    <option value="Adress-2">
                      Hno.552/80 Sector-23, Faridabad Haryana, PinCode: 121005
                    </option>
                  </select>
                </div>
                <div className="w-100">
                  <select
                    name=""
                    id="floatingInput"
                    className="form-control form-select"
                  >
                    {" "}
                    <option value="" selected disabled id="floatingInput">
                      Country/Region
                    </option>
                    <option value="India">India</option>
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                    <option value="Japan">Japan</option>
                    <option value="Brazil">Brazil</option>
                    <option value="South Africa">South Africa</option>
                  </select>
                </div>

                <div className="flex-grow-1">
                  <input
                    type="text"
                    className="form-control info-control"
                    placeholder="First Name"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    className="form-control  info-control"
                    placeholder="Last Name"
                  />
                </div>

                <div className="w-100">
                  <input
                    type="text"
                    className="form-control  info-control"
                    placeholder="Your Address"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    className="form-control  info-control"
                    placeholder="Appartment, suite, etc (optional)"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    className="form-control  info-control"
                    placeholder="City"
                  />
                </div>
                <div className="flex-grow-1">
                  <select name="" id="" className="form-control form-select">
                    <option value="" selected disabled>
                      State
                    </option>
                    <option value="Haryana">Haryana</option>
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    className="form-control info-control"
                    placeholder="Zipcode"
                  />
                </div>
                <div className="w-100 mt-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link
                      to="/cart"
                      className="font d-flex align-items-center gap-2 text-dark"
                    >
                      <BiArrowBack
                        style={{ fontSize: "20px" }}
                        className="font"
                      />
                      Return to Cart
                    </Link>
                    {!loading ? (
                      <Link to="">
                        <button
                          className="buttons font-2"
                          onClick={startoading}
                        >
                          Continue to Shipping
                        </button>
                      </Link>
                    ) : (
                      <div className="typing-indicator">
                        <div className="typing-circle"></div>
                        <div className="typing-circle"></div>
                        <div className="typing-circle"></div>
                        <div className="typing-shadow"></div>
                        <div className="typing-shadow"></div>
                        <div className="typing-shadow"></div>
                      </div>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bottom py-0">
              <div className="d-flex flex-wrap align-items-center mb-2 gap-3">
                <div className="w-75 side-card d-flex flex-wrap gap-4">
                  <div className="side-card w-25 position-relative">
                    <span
                      style={{ top: "-9%", right: "-5%" }}
                      className="badge bg-secondary text-white rounded-circle position-absolute"
                    >
                      1
                    </span>
                    <div className="p-1 border bg-white">
                      <img
                        src={Watch2}
                        alt="Product Img"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div>
                    <h5 className="title mt-1">Apple Watch Series 9</h5>
                    <p className="mb-1">Titanium White 49mm Stainless Steel</p>
                    <p className="mb-0">M / White</p>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h5>₹90,500</h5>
                </div>
              </div>
              <div className="d-flex flex-wrap align-items-center mb-2 gap-3">
                <div className="w-75 side-card d-flex flex-wrap gap-4">
                  <div className="side-card w-25 position-relative">
                    <span
                      style={{ top: "-9%", right: "-5%" }}
                      className="badge bg-secondary text-white rounded-circle position-absolute"
                    >
                      1
                    </span>
                    <div className="p-1 border bg-white">
                      <img
                        src={Watch2}
                        alt="Product Img"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div>
                    <h5 className="title mt-1">Apple Watch Series 9</h5>
                    <p className="mb-1">Titanium White 49mm Stainless Steel</p>
                    <p className="mb-0">M / White</p>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h5>₹90,500</h5>
                </div>
              </div>
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p>Subtotal</p>
                <p>₹90,500</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0">Shipping</p>
                <p className="mb-0">₹500</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center border-bottom py-4">
              <h4>Total</h4>
              <h5>₹90,500</h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
