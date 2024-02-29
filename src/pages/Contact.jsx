import React from "react";
import BreadCrum from "../components/BreadCrum";
import { FaHome } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { IoInformationCircleSharp } from "react-icons/io5";
import Meta from "../components/Meta";
import Container from "../components/Container";

const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrum title="Contact Us" />
      <Container class1="contact-wrapper home-wrapper-2 py-4">
        <div className="row">
          <div className="col-lg-12 col-md-12 mb-5">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14044.308294549328!2d77.28178002766526!3d28.356519346174668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc043eb94e6d%3A0x8142870f7db64fdf!2sSector%2023%2C%20Faridabad%2C%20Haryana!5e0!3m2!1sen!2sin!4v1706030083199!5m2!1sen!2sin"
              style={{ border: "0", width: "100%", height: "450px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-lg-12 col-md-12 mb-5 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between">
              <div>
                <h4 className="contact-title mb-4">Contact</h4>
                <form action="" className="d-flex flex-column gap-3">
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Mobile Number"
                    />
                  </div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      className="w-100 form-control"
                      cols="4"
                      rows="3"
                      placeholder="Comments"
                    ></textarea>
                  </div>
                  <div>
                    <button className="send-button">
                      <div className="svg-wrapper-1">
                        <div className="svg-wrapper">
                          <svg
                            className="svg-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="22"
                            height="22"
                          >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path
                              fill="currentColor"
                              d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <span className="span-text">Send</span>
                    </button>
                  </div>
                </form>
              </div>
              <div>
                <h4 className="contact-title mb-4">Get in Touch with us</h4>
                <div className="">
                  <ul className="ps-0">
                    <li className="mb-3 d-flex gap-3 align-items-center">
                      <FaHome className="fs-5 home text-black-50" />
                      <address className="mb-0 Link text-black-50">
                        Hno.552 Sector-23, Faridabad Haryana, PinCode: 121005
                      </address>
                    </li>
                    <li className="mb-3 d-flex gap-3 align-items-center">
                      <MdLocalPhone className="fs-5 text-black-50" />
                      <a className="text-black-50 Link" href="tel:+">
                        (+91) 87000-(264)-51
                      </a>
                    </li>
                    <li className="mb-3 d-flex gap-3 align-items-center">
                      <IoIosMail className="fs-5 text-black-50" />
                      <a
                        className="text-black-50 Link"
                        href="mailto:rajusolanki787@gmail.com"
                      >
                        rajusolanki787@gmail.com
                      </a>
                    </li>
                    <li className="mb-3 d-flex gap-3 align-items-center">
                      <IoInformationCircleSharp className="fs-5 text-black-50" />
                      <p className="mb-0 text-black-50 Link">
                        Monday - Friday, 10 AM - 8PM
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
