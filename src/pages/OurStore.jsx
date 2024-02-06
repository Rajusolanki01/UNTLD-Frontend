import React, { useState } from "react";
import BreadCrum from "../components/BreadCrum";
import ReactStars from "react-rating-stars-component";
import FeaturedCard from "../components/FeaturedCard";
import Color from "../components/Color";
import Meta from "../components/Meta";
import { Headphone, gr, gr2, gr3, gr4, ultraWatch2 } from "../assets/assets";
import Container from "../components/Container";

const OurStore = () => {
  const [grid, setGrid] = useState(4);

  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrum title="Our Store" />
      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Shop by Categories</h3>
              <div>
                <ul className="ps-0">
                  <li>Watch</li>
                  <li>Tv</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Filter by Product</h3>
              <div>
                <h5 className="sub-title">Availablity</h5>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id=""
                  />
                  <label className="form-check-label" htmlFor="">
                    In Stock (1)
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id=""
                  />
                  <label className="form-check-label" htmlFor="">
                    Out of Stock (0)
                  </label>
                </div>
                <h5 className="sub-title">Price</h5>
                <div className="d-flex align-items-center gap-2">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="From"
                    />
                    <label htmlFor="floatingInput">From</label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput1"
                      placeholder="To"
                    />
                    <label htmlFor="floatingInput1">To</label>
                  </div>
                </div>
                <h5 className="sub-title">Colors</h5>
                <div>
                  <Color />
                </div>
                <h5 className="sub-title">Sizes</h5>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="color-1"
                    />
                    <label className="form-check-label" htmlFor="color-1">
                      S (2)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="color-2"
                    />
                    <label className="form-check-label" htmlFor="color-2">
                      M (2)
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Products Tags</h3>
              <div role="button">
                <div className="product-tags d-flex flex-wrap align-items-center gap-3">
                  <span className="badge bg-light text-secondary rounded-1 py-2 px-3">
                    Laptop
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Mobile
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Iphone
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Headphones
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Speaker
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Samsung
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Cloths
                  </span>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Random Products</h3>
              <div role="button">
                <div className="random-products d-flex gap-2 mb-3">
                  <div className="w-25">
                    <img src={ultraWatch2} alt="Watch" className="img-fluid" />
                  </div>
                  <div className="w-75">
                    <h5>
                      Apple Watch Series 9 &nbsp; 48mm Stainless Steel...{" "}
                    </h5>
                    <ReactStars
                      count={5}
                      size={23}
                      value={4}
                      edit={false}
                      activeColor="#febd69"
                    />
                    <p className="price">₹70,000/-</p>
                  </div>
                </div>
                <div className="random-products d-flex gap-2">
                  <div className="w-25">
                    <img src={Headphone} alt="Watch" className="img-fluid" />
                  </div>
                  <div className="w-75">
                    <h5>Beats Audio Super Bass Headphone Top Quality... </h5>
                    <ReactStars
                      count={5}
                      size={23}
                      value={4}
                      edit={false}
                      activeColor="#febd69"
                    />
                    <p className="price">₹40,000/-</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between gap-3">
                <div className="d-flex align-items-center ">
                  <p className="mb-0" style={{ width: "100px" }}>
                    Sort By :
                  </p>
                  <select name="" className="form-control form-select" id="">
                    <option value="manual">Featured</option>
                    <option value="best-selling">Best Selling</option>
                    <option value="title-ascending">Alphabetically, A-Z</option>
                    <option value="title-descending">
                      Alphabetically, Z-A
                    </option>
                    <option value="price-ascending">Price, low to high</option>
                    <option value="price-descending">Price, high to low</option>
                    <option value="created-ascending">Date, old to new</option>
                    <option value="created-descending">Date, new to old</option>
                  </select>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <p className="total-products mb-0 ">21 Products</p>
                  <div className="d-flex gap-3 align-items-center grid">
                    <img
                      onClick={() => {
                        setGrid(3);
                      }}
                      src={gr4}
                      className="d-block img-fluid"
                      alt="Grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(4);
                      }}
                      src={gr3}
                      className="d-block img-fluid"
                      alt="Grid"
                    />

                    <img
                      onClick={() => {
                        setGrid(6);
                      }}
                      src={gr2}
                      className="d-block img-fluid"
                      alt="Grid"
                    />

                    <img
                      onClick={() => {
                        setGrid(12);
                      }}
                      src={gr}
                      className="d-block img-fluid"
                      alt="Grid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="product-list pb-5">
              <div className="d-flex gap-3 flex-wrap">
                <FeaturedCard grid={grid} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurStore;
