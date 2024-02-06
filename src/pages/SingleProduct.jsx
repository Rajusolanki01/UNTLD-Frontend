import React, { useEffect, useState } from "react";
import BreadCrum from "../components/BreadCrum";
import Meta from "../components/Meta";
import FeaturedCard from "../components/FeaturedCard";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import Accordion from "react-bootstrap/Accordion";
import { BsTruck } from "react-icons/bs";
import { LiaTshirtSolid } from "react-icons/lia";
import { RxDimensions } from "react-icons/rx";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoIosLink } from "react-icons/io";
import { FiZoomIn } from "react-icons/fi";
import Container from "../components/Container";

const SingleProduct = () => {
  const props = {
    width: 400,
    height: 500,
    zoomWidth: 650,
    img: "https://www.apple.com/newsroom/images/2023/09/apple-introduces-the-advanced-new-apple-watch-series-9/article/Apple-Watch-S9-hero-230912_Full-Bleed-Image.jpg.large_2x.jpg",
  };
  const [orderedProduct, setOrderedProduct] = useState(true);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [copied, setCopied] = useState(false);
  const [zoomEnabled, setZoomEnabled] = useState(false);

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(
        "https://www.apple.com/newsroom/images/2023/09/apple-introduces-the-advanced-new-apple-watch-series-9/article/Apple-Watch-S9-hero-230912_Full-Bleed-Image.jpg.large_2x.jpg"
      );
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Error copying to clipboard:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleWriteReviewClick = () => {
    setShowReviewForm(!showReviewForm);
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

  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrum title="Product Name" />
      <Container class1="main-product-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-6">
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
                  src="https://www.apple.com/newsroom/images/2023/09/apple-introduces-the-advanced-new-apple-watch-series-9/article/Apple-Watch-S9-hero-230912_Full-Bleed-Image.jpg.large_2x.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://www.apple.com/newsroom/images/2023/09/apple-introduces-the-advanced-new-apple-watch-series-9/article/Apple-Watch-S9-hero-230912_Full-Bleed-Image.jpg.large_2x.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://www.apple.com/newsroom/images/2023/09/apple-introduces-the-advanced-new-apple-watch-series-9/article/Apple-Watch-S9-hero-230912_Full-Bleed-Image.jpg.large_2x.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://www.apple.com/newsroom/images/2023/09/apple-introduces-the-advanced-new-apple-watch-series-9/article/Apple-Watch-S9-hero-230912_Full-Bleed-Image.jpg.large_2x.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">Apple Watch Series 9 Ultra</h3>
              </div>
              <div className="border-bottom py-2">
                <p className="price mb-1">₹90,000</p>
                <div className="d-flex align-items-center  gap-2">
                  <ReactStars
                    count={5}
                    size={23}
                    value={3}
                    edit={false}
                    activeColor="#febd69"
                  />
                  <p className="mb-0 p-review">( 2 Reviews )</p>
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
                  <p className="product-data">Apple</p>
                </div>
                <div className="d-flex gap-3 align-items-center my-2">
                  <h3 className="product-heading">Category :</h3>
                  <p className="product-data">Watch</p>
                </div>
                <div className="d-flex gap-3 align-items-center my-2">
                  <h3 className="product-heading">Tags :</h3>
                  <p className="product-data">#Series9 #AppleUltraWatch</p>
                </div>
                <div className="d-flex gap-3 align-items-center my-2">
                  <h3 className="product-heading">Availability :</h3>
                  <p className="product-data">In Stock</p>
                </div>
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
                <div className="d-flex gap-3 flex-column mt-2 mb-3">
                  <h3 className="product-heading">Color </h3>
                  <Color />
                </div>
                <div className="d-flex align-items-center gap-3 flex-row mt-2">
                  <h3 className="product-heading">Quantity </h3>
                  <div className="">
                    <input
                      type="number"
                      name=""
                      style={{ width: "60px" }}
                      className="form-control"
                      defaultValue={0}
                      min={1}
                      max={10}
                      id=""
                    />
                  </div>
                  <div className="d-flex align-items-center gap-4 ms-4">
                    <Link to="/">
                      <button className="CartBtn">
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
                        <p className="cart-text">Add to Cart</p>
                      </button>
                    </Link>
                    <Link to="/">
                      <div data-tooltip="Price:- ₹90,000" class="buy-button">
                        <div class="button-wrapper">
                          <div class="texts">Buy it Now</div>
                          <span class="buy-icon">
                            <svg
                              viewBox="0 0 16 16"
                              class="bi bi-cart2"
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
                    </Link>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-3 mt-4">
                  <Link
                    to="/wishlist"
                    className="d-flex align-items-center gap-2"
                  >
                    <lord-icon
                      className=""
                      src="https://cdn.lordicon.com/xyboiuok.json"
                      trigger="hover"
                      colors="primary:#00000"
                      style={{ width: "25px", height: "25px" }}
                    ></lord-icon>
                    Add To Wishlist
                  </Link>

                  <Link
                    to="/compare-products"
                    className="d-flex align-items-center gap-2"
                  >
                    <lord-icon
                      className="img"
                      src="https://cdn.lordicon.com/rsbokaso.json"
                      trigger="hover"
                      colors="primary:#00000"
                      style={{ width: "25px", height: "25px" }}
                    ></lord-icon>
                    Add To Compare
                  </Link>
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
                        <div class="icon-conatiner" onClick={handleCopyClick}>
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
                              stroke-width="1"
                              fill="none"
                              fill-rule="evenodd"
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
                              stroke-width="1"
                              fill="none"
                              fill-rule="evenodd"
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
      <Container className="product-description-wrapper home-wrapper-2 py-4">
        <div className="row">
          <div className="col-12">
            <h4>Description</h4>
            <p className="bg-white p-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              similique quam molestiae animi quas accusamus commodi earum rerum
              nulla expedita accusantium iure quasi provident autem, odio, ipsam
              voluptatem consequuntur sint? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quia similique quam molestiae animi
              quas accusamus commodi earum rerum nulla expedita accusantium iure
              quasi provident autem, odio, ipsam voluptatem consequuntur sint?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              similique quam molestiae animi quas accusamus commodi earum rerum
              nulla expedita accusantium iure quasi provident autem, odio, ipsam
              voluptatem consequuntur sint? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quia similique quam molestiae animi
              quas accusamus commodi earum rerum nulla expedita accusantium iure
              quasi provident autem, odio, ipsam voluptatem consequuntur sint?
            </p>
          </div>
        </div>
      </Container>
      <Container className="product-reviews-wrapper home-wrapper-2 py-4">
        <div className="row">
          <div className="col-12">
            <div id="review">
              <h4 className="mb-2">Reviews</h4>
            </div>
            <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <h4 className="mb-2">Customer Reviews</h4>
                  <div className="d-flex align-items-center  gap-3">
                    <ReactStars
                      count={5}
                      size={23}
                      value={3}
                      edit={false}
                      activeColor="#febd69"
                    />
                    <p className="mb-0">Based on 2 Reviews</p>
                  </div>
                </div>
                {orderedProduct && (
                  <div className="cursor-pointer">
                    <Link
                      className="text-dark text-decoration-underline"
                      to="#"
                      onClick={handleWriteReviewClick}
                    >
                      Write a Review
                    </Link>
                  </div>
                )}
              </div>
              {showReviewForm && (
                <div className="review-form py-2">
                  <div>
                    <p className="mt-3">Write a Review</p>
                  </div>
                  <form action="" className="d-flex flex-column gap-3">
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
                      <label htmlFor="yourEmail" className="mb-1 review-label">
                        Email
                      </label>
                      <input
                        id="yourEmail"
                        type="email"
                        className="form-control review-form-control"
                        placeholder="joe.smith@gmail.com"
                      />
                    </div>
                    <div>
                      <div className="">
                        <p className="mb-0 ">Rating</p>
                      </div>
                      <ReactStars
                        count={5}
                        size={23}
                        value={0}
                        edit={true}
                        activeColor="#febd69"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="reviewTitle"
                        className="mb-1 review-label"
                      >
                        Review Title
                      </label>
                      <input
                        id="reviewTitle"
                        type="text"
                        className="form-control review-form-control"
                        placeholder="Give your review a Title"
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
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end mt-1">
                      <button className="send-button" onClick={handleSubmit}>
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
              )}

              <div className="reviews mt-4">
                <div className="review">
                  <div className="d-flex gap-3 align-items-center ">
                    <h6 className="mb-0">Raju Solanki</h6>
                    <ReactStars
                      count={5}
                      size={23}
                      value={4}
                      edit={false}
                      activeColor="#febd69"
                    />
                  </div>
                  <p className="mt-2">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Accusamus, necessitatibus fugiat asperiores facilis ut
                    reiciendis deleniti nostrum eum natus, laboriosam beatae
                    obcaecati!
                  </p>
                  <div className="d-flex gap-3 align-items-center ">
                    <h6 className="mb-0">Tarun Solanki</h6>
                    <ReactStars
                      count={5}
                      size={23}
                      value={4}
                      edit={false}
                      activeColor="#febd69"
                    />
                  </div>
                  <p className="mt-2">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Accusamus, necessitatibus fugiat asperiores facilis ut
                    reiciendis deleniti nostrum eum natus, laboriosam beatae
                    obcaecati!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container className="popular-wrapper home-wrapper-2 py-4">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          <FeaturedCard />
          <FeaturedCard />
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;
