import React, { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { UNTLD } from "../assets/assets";

const Header = () => {
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
      <header className="header-top-strip py-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0 head">
                Free Shipping Over ₹1000 & Free Returns{" "}
              </p>
            </div>
            <div className="col-6">
              <p className="text-white text-end mb-0 head">
                Hotline:{" "}
                <a className="text-white head" href="tel:+">
                  (+91) 87000-(264)-51
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link to="/" className="text-white">
                  <img
                    style={{ width: "130px", height: "28px" }}
                    src={UNTLD}
                    alt="Brand Name"
                  />
                </Link>
              </h2>
            </div>
            <div className="col-5 d-lg-block d-none">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Product Here..."
                  aria-label="Search Product Here..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text " id="basic-addon2">
                  <lord-icon
                    src="https://cdn.lordicon.com/kkvxgpti.json"
                    trigger="hover"
                    style={{ width: "27px", height: "27px" }}
                  ></lord-icon>
                </span>
              </div>
            </div>
            <div className="col-5 d-lg-block d-none">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link
                    to="/compare-products"
                    className="d-flex align-items-center gap-2 text-white"
                  >
                    <lord-icon
                      className="img"
                      src="https://cdn.lordicon.com/rsbokaso.json"
                      trigger="hover"
                      colors="primary:#ffffff"
                      style={{ width: "38px", height: "38px" }}
                    ></lord-icon>
                    <p className="mb-0">
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/wishlist"
                    className="d-flex align-items-center gap-2 text-white"
                  >
                    <lord-icon
                      className="img"
                      src="https://cdn.lordicon.com/xyboiuok.json"
                      trigger="hover"
                      colors="primary:#ffffff"
                      style={{ width: "38px", height: "38px" }}
                    ></lord-icon>
                    <p className="mb-0">
                      Favourite <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/login"
                    className="d-flex align-items-center gap-2 text-white"
                  >
                    <lord-icon
                      src="https://cdn.lordicon.com/kthelypq.json"
                      trigger="hover"
                      colors="primary:#ffffff"
                      style={{ width: "38px", height: "38px" }}
                    ></lord-icon>
                    <p className="mb-0">
                      Log in <br /> My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/cart"
                    className="d-flex align-items-center gap-2 text-white"
                  >
                    <lord-icon
                      className="img"
                      src="https://cdn.lordicon.com/mfmkufkr.json"
                      trigger="hover"
                      colors="primary:#ffffff"
                      style={{ width: "38px", height: "38px" }}
                    ></lord-icon>
                    <div className="d-flex flex-column gap-1">
                      <span className="badge bg-white  text-dark">0</span>
                      <p className="mb-0">$ 500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center">
                <div>
                  <div className="dropdown">
                    <button
                      className="btns btn-secondary dropdown-toggle me-5 bg-transparent border-0 d-flex align-items-center gap-2"
                      type="button"
                      id="dropdownMenuButton1"
                      aria-expanded="false"
                    >
                      <lord-icon
                        src="https://cdn.lordicon.com/nizfqlnk.json"
                        trigger="hover"
                        colors="primary:#ffffff"
                        style={{ width: "30px", height: "30px" }}
                      ></lord-icon>
                      <span className="me-5 d-inline-block">
                        Shop Categories
                      </span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link to="/" className="dropdown-item text-white">
                          {" "}
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link to="/store" className="dropdown-item text-white">
                          {" "}
                          Our Store
                        </Link>
                      </li>
                      <li>
                        <Link to="/blogs" className="dropdown-item text-white">
                          {" "}
                          Blogs
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/contact"
                          className="dropdown-item text-white"
                        >
                          {" "}
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links d-lg-block d-none">
                  <div className="d-flex align-align-items-center gap-3 ">
                    <NavLink to="/">
                      <span>Home</span>
                    </NavLink>
                    <NavLink to="/store">
                      {" "}
                      <span>Our Store</span>
                    </NavLink>
                    <NavLink to="/blogs">
                      {" "}
                      <span>Blogs</span>
                    </NavLink>
                    <NavLink to="/contact">
                      {" "}
                      <span>Contact</span>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
