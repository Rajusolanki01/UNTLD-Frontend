import React, { useCallback, useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { UNTLD } from "../assets/assets";
import { useDispatch, useSelector } from "react-redux";
import {
  getASingleUser,
  getUserCart,
  logoutUser,
} from "../feature/user/userSlice";
import {
  KEY_ACCESS_TOKEN,
  KEY_USER_ID,
  getItem,
  removeItem,
} from "../utils/localStoageManager";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { getASingleProducts } from "../feature/product/productSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [cartTotalPrice, setCartTotalPrice] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [paginate, setPaginate] = useState(true);
  const [productOption, setProductOption] = useState([]);
  const cartState = useSelector((state) => state?.auth?.userCart);
  const authState = useSelector((state) => state?.auth.singleUser);
  const productState = useSelector((state) => state?.product.product);
  const id = getItem(KEY_USER_ID);

  const getTheUserCart = useCallback(() => {
    dispatch(getUserCart());
  }, [dispatch]);

  const getSingleUserId = useCallback(() => {
    dispatch(getASingleUser(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (productState !== null) {
      let data = [];
      for (let index = 0; index < productState?.length; index++) {
        const element = productState[index];
        data.push({
          id: index,
          product: element._id,
          name: element?.title.substr(0, 25),
        });
      }
      setProductOption(data);
    }
  }, [productState]);

  useEffect(() => {
    getTheUserCart();
    getSingleUserId();
  }, [getTheUserCart, getSingleUserId]);

  useEffect(() => {
    if (cartState !== null) {
      let sum = 0;

      for (let index = 0; index < cartState?.length; index++) {
        sum =
          sum + Number(cartState[index]?.quantity * cartState[index]?.price);
      }

      setCartTotalPrice(sum);
    }
  }, [cartState]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.lordicon.com/lordicon.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsCheckboxChecked(!isCheckboxChecked);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const handleLogout = async (e) => {
    try {
      await dispatch(logoutUser(e.target.value));
      removeItem(KEY_ACCESS_TOKEN);
      removeItem(KEY_USER_ID);
      navigate("/login");
    } catch (error) {
      throw error;
    }
  };

  // useEffect(() => {
  //   const disableRightClick = (event) => {
  //     event.preventDefault();
  //   };

  //   window.addEventListener("contextmenu", disableRightClick);

  //   return () => {
  //     window.removeEventListener("contextmenu", disableRightClick);
  //   };
  // }, []);

  // useEffect(() => {
  //   const handleKeyDown = (event) => {
  //     if (
  //       event.ctrlKey &&
  //       (event.keyCode === 67 || event.keyCode === 86) //? Ctrl + C / Ctrl + V
  //     ) {
  //       event.preventDefault();
  //     }
  //   };

  //   window.addEventListener("keydown", handleKeyDown);

  //   return () => {
  //     window.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, []);

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
          <div className="row d-flex justify-content-between align-items-center position-relative">
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
            <div className="col-5 drop-btn d-md-none">
              <div className="hamburger dropdowns" onClick={toggleDropdown}>
                <input
                  className="checkbox"
                  type="checkbox"
                  checked={isCheckboxChecked}
                  onChange={() => setIsCheckboxChecked(!isCheckboxChecked)}
                />
                <svg fill="none" viewBox="0 0 50 50" height={50} width={50}>
                  <path
                    className="lineTop line"
                    strokeLinecap="round"
                    strokeWidth={4}
                    stroke="yellow"
                    d="M6 11L44 11"
                  />
                  <path
                    strokeLinecap="round"
                    strokeWidth={4}
                    stroke="black"
                    d="M6 24H43"
                    className="lineMid line"
                  />
                  <path
                    strokeLinecap="round"
                    strokeWidth={4}
                    stroke="black"
                    d="M6 37H43"
                    className="lineBottom line"
                  />
                </svg>
                {isDropdownOpen && (
                  <div className="menu">
                    <div className="header-upper-links d-flex flex-column gap-4">
                      <div>
                        <Link
                          to="/"
                          className="d-flex align-items-center gap-2 text-white"
                        >
                          <lord-icon
                            className="img"
                            src="https://cdn.lordicon.com/kkvxgpti.json"
                            trigger="loop"
                            delay="2000"
                            colors="primary:#ffffff"
                            style={{ width: "38px", height: "38px" }}
                          ></lord-icon>
                          <p className="mb-0">
                            Search <br /> Products
                          </p>
                        </Link>
                      </div>
                      <div>
                        <Link
                          to="/compare-products"
                          className="d-flex align-items-center gap-2 text-white"
                        >
                          <lord-icon
                            className="img"
                            src="https://cdn.lordicon.com/rsbokaso.json"
                            trigger="loop"
                            delay="4000"
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
                            trigger="loop"
                            delay="4000"
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
                          to={
                            authState?.singleUser === null
                              ? "/login"
                              : "/profile"
                          }
                          className="d-flex align-items-center gap-2 text-white"
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/kthelypq.json"
                            trigger="loop"
                            delay="4000"
                            colors="primary:#ffffff"
                            style={{ width: "38px", height: "38px" }}
                          ></lord-icon>
                          {id === null ? (
                            <p className="mb-0 me-1 text-white">
                              Log in <br /> My Account
                            </p>
                          ) : (
                            <p className="mb-0 me-1 text-white">
                              Welcome <br />{" "}
                              {authState.firstname && authState.lastname
                                ? `${authState.firstname} ${authState.lastname}`
                                : ""}
                            </p>
                          )}
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
                            trigger="loop"
                            delay="4000"
                            colors="primary:#ffffff"
                            style={{ width: "38px", height: "38px" }}
                          ></lord-icon>
                          <div className="d-flex flex-column gap-1">
                            {id === null ? (
                              <>
                                <span className="badge bg-white  text-dark w-75 ms-1 ">
                                  0
                                </span>
                                <p
                                  className="mb-0 mt-1"
                                  style={{ fontSize: "13px" }}
                                >
                                  ₹ {parseFloat(0).toLocaleString("en-IN")} /-
                                </p>
                              </>
                            ) : (
                              <>
                                <span className="badge bg-white  text-dark w-50 ms-3 ">
                                  {cartState?.length ? cartState?.length : 0}
                                </span>
                                <p
                                  className="mb-0 mt-1"
                                  style={{ fontSize: "13px" }}
                                >
                                  ₹{" "}
                                  {parseFloat(
                                    cartTotalPrice ? cartTotalPrice : 0
                                  ).toLocaleString("en-IN")}{" "}
                                  /-
                                </p>
                              </>
                            )}
                          </div>
                        </Link>
                      </div>
                      <div onClick={handleLogout}>
                        {id === null ? (
                          <></>
                        ) : (
                          <>
                            {" "}
                            <Link
                              to="/logout"
                              className="d-flex align-items-center gap-2 text-white"
                            >
                              <lord-icon
                                className="img"
                                src="https://cdn.lordicon.com/ygvjgdmk.json"
                                trigger="loop"
                                delay="4000"
                                colors="primary:#ffffff"
                                style={{ width: "37px", height: "37px" }}
                              ></lord-icon>
                              <p className="mb-0">Logout</p>
                            </Link>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="col-5 d-none d-md-block">
              <div className="input-group">
                <Typeahead
                  id="pagination-example"
                  onPaginate={(e) => setPaginate(e.target.value)}
                  onChange={(selected) => {
                    if (selected && selected.length > 0) {
                      const productId = selected[0]?.product;
                      if (productId) {
                        navigate(`/product/${productId}`);
                        dispatch(getASingleProducts(productId));
                      }
                    } else {
                      navigate(`/store`);
                    }
                  }}
                  options={productOption}
                  paginate={paginate}
                  labelKey={"name"}
                  placeholder="Search For Product Here..."
                />
                <span className="input-group-text" id="basic-addon2">
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
                <div className="dropdown">
                  <button
                    className="dropdown-toggle-1 ms-2 bg-transparent border-0 d-flex align-items-center gap-2"
                    type="button"
                    id="dropdownMenuButton1"
                    aria-expanded="true"
                  >
                    <lord-icon
                      src="https://cdn.lordicon.com/kthelypq.json"
                      trigger="hover"
                      colors="primary:#ffffff"
                      style={{ width: "38px", height: "38px" }}
                    ></lord-icon>
                    {id === null ? (
                      <p className="mb-0 me-1 text-white">
                        Log in <br /> My Account
                      </p>
                    ) : (
                      <p className="mb-0 me-1 text-white">
                        Welcome <br />{" "}
                        {authState.firstname && authState.lastname
                          ? `${authState.firstname} ${authState.lastname}`
                          : ""}
                      </p>
                    )}
                  </button>
                  <ul
                    className={`dropdown-menu  bg-dark ${
                      dropdownOpen ? " show" : ""
                    }`}
                    aria-labelledby="dropdownMenuButton1"
                  >
                    {id === null ? (
                      <li>
                        <Link
                          to="/login"
                          className="d-flex fs-6 align-items-center gap-2 dropdown-item text-white"
                          onClick={() => {
                            setDropdownOpen(false);
                          }}
                        >
                          Log in My Account
                        </Link>
                      </li>
                    ) : (
                      <>
                        <li>
                          <Link
                            to="/profile"
                            className="d-flex fs-6 align-items-center gap-2 dropdown-item text-white"
                            onClick={() => {
                              setDropdownOpen(false);
                            }}
                          >
                            Profile
                          </Link>
                        </li>
                        <li>
                          <Link
                            to=""
                            onClick={handleLogout}
                            className="d-flex fs-6 align-items-center gap-2 dropdown-item text-white"
                          >
                            Logout
                          </Link>
                        </li>
                      </>
                    )}
                  </ul>
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
                      {id === null ? (
                        <>
                          <span className="badge bg-white  text-dark w-75 ms-1 ">
                            0
                          </span>
                          <p className="mb-0 mt-1" style={{ fontSize: "13px" }}>
                            ₹ {parseFloat(0).toLocaleString("en-IN")} /-
                          </p>
                        </>
                      ) : (
                        <>
                          <span className="badge bg-white  text-dark w-50 ms-3 ">
                            {cartState?.length ? cartState?.length : 0}
                          </span>
                          <p className="mb-0 mt-1" style={{ fontSize: "13px" }}>
                            ₹{" "}
                            {parseFloat(
                              cartTotalPrice ? cartTotalPrice : 0
                            ).toLocaleString("en-IN")}{" "}
                            /-
                          </p>
                        </>
                      )}
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
                      aria-expanded={dropdownOpen ? "true" : "false"}
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
                      className={`dropdown-menu ${
                        dropdownOpen ? " shows" : ""
                      }`}
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li onClick={closeDropdown}>
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
                        <Link to="/orders" className="dropdown-item text-white">
                          {" "}
                          My Orders
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
                      <li>
                        <Link
                        to="https://untld-admin.vercel.app/"
                          target="_blank"
                        >
                          <button className="cta mt-2 ms-1">
                            <span>Admin</span>
                            <svg width="15px" height="10px" viewBox="0 0 13 10">
                              <path d="M1,5 L11,5"></path>
                              <polyline points="8 1 12 5 8 9"></polyline>
                            </svg>
                          </button>
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

                    <NavLink to="/orders">
                      {" "}
                      <span>My Orders</span>
                    </NavLink>
                    <NavLink to="/blogs">
                      {" "}
                      <span>Blogs</span>
                    </NavLink>
                    <NavLink to="/contact">
                      {" "}
                      <span>Contact</span>
                    </NavLink>
                    <NavLink
                      to="https://untld-admin.vercel.app/"
                      target="_blank"
                    >
                      {" "}
                      <button className="cta">
                        <span>Admin</span>
                        <svg width="15px" height="10px" viewBox="0 0 13 10">
                          <path d="M1,5 L11,5"></path>
                          <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                      </button>
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
