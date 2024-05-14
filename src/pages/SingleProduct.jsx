import React, { useCallback, useEffect, useState } from "react";
import BreadCrum from "../components/BreadCrum";
import Meta from "../components/Meta";
import FeaturedCard from "../components/FeaturedCard";
import ReactStars from "react-rating-stars-component";
import { Link, useNavigate, useParams } from "react-router-dom";
import ReactImageZoom from "react-image-zoom";
import Accordion from "react-bootstrap/Accordion";
import { BsTruck } from "react-icons/bs";
import { LiaTshirtSolid } from "react-icons/lia";
import { RxDimensions } from "react-icons/rx";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoIosLink } from "react-icons/io";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductWishlist,
  addRatingToProduct,
  getASingleProducts,
  getAllProducts,
} from "../feature/product/productSlice";
import { getUserCart, productAddToCart } from "../feature/user/userSlice";
import { toast } from "sonner";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const SingleProductState = useSelector(
    (state) => state.product.singleProduct
  );
  const productState = useSelector((state) => state.product.product);
  const singleUserState = useSelector((state) => state.auth.singleUser);
  const cartState = useSelector((state) => state?.auth?.userCart);
  const [star, setStar] = useState(null);
  const [comment, setComment] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoomEnabled, setZoomEnabled] = useState(false);
  const [wishlist, setWishlist] = useState(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    return storedWishlist ? JSON.parse(storedWishlist) : {};
  });
  const [alreadyAdded, setAlreadyAdded] = useState(false);

  const { ratings, category } = SingleProductState;

  const isClothingCategory = category === "Cloths";

  const randomProducts = productState?.slice();

  const addToWishlist = (id) => {
    const updatedWishlist = { ...wishlist, [id]: !wishlist[id] };
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    dispatch(addProductWishlist(id));
  };

  const getSingleProduct = useCallback(() => {
    dispatch(getASingleProducts(id));
  }, [dispatch, id]);

  const getTheUserCart = useCallback(() => {
    dispatch(getUserCart());
  }, [dispatch]);

  const getAllProductsData = useCallback(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const addToProductInCart = (id) => {
    if (!selectedColor) {
      toast.info("Please select a color");
      return;
    } else {
      dispatch(
        productAddToCart({
          productId: id,
          quantity: quantity,
          price: SingleProductState?.price,
          color: selectedColor,
        })
      );

      setTimeout(() => {
        navigate("/cart");
      }, 2000);
    }
  };

  const handleBuyNow = () => {
    if (alreadyAdded) {
      navigate("/checkout");
    } else {
      toast.info("Please Add to Cart ");
    }
  };

  useEffect(() => {
    getSingleProduct();
    getTheUserCart();
    getAllProductsData();
    window.scrollTo(0, 0);
  }, [getAllProductsData, getSingleProduct, getTheUserCart]);

  useEffect(() => {
    for (let index = 0; index < cartState.length; index++) {
      if (id === cartState[index]?.productId?._id) {
        setAlreadyAdded(true);
      }
    }
  }, [cartState, id]);

  const addRatingProduct = (e) => {
    e.preventDefault();
    if (star === null) {
      toast.error("Please Add The Star");
      return false;
    } else if (comment === null) {
      toast.error("Add The Review About This Product");
      return false;
    } else {
      dispatch(
        addRatingToProduct({
          star: star,
          comment: comment,
          productId: id,
        })
      );
      setTimeout(() => {
        dispatch(getASingleProducts(id));
        setComment(null);
      }, 1000);
    }
    return false;
  };

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
    } catch (error) {
      console.error("Error copying to clipboard:", error);
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.lordicon.com/lordicon.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },

    tablet: {
      breakpoint: { max: 732, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 430, min: 100 },
      items: 2,
    },
  };
  const imageUrl =
    SingleProductState.images && SingleProductState.images.length > 0
      ? SingleProductState.images[0].url && SingleProductState.images[0].url
      : "";

  const imageUrl1 =
    SingleProductState.images && SingleProductState.images.length > 1
      ? SingleProductState.images[1].url
      : "";

  const props = {
    width: 400,
    height: 500,
    zoomWidth: 1950,
    img:
      selectedImage ||
      imageUrl ||
      "https://www.apple.com/newsroom/images/2023/09/apple-introduces-the-advanced-new-apple-watch-series-9/article/Apple-Watch-S9-hero-230912_Full-Bleed-Image.jpg.large_2x.jpg",
  };
  return (
    <>
      <Meta title={SingleProductState.brand} />
      <BreadCrum title={SingleProductState.brand} />
      <Container class1="main-product-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-lg-6 col-md-3 col-sm-3">
            <div className="main-product-img">
              <div>
                {zoomEnabled ? (
                  <ReactImageZoom {...props} />
                ) : (
                  <img
                    src={props.img}
                    alt="Product"
                    className="img-fluid"
                    style={{ cursor: "zoom-in" }}
                    onClick={() => setZoomEnabled(true)}
                  />
                )}
              </div>
            </div>
            <div className="other-product-images d-flex flex-wrap gap-3">
              <div>
                <img
                  src={imageUrl}
                  className="img-fluid"
                  alt={SingleProductState?.title}
                  onClick={() => setSelectedImage(imageUrl)}
                />
              </div>
              <div>
                <img
                  src={imageUrl1}
                  className="img-fluid"
                  alt={SingleProductState?.title}
                  onClick={() => setSelectedImage(imageUrl1)}
                />
              </div>
              <div>
                <img
                  src={imageUrl1}
                  className="img-fluid"
                  alt={SingleProductState?.title}
                  onClick={() => setSelectedImage(imageUrl1)}
                />
              </div>
              <div>
                <img
                  src={imageUrl}
                  className="img-fluid"
                  alt={SingleProductState?.title}
                  onClick={() => setSelectedImage(imageUrl)}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-3">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">{SingleProductState?.title}</h3>
              </div>
              <div className="border-bottom py-2">
                <p className="price mb-1">
                  ₹
                  {parseFloat(SingleProductState?.price).toLocaleString(
                    "en-IN"
                  )}
                  /-
                </p>
                <div className="d-flex align-items-center  gap-2">
                  <ReactStars
                    count={5}
                    size={23}
                    value={
                      !isNaN(parseFloat(SingleProductState.totalrating))
                        ? parseFloat(SingleProductState.totalrating)
                        : 4
                    }
                    edit={false}
                    activeColor="#febd69"
                  />
                  <p className="mb-0 p-review">( 1 Reviews )</p>
                </div>
                <a className="review" href="#review">
                  Write a Review
                </a>
              </div>
              <div className="border-bottom py-3">
                <div className="d-flex gap-3 align-items-center my-2">
                  <h3 className="product-heading">Type :</h3>
                  <p className="product-data">WT0082</p>
                </div>
                <div className="d-flex gap-3 align-items-center my-2">
                  <h3 className="product-heading">Brand :</h3>
                  <p className="product-data">{SingleProductState?.brand}</p>
                </div>
                <div className="d-flex gap-3 align-items-center my-2">
                  <h3 className="product-heading">Category :</h3>
                  <p className="product-data">{SingleProductState?.category}</p>
                </div>
                <div className="d-flex gap-3 align-items-center my-2">
                  <h3 className="product-heading">Tags :</h3>
                  <p className="product-data">#{SingleProductState.tags}</p>
                </div>
                <div className="d-flex gap-3 align-items-center my-2">
                  <h3 className="product-heading">Availability :</h3>
                  <p className="product-data">In Stock</p>
                </div>
                {isClothingCategory && (
                  <div className="d-flex gap-3 flex-column mt-2 mb-3">
                    <h3 className="product-heading mb-0">Size </h3>
                    <div className="product-heading-size d-flex flex-wrap gap-2">
                      <span className="size-badge">S</span>
                      <span className="size-badge">M</span>
                      <span className="size-badge ">L</span>
                      <span className="size-badge">XL</span>
                      <span className="size-badge">XXL</span>
                    </div>
                  </div>
                )}

                {alreadyAdded === false && (
                  <div className="d-flex gap-3 flex-column mt-2 mb-3">
                    <h3 className="product-heading">Color</h3>
                    <ul className="colors">
                      {SingleProductState?.color?.map((color, index) => (
                        <li key={index}>
                          <span
                            style={{
                              backgroundColor: color,
                              border: "2px Solid #101010",
                            }}
                            onClick={() => setSelectedColor(color)}
                          ></span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="middle-part d-flex align-items-center gap-3 flex-row mt-2">
                  {alreadyAdded === false && (
                    <>
                      <h3 className="product-heading">Quantity </h3>
                      <div className="">
                        <input
                          type="number"
                          name=""
                          style={{ width: "60px" }}
                          className="form-control"
                          min={1}
                          max={10}
                          onChange={(e) => setQuantity(e.target.value)}
                          value={quantity}
                        />
                      </div>
                    </>
                  )}
                  <div
                    className={`third-part d-flex align-items-center gap-4 ${
                      alreadyAdded ? "" : "ms-4"
                    } `}
                  >
                    <button
                      className="CartBtn"
                      type="button"
                      // data-bs-toggle="modal"
                      // data-bs-target="#staticBackdrop"
                      onClick={() => {
                        alreadyAdded
                          ? navigate("/cart")
                          : addToProductInCart(SingleProductState?._id);
                      }}
                    >
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
                      <p className="cart-text">
                        {alreadyAdded === false ? "Add to Cart" : "Go to Cart"}
                      </p>
                    </button>
                    <div
                      className="buy-button"
                      onClick={handleBuyNow}
                      data-tooltip={`₹ ${parseFloat(
                        SingleProductState?.price
                      ).toLocaleString("en-IN")} /-`}
                    >
                      <div className="button-wrapper">
                        <div className="texts">Buy it Now</div>
                        <span className="buy-icon">
                          <svg
                            viewBox="0 0 16 16"
                            className="bi bi-cart2"
                            fill="currentColor"
                            height="16"
                            width="16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-3 mt-4">
                  <button
                    onClick={() => addToWishlist(SingleProductState?._id)}
                    className="main-product-btn d-flex align-items-center gap-2 border-0 bg-transparent"
                  >
                    <lord-icon
                      className="img"
                      src={
                        wishlist[SingleProductState?._id]
                          ? "https://cdn.lordicon.com/xyboiuok.json"
                          : "https://cdn.lordicon.com/xyboiuok.json"
                      }
                      trigger="click"
                      colors={
                        wishlist[SingleProductState?._id]
                          ? "primary:#e83a30"
                          : "primary:#1c1c1b"
                      }
                      style={{ width: "27px", height: "27px" }}
                    ></lord-icon>
                    Add To Wishlist
                  </button>

                  <button
                    to="/wishlist"
                    className="main-product-btn d-flex align-items-center gap-2 border-0 bg-transparent"
                  >
                    <lord-icon
                      className="img"
                      src="https://cdn.lordicon.com/rsbokaso.json"
                      trigger="hover"
                      colors="primary:#00000"
                      style={{ width: "25px", height: "25px" }}
                    ></lord-icon>
                    Add To Compare
                  </button>
                </div>
                <div className="mt-4">
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        <div className="d-flex align-items-center gap-2">
                          <BsTruck className="fs-6" /> Shipping & Returns
                        </div>
                      </Accordion.Header>
                      <Accordion.Body
                        style={{ fontSize: "14px", color: "#777777" }}
                      >
                        Free Shipping and Returns available for all orders!{" "}
                        <br />
                        we ship all over India Domestic Orders within 3-7
                        Workings Days.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        <div className="d-flex align-items-center gap-2">
                          <LiaTshirtSolid className="fs-6" /> Material
                        </div>
                      </Accordion.Header>
                      <Accordion.Body
                        style={{ fontSize: "14px", color: "#777777" }}
                      >
                        "At our UNTLD. store, we prioritize the use of premium
                        materials to ensure the highest quality. From
                        cutting-edge technology gadgets to stylish fashion
                        accessories, we source materials that meet the highest
                        industry standards"
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        <div className="d-flex align-items-center gap-2">
                          <RxDimensions className="fs-6" /> Size Chart
                        </div>
                      </Accordion.Header>
                      <Accordion.Body
                        style={{ fontSize: "14px", color: "#777777" }}
                      >
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Size</th>
                              <th>Chest (inches)</th>
                              <th>Waist (inches)</th>
                              <th>Hips (inches)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Small</td>
                              <td>34-36</td>
                              <td>28-30</td>
                              <td>36-38</td>
                            </tr>
                            <tr>
                              <td>Medium</td>
                              <td>38-40</td>
                              <td>32-34</td>
                              <td>40-42</td>
                            </tr>
                            <tr>
                              <td>Large</td>
                              <td>42-44</td>
                              <td>36-38</td>
                              <td>44-46</td>
                            </tr>

                            <tr>
                              <td>Extra Large</td>
                              <td>46-49</td>
                              <td>38-40</td>
                              <td>37-40</td>
                            </tr>
                          </tbody>
                        </table>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        <div className="d-flex align-items-center gap-2">
                          <IoMdHeartEmpty className="fs-6" /> Care Instructions
                        </div>
                      </Accordion.Header>
                      <Accordion.Body
                        style={{ fontSize: "14px", color: "#777777" }}
                      >
                        "At our UNTLD. store, we prioritize the use of premium
                        materials to ensure the highest quality. From
                        cutting-edge technology gadgets to stylish fashion
                        accessories, we source materials that meet the highest
                        industry standards"
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                        <div className="d-flex align-items-center gap-2">
                          <IoIosLink className="fs-6" /> Share
                        </div>
                      </Accordion.Header>
                      <Accordion.Body
                        style={{ fontSize: "14px", color: "#777777" }}
                        className="d-flex align-items-center gap-3 py-3"
                      >
                        Click This Button{" "}
                        <div
                          className="icon-conatiner"
                          onClick={handleCopyClick}
                        >
                          <svg
                            width="19px"
                            height="21px"
                            viewBox="0 0 19 21"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <title>Group</title>
                            <g
                              id="Page-1"
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <g
                                id="Artboard"
                                transform="translate(-142.000000, -122.000000)"
                              >
                                <g
                                  id="Group"
                                  transform="translate(142.000000, 122.000000)"
                                >
                                  <path
                                    d="M3.4,4 L11.5,4 L11.5,4 L16,8.25 L16,17.6 C16,19.4777681 14.4777681,21 12.6,21 L3.4,21 C1.52223185,21 6.74049485e-16,19.4777681 0,17.6 L0,7.4 C2.14128934e-16,5.52223185 1.52223185,4 3.4,4 Z"
                                    id="Rectangle-Copy"
                                    fill="#C4FFE4"
                                  ></path>
                                  <path
                                    d="M6.4,0 L12,0 L12,0 L19,6.5 L19,14.6 C19,16.4777681 17.4777681,18 15.6,18 L6.4,18 C4.52223185,18 3,16.4777681 3,14.6 L3,3.4 C3,1.52223185 4.52223185,7.89029623e-16 6.4,0 Z"
                                    id="Rectangle"
                                    fill="#85EBBC"
                                  ></path>
                                  <path
                                    d="M12,0 L12,5.5 C12,6.05228475 12.4477153,6.5 13,6.5 L19,6.5 L19,6.5 L12,0 Z"
                                    id="Path-2"
                                    fill="#64B18D"
                                  ></path>
                                </g>
                              </g>
                            </g>
                          </svg>
                          <svg
                            width="19px"
                            height="21px"
                            viewBox="0 0 19 21"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <title>Group</title>
                            <g
                              id="Page-1"
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <g
                                id="Artboard"
                                transform="translate(-142.000000, -122.000000)"
                              >
                                <g
                                  id="Group"
                                  transform="translate(142.000000, 122.000000)"
                                >
                                  <path
                                    d="M3.4,4 L11.5,4 L11.5,4 L16,8.25 L16,17.6 C16,19.4777681 14.4777681,21 12.6,21 L3.4,21 C1.52223185,21 6.74049485e-16,19.4777681 0,17.6 L0,7.4 C2.14128934e-16,5.52223185 1.52223185,4 3.4,4 Z"
                                    id="Rectangle-Copy"
                                    fill="#C4FFE4"
                                  ></path>
                                  <path
                                    d="M6.4,0 L12,0 L12,0 L19,6.5 L19,14.6 C19,16.4777681 17.4777681,18 15.6,18 L6.4,18 C4.52223185,18 3,16.4777681 3,14.6 L3,3.4 C3,1.52223185 4.52223185,7.89029623e-16 6.4,0 Z"
                                    id="Rectangle"
                                    fill="#85EBBC"
                                  ></path>
                                  <path
                                    d="M12,0 L12,5.5 C12,6.05228475 12.4477153,6.5 13,6.5 L19,6.5 L19,6.5 L12,0 Z"
                                    id="Path-2"
                                    fill="#64B18D"
                                  ></path>
                                </g>
                              </g>
                            </g>
                          </svg>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="product-description-wrapper home-wrapper-2 py-4">
        <div className="row">
          <div className="col-12">
            <h4>Description</h4>
            <p
              dangerouslySetInnerHTML={{
                __html: SingleProductState?.description,
              }}
            ></p>
          </div>
        </div>
      </Container>
      <Container class1="product-reviews-wrapper home-wrapper-2 py-4">
        <div className="row">
          <div className="col-12">
            <div id="review">
              <h4 className="mb-2">Reviews</h4>
            </div>
            <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-center align-items-end">
                <div>
                  <h4 className="mb-2">Customer Reviews</h4>
                  <div className="fourth-part d-flex align-items-center  gap-3">
                    <ReactStars
                      count={5}
                      size={23}
                      value={
                        !isNaN(parseFloat(SingleProductState.totalrating))
                          ? parseFloat(SingleProductState.totalrating)
                          : 4
                      }
                      edit={false}
                      activeColor="#febd69"
                    />
                    <p className="mb-0">Based on 2 Reviews</p>
                  </div>
                </div>

                <div className="cursor-pointer fifth-part">
                  <Link className="text-dark text-decoration-underline" to="#">
                    Write a Review
                  </Link>
                </div>
              </div>

              <div className="review-form py-2">
                <div>
                  <p className="mt-3">Write a Review</p>
                </div>
                <form
                  onSubmit={addRatingProduct}
                  className="d-flex flex-column gap-3"
                >
                  <div>
                    <label htmlFor="yourName" className="mb-1 review-label">
                      Name
                    </label>
                    <input
                      id="yourName"
                      type="text"
                      className="form-control review-form-control"
                      placeholder="Enter Your Name"
                    />
                  </div>
                  <div>
                    <div className="">
                      <p className="mb-0 ">Rating</p>
                    </div>
                    <ReactStars
                      count={5}
                      size={23}
                      value={star}
                      edit={true}
                      onChange={(newValue) => {
                        setStar(newValue);
                      }}
                      activeColor="#febd69"
                    />
                  </div>
                  <div>
                    <label htmlFor="reviewBody" className="mb-1 review-label">
                      Body of Review (1500)
                    </label>
                    <textarea
                      name=""
                      id="reviewBody"
                      className="w-100 form-control review-form-control"
                      cols="4"
                      rows="3"
                      placeholder="Write Your Comments Here..."
                      onChange={(e) => setComment(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-end mt-1">
                    <button className="send-button" type="submit">
                      <div className="svg-wrapper-1">
                        <div className="svg-wrapper">
                          <svg
                            className="svg-icon fs-3"
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
                      <span className="span-text">Submit</span>
                    </button>
                  </div>
                </form>
              </div>

              <div className="reviews mt-4">
                {SingleProductState?.ratings?.length === 0 && (
                  <div className="d-flex justify-content-center">
                    <h5>No Reviews</h5>
                  </div>
                )}
                {ratings?.map((item, index) => {
                  return (
                    <div className="review" key={index}>
                      <div className="d-flex gap-3 align-items-center ">
                        <h6 className="mb-0">{`${singleUserState?.firstname} ${singleUserState?.lastname}`}</h6>
                        <ReactStars
                          count={5}
                          size={23}
                          value={
                            !isNaN(parseFloat(item?.star))
                              ? parseFloat(item?.star)
                              : 0
                          }
                          edit={false}
                          activeColor="#febd69"
                        />
                      </div>
                      <p className="mt-2">{item?.comment}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="popular-wrapper home-wrapper-2 py-4">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-3">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          <Carousel responsive={responsive}>
            {randomProducts &&
              randomProducts.map((item, index) => (
                <div key={index}>
                  <FeaturedCard featuredData={item} />
                </div>
              ))}
          </Carousel>
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;
