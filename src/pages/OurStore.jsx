import React, { useCallback, useEffect, useState } from "react";
import BreadCrum from "../components/BreadCrum";
import ReactStars from "react-rating-stars-component";
import FeaturedCard from "../components/FeaturedCard";
import Color from "../components/Color";
import Meta from "../components/Meta";
import { gr, gr2, gr3, gr4 } from "../assets/assets";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../feature/product/productSlice";
import { Link } from "react-router-dom";

const OurStore = () => {
  const [grid, setGrid] = useState(4);
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.product?.product);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(9);
  const uniqueCategories = [
    ...new Set(productState?.flatMap((item) => item.category)),
  ];
  const uniqueTags = [...new Set(productState?.flatMap((item) => item.tags))];
  const uniqueBrands = [
    ...new Set(productState?.flatMap((item) => item.brand)),
  ];

  useEffect(() => {
    if (grid === 3) {
      setProductsPerPage(16);
    } else if (grid === 4) {
      const isMobileView = window.innerWidth <= 768;
      setProductsPerPage(isMobileView ? 6 : 9);
    } else if (grid === 6) {
      setProductsPerPage(6);
    } else if (grid === 12) {
      setProductsPerPage(3);
    }
  }, [grid]);

  //* Pagination logic HERE...
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productState?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //*  FILTER STATE OR PRODUCTS

  const [brand, setBrand] = useState(null);
  const [tag, setTag] = useState(null);
  const [category, setCategory] = useState(null);
  const [color, setColor] = useState(null);
  const [sort, setSort] = useState(null);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);

  const getProduct = useCallback(() => {
    dispatch(
      getAllProducts({ sort, tag, minPrice, maxPrice, brand, category, color })
    );
  }, [brand, category, color, dispatch, maxPrice, minPrice, sort, tag]);

  useEffect(() => {
    getProduct();
    window.scrollTo(0, 0);
  }, [getProduct]);

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
                {uniqueCategories &&
                  uniqueCategories?.map((category, index) => {
                    return (
                      <ul key={index} className="ps-0 mb-1">
                        <li onClick={(e) => setCategory(category)}>
                          {category}
                        </li>
                      </ul>
                    );
                  })}
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Shop by Brands</h3>
              <div className="d-flex flex-wrap align-items-center gap-3">
                {uniqueBrands &&
                  uniqueBrands?.map((brand, index) => {
                    return (
                      <div key={index}>
                        <span
                          onClick={(e) => setBrand(brand)}
                          className="badge bg-light text-secondary rounded-1 py-2 px-3 m-1"
                          style={{ cursor: "pointer" }}
                        >
                          {brand}
                        </span>
                      </div>
                    );
                  })}
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
                <div className="d-flex flex-wrap align-items-center gap-2">
                  <div className="form-floating">
                    <input
                      type="number"
                      className="form-control"
                      id="floatingInput"
                      placeholder="From"
                      onChange={(e) => {
                        const value = e.target.value;
                        if (value.length === 4) {
                          setMinPrice(parseInt(value)); // Convert string to number
                        }
                      }}
                    />
                    <label htmlFor="floatingInput">From</label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="number"
                      className="form-control"
                      id="floatingInput1"
                      placeholder="To"
                      onChange={(e) => {
                        const value = e.target.value;
                        if (value.length === 4) {
                          setMaxPrice(parseInt(value)); // Convert string to number
                        }
                      }}
                    />
                    <label htmlFor="floatingInput1">To</label>
                  </div>
                </div>
                <h5 className="sub-title">Colors</h5>
                <div>
                  {" "}
                  <Color setColor={setColor} data={productState} />{" "}
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
              <div role="button" className="d-flex flex-wrap gap-1">
                {uniqueTags &&
                  uniqueTags?.map((tags, index) => {
                    return (
                      <div
                        key={index}
                        className="product-tags d-flex flex-wrap align-items-center gap-3"
                      >
                        <span
                          onClick={() => setTag(tags)}
                          className="badge bg-light text-secondary rounded-1 py-2 px-3 m-1"
                        >
                          {tags}
                        </span>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="filter-card mb-0">
              <h3 className="filter-title">Random Products</h3>
              <div role="button" className="">
                {productState &&
                  productState.slice(1, 3)?.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="random-products d-flex flex-wrap flex-grow-1 gap-4 mb-2 align-items-center"
                      >
                        {" "}
                        <div className="product-img w-25">
                          <Link to={`/product/${item?._id}`}>
                            {" "}
                            <img
                              src={item?.images[0]?.url}
                              alt="Watch"
                              className="img-fluid product-img"
                            />
                          </Link>
                        </div>
                        <div className="w-80 mt-2">
                          <Link
                            to={`/product/${item?._id}`}
                            className="text-black"
                          >
                            <h5
                              dangerouslySetInnerHTML={{
                                __html: item?.title.substr(0, 19) + "...",
                              }}
                            ></h5>
                          </Link>

                          <ReactStars
                            count={5}
                            size={23}
                            value={3}
                            edit={false}
                            activeColor="#febd69"
                          />
                          <p className="price">
                            ₹{parseFloat(item.price).toLocaleString("en-IN")} /-
                          </p>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="filter-sort-grid mb-4">
              <div className="d-flex flex-wrap  justify-content-between gap-3">
                <div className="d-flex align-items-center ">
                  <p className="mb-0" style={{ width: "100px" }}>
                    Sort By :
                  </p>
                  <select
                    name=""
                    className="form-control form-select"
                    id=""
                    onChange={(e) => setSort(e.target.value)}
                  >
                    <option value="title">Alphabetically, A-Z</option>
                    <option value="-title">Alphabetically, Z-A</option>
                    <option value="price">Price, low to high</option>
                    <option value="-price">Price, high to low</option>
                    <option value="createdAt">Date, old to new</option>
                    <option value="-createdAt">Date, new to old</option>
                  </select>
                </div>
                <div className="d-flex flex-wrap align-items-center gap-3 ">
                  <p className="total-products mb-0">21 Products</p>
                  <div className="grid-sm d-flex gap-3 align-items-center grid">
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
                {currentProducts &&
                  currentProducts.map((item, index) => (
                    <FeaturedCard
                      key={index}
                      index={index}
                      featuredData={item}
                      grid={grid}
                    />
                  ))}
              </div>
            </div>
          </div>
          <div className="position-relative">
            {/* Pagination controls */}
            <nav>
              <ul className="pagination d-flex align-items-center justify-content-end ">
                {productState && productState.length > productsPerPage && (
                  <>
                    <li
                      className={`page-item ${
                        currentPage === 1 ? "disabled" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => paginate(currentPage - 1)}
                      >
                        Previous
                      </button>
                    </li>
                    {Array.from(
                      {
                        length: Math.ceil(
                          productState.length / productsPerPage
                        ),
                      },
                      (_, index) => (
                        <li
                          key={index}
                          className={`page-item ${
                            currentPage === index + 1 ? "active" : ""
                          }`}
                        >
                          <button
                            className="page-link"
                            onClick={() => paginate(index + 1)}
                          >
                            {index + 1}
                          </button>
                        </li>
                      )
                    )}
                    <li
                      className={`page-item ${
                        currentPage ===
                        Math.ceil(productState.length / productsPerPage)
                          ? "disabled"
                          : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => paginate(currentPage + 1)}
                      >
                        Next
                      </button>
                    </li>
                  </>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurStore;
