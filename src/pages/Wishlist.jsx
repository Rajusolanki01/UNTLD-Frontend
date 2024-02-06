import React from "react";
import BreadCrum from "../components/BreadCrum";
import Meta from "../components/Meta";
import { Watch } from "../assets/assets";
import Container from "../components/Container";

const Wishlist = () => {
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrum title="Wishlist" />
      {
        <Container class1="wishlist-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <div className="position-absolute cross">
                  <lord-icon
                    src="https://cdn.lordicon.com/nqtddedc.json"
                    trigger="hover"
                    style={{ width: "30px", height: "30px" }}
                  ></lord-icon>
                </div>
                <div className="wishlist-card-image">
                  <img src={Watch} alt="WATCH" className="img-fluid w-100" />
                </div>
                <div className="py-3">
                  <h5 className="title">Samsung Galary Ultra Watch 9mm</h5>
                  <h6 className="price">₹50,000/-</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <div className="position-absolute cross">
                  <lord-icon
                    src="https://cdn.lordicon.com/nqtddedc.json"
                    trigger="hover"
                    style={{ width: "30px", height: "30px" }}
                  ></lord-icon>
                </div>
                <div className="wishlist-card-image">
                  <img src={Watch} alt="WATCH" className="img-fluid w-100" />
                </div>
                <div className="py-3">
                  <h5 className="title">Samsung Galary Ultra Watch 9mm</h5>
                  <h6 className="price">₹50,000/-</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <div className="position-absolute cross">
                  <lord-icon
                    src="https://cdn.lordicon.com/nqtddedc.json"
                    trigger="hover"
                    style={{ width: "30px", height: "30px" }}
                  ></lord-icon>
                </div>
                <div className="wishlist-card-image">
                  <img src={Watch} alt="WATCH" className="img-fluid w-100" />
                </div>
                <div className="py-3">
                  <h5 className="title">Samsung Galary Ultra Watch 9mm</h5>
                  <h6 className="price">₹50,000/-</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <div className="position-absolute cross">
                  <lord-icon
                    src="https://cdn.lordicon.com/nqtddedc.json"
                    trigger="hover"
                    style={{ width: "30px", height: "30px" }}
                  ></lord-icon>
                </div>
                <div className="wishlist-card-image">
                  <img src={Watch} alt="WATCH" className="img-fluid w-100" />
                </div>
                <div className="py-3">
                  <h5 className="title">Samsung Galary Ultra Watch 9mm</h5>
                  <h6 className="price">₹50,000/-</h6>
                </div>
              </div>
            </div>
          </div>
        </Container>
      }
    </>
  );
};

export default Wishlist;
