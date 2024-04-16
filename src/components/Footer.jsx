import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Github,
  Instagram,
  Pinterest,
  Subscribe,
  Twitter,
  iconNewsLatter,
} from "../assets/assets";

const Footer = () => {
  return (
    <>
      <footer className="py-3 footer">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-md-5">
              <div className="footer-top-data d-flex gap-3 align-items-center ">
                <img src={iconNewsLatter} alt="Newsletter" />
                <h3 className="mb-0 text-white">Sign Up for Latest Drops</h3>
              </div>
            </div>
            <div className="col-md-7 mt-md-0 mt-3">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control p-2"
                  placeholder="Your Email Address..."
                  aria-label="Your Email Address..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text gap-2 Link" id="basic-addon2">
                  Subscribe <img src={Subscribe} alt="Subscribe" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-white mb-4">Contact Us</h5>
              <div className="footer-down">
                <address className="text-white Link">
                  Hno.552 Sector-23,
                  <br />
                  Faridabad Haryana, <br />
                  PinCode: 121005
                </address>
                <div className="d-flex flex-column m-sm-1">
                  <a className="text-white Link" href="tel:+">
                    (+91) 87000-(264)-51
                  </a>
                  <a
                    className="text-white mt-2 Link"
                    href="mailto:rajusolanki787@gmail.com"
                  >
                    rajusolanki787@gmail.com
                  </a>
                </div>
              </div>
              <div className="social-icons mt-3">
                <ul className="wrapper">
                  <li className="icon facebook">
                    <span className="tooltip">Facebook</span>
                    <span>
                      <i className="fab fa-facebook-f">
                        {" "}
                        <Link to="/">
                          <img
                            src={Facebook}
                            alt="Facebook"
                            className="footer-img"
                          />
                        </Link>
                      </i>
                    </span>
                  </li>
                  <li className="icon twitter">
                    <span className="tooltip">Twitter</span>
                    <span>
                      <i className="fab fa-twitter">
                        <Link to="/">
                          <img src={Twitter} alt="Twitter" />
                        </Link>
                      </i>
                    </span>
                  </li>
                  <li className="icon instagram">
                    <span className="tooltip">Instagram</span>
                    <span>
                      <i className="fab fa-instagram">
                        {" "}
                        <Link to="/">
                          <img src={Instagram} alt="Instagram" />
                        </Link>
                      </i>
                    </span>
                  </li>
                  <li className="icon pinterest">
                    <span className="tooltip">Pinterest</span>
                    <span>
                      <i className="fab fa-pinterest">
                        {" "}
                        <Link to="/">
                          <img src={Pinterest} alt="Pinterest" />
                        </Link>
                      </i>
                    </span>
                  </li>

                  <li className="icon github">
                    <span className="tooltip">Github</span>
                    <span>
                      <i className="fab fa-github">
                        {" "}
                        <Link to="/">
                          <img src={Github} alt="Github" />
                        </Link>
                      </i>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-lower-section col-3 mb-4 mb-md-0">
              <h5 className="text-white mb-4">Information</h5>
              <div className="footer-links d-flex flex-column">
                <Link
                  to="/privacy-policy"
                  className="Link text-white py-2 mb-1"
                >
                  Privacy Policy
                </Link>
                <Link to="/refund-policy" className="Link text-white py-2 mb-1">
                  Refund Policy
                </Link>
                <Link
                  to="/shipping-policy"
                  className="Link text-white py-2 mb-1"
                >
                  Shipping Policy
                </Link>
                <Link
                  to="/terms-and-conditions"
                  className="Link text-white py-2 mb-1"
                >
                  Terms & Conditions
                </Link>
                <Link to="/blogs" className=" Link text-white py-2 mb-1">
                  Blogs
                </Link>
              </div>
            </div>
            <div className="footer-lower-sections col-3 mb-4">
              <h5 className="text-white mb-4">Account</h5>
              <div className="footer-links d-flex  flex-column">
                <Link to="/" className="Link text-white py-2 mb-1">
                  Search
                </Link>
                <Link to="/" className="Link text-white py-2 mb-1">
                  About Us
                </Link>
                <Link to="/" className="Link text-white py-2 mb-1">
                  FAQ
                </Link>
                <Link to="/" className="Link text-white py-2 mb-1">
                  Contact
                </Link>
                <Link to="/" className=" Link text-white py-2 mb-1">
                  Size Chart
                </Link>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <h5 className="text-white mb-4">Quick Links</h5>
              <div className="footer-links d-flex flex-column">
                <Link to="/" className="Link text-white py-2 mb-1">
                  Accessories
                </Link>
                <Link to="/" className="Link text-white py-2 mb-1">
                  Laptops
                </Link>
                <Link to="/" className="Link text-white py-2 mb-1">
                  Headphones
                </Link>
                <Link to="/" className="Link text-white py-2 mb-1">
                  Smart Watches
                </Link>
                <Link to="/" className=" Link text-white py-2 mb-1">
                  Tablets
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()} Powered by UNTLD.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
