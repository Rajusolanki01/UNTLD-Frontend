import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import FeaturedCard from "../components/FeaturedCard";
import SpecialProduct from "../components/SpecialProduct";
import {
  Airpods,
  Camera,
  Game,
  Headphone,
  Iphone15,
  Laptop,
  Speaker,
  Tv,
  ultraWatch,
  Kitchen,
  Series9,
  Macbook,
  Iphone14,
  Google,
  UNTLDPNG,
  UNTLDG,
  Series,
  bestSeller,
  bestSeller1,
  bestSeller2,
  bestSeller4,
  bestSeller3,
} from "../assets/assets";
import Container from "../components/Container";
import { services, brandImages } from "../utils/Data";
import { useDispatch, useSelector } from "react-redux";
import { getAllblogs } from "../feature/blog/blogSlice";
import LoadingCart from "../components/LoadingCart";
import { getAllProducts } from "../feature/product/productSlice";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Home = () => {
  const dispatch = useDispatch();
  const blogState = useSelector((state) => state.blog.blogs);
  const loadingState = useSelector((state) => state.auth);
  const productState = useSelector((state) => state.product.product);
  const { isLoading } = loadingState;
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    dispatch(getAllblogs());
    dispatch(getAllProducts());
    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, [dispatch]);

  const updateScreenSize = () => {
    setIsMobileView(window.innerWidth <= 768);
  };

  if (isLoading) {
    return (
      <div className="LoadingBar">
        <LoadingCart />
      </div>
    );
  }

  const setting = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

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

  const responsive2 = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },

    tablet: {
      breakpoint: { max: 732, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 430, min: 100 },
      items: 1,
    },
  };

  return (
    <>
      <Container class1="home-wrapper-2 py-4">
        <div className="row">
          <div className="col-12">
            {isMobileView ? (
              <Slider {...setting}>
                <div className="main-banner position-relative">
                  <Link to="/store" className="w-100">
                    {" "}
                    <img
                      src={bestSeller}
                      alt="Main Banner"
                      className="w-100 rounded-3"
                    />
                  </Link>
                </div>
                <div className="main-banner position-relative">
                  <Link to="/store" className="w-100">
                    {" "}
                    <img
                      src={bestSeller1}
                      alt="Main Banner"
                      className="w-100 rounded-3"
                    />
                  </Link>
                </div>
                <div className="main-banner position-relative">
                  <Link to="/store" className="w-100">
                    {" "}
                    <img
                      src={bestSeller2}
                      alt="Main Banner"
                      className="w-100 rounded-3"
                    />
                  </Link>
                </div>
                <div className="main-banner position-relative">
                  <Link to="/store" className="w-100">
                    {" "}
                    <img
                      src={bestSeller3}
                      alt="Main Banner"
                      className="w-100 rounded-3"
                    />
                  </Link>
                </div>
                <div className="main-banner position-relative">
                  <Link to="/store" className="w-100">
                    {" "}
                    <img
                      src={bestSeller4}
                      alt="Main Banner"
                      className="w-100 rounded-3"
                    />
                  </Link>
                </div>
              </Slider>
            ) : (
              <Slider {...setting}>
                <div className="main-banner position-relative">
                  <Link to="/store" className="w-100">
                    {" "}
                    <img
                      src={UNTLDG}
                      alt="Main Banner"
                      className="w-100 rounded-3"
                    />
                  </Link>
                </div>
                <div className="main-banner position-relative">
                  <Link to="/store" className="w-100">
                    {" "}
                    <img
                      src={UNTLDPNG}
                      alt="Main Banner"
                      className="w-100 rounded-3"
                    />
                  </Link>
                </div>
              </Slider>
            )}
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-4">
        <div className="row">
          <div className="col-12">
            {!isMobileView ? (
              <div className="services d-flex gap-4 align-items-center justify-content-between">
                {services.map((item, index) => (
                  <div
                    key={index}
                    className="service-item d-flex justify-content-between align-items-center gap-3"
                  >
                    <img src={item.image} alt="Services" />
                    <div className="content-headings d-flex flex-column flex-wrap">
                      <span>{item.title}</span>
                      <p className="m-0">{item.tagline}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <Marquee className="">
                <div className="services d-flex gap-5  align-items-center justify-content-between mb-0">
                  {services.map((item, index) => (
                    <div
                      key={index}
                      className="service-item d-flex  align-items-center gap-1"
                    >
                      <img
                        src={item.image}
                        alt="Services"
                        className="service-image"
                      />
                      <div className="content-headings d-flex  flex-column flex-wrap">
                        <span className="service-title">{item.title}</span>
                        <p className="m-0 service-tagline">{item.tagline}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Marquee>
            )}
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-4">
        <div className="row">
          <div className="col-12">
            <div className="categories card-wrapper d-flex justify-content-between flex-wrap align-items-center">
              <div className="content-img d-flex gap-3 align-items-center">
                <div className="">
                  <span className="span">Mac & Laptops</span>
                  <p>Total Items</p>
                </div>
                <img src={Laptop} alt="Camera" className="img-1" />
              </div>
              <div className="content-img d-flex gap-3 align-items-center">
                <div>
                  <span className="span">Cameras & Video</span>
                  <p>Total Items</p>
                </div>
                <img src={Camera} alt="Camera" className="img-2" />
              </div>
              <div className="content-img d-flex gap-5  align-items-center">
                <div>
                  <span className="span">Smart Tv's</span>
                  <p>Total Items</p>
                </div>
                <img src={Tv} alt="Camera" className="img-3" />
              </div>
              <div className="content-img d-flex gap-5   align-items-center">
                <div>
                  <span className="span">Smart Watches</span>
                  <p>Total Items</p>
                </div>
                <img src={ultraWatch} alt="Camera" className="img-4" />
              </div>
              <div className="content-img d-flex gap-4  align-items-center">
                <div>
                  <span className="span">Music & Gaming</span>
                  <p>Total Items</p>
                </div>
                <img src={Game} alt="Camera" className="img-5" />
              </div>
              <div className="content-img gap d-flex  gap-4  align-items-center">
                <div>
                  <span className="span">Mobiles & Tablets</span>
                  <p>Total Items</p>
                </div>
                <img src={Iphone15} alt="Camera" className="img-6" />
              </div>
              <div className="content-img d-flex gap-4  align-items-center">
                <div>
                  <span className="span">HeadPhones</span>
                  <p>Total Items</p>
                </div>
                <img src={Headphone} alt="Camera" className="img-7" />
              </div>
              <div className="content-img d-flex gap-4   align-items-center">
                <div>
                  <span className="span">Accessories</span>
                  <p>Total Items</p>
                </div>
                <img src={Airpods} alt="Camera" className="img-8" />
              </div>
              <div className="content-img d-flex gap-3  align-items-center">
                <div>
                  <span className="span">Protable Speakers</span>
                  <p>Total Items</p>
                </div>
                <img src={Speaker} alt="Camera" className="img-9 img-fluid" />
              </div>
              <div className="content-img d-flex gap-4  align-items-center">
                <div>
                  <span className="span">Home Appliances</span>
                  <p>Total Items</p>
                </div>
                <img src={Kitchen} alt="Camera" className="img-10 img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="featured-wrapper home-wrapper-2 py-4">
        {" "}
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          <div className="row">
            <Carousel responsive={responsive}>
              {productState &&
                productState?.map((item, index) => {
                  if (item?.tags === "featured") {
                    return (
                      <FeaturedCard
                        key={index}
                        index={index}
                        featuredData={item}
                      />
                    );
                  }
                  return null;
                })}
            </Carousel>
          </div>
        </div>
      </Container>
      <Container class1="famous-wraper home-wrapper-2 py-4">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-3 mb-3 ">
            <div className="famous-card rounded-1 position-relative bg-black">
              <img
                src={Series9}
                alt="Watch"
                className="rounded  d-none d-md-block"
              />
              <img
                src={Series}
                alt="Watch"
                className="rounded apple-watch d-md-none "
              />
              <div className="famous-content position-absolute col-sm-12">
                <h5 className="">Big Screen</h5>
                <h6>Smart Watch Series 9</h6>
                <p>From ₹6567.00/mo. Per Month EMI</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-3 mb-3">
            <div className="famous-card bg-white rounded-1  position-relative">
              <img src={Macbook} alt="Watch" className=" rounded" />
              <div className="famous-content position-absolute text-black">
                <h5 className="text-black">Studio Display</h5>
                <h6 className="text-black">700 nits of brightnes.</h6>
                <p className="text-black">27-inch 5k Retina display</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-3 mb-3">
            <div className="famous-card bg-white rounded-1  position-relative">
              <img src={Iphone14} alt="Watch" className=" rounded" />
              <div className="famous-content position-absolute">
                <h5 className="text-black">SmartPhones</h5>
                <h6 className="text-black">IPhone 14 Pro</h6>
                <p className="text-black">From ₹4567.00/mo. Per Month EMI</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-3 mb-3">
            <div className="famous-card bg-white rounded-1  position-relative">
              <img src={Google} alt="Watch" className=" rounded" />
              <div className="famous-content position-absolute">
                <h5 className="text-black">Home Speaker</h5>
                <h6 className="text-black">Sound By Google Home</h6>
                <p className="text-black">From ₹2567.00/mo. Per Month EMI</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="special-wrapper home-wrapper-2 py-4">
        {" "}
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="row">
          <Carousel responsive={responsive2}>
            {productState &&
              productState?.map((item, index) => {
                if (item?.tags === "special") {
                  return (
                    <div
                      className="col-lg-12 col-md-9 col-sm-12 mb-3"
                      key={index}
                    >
                      <SpecialProduct productData={item} />
                    </div>
                  );
                }
                return null;
              })}
          </Carousel>
        </div>
      </Container>
      <Container class1="popular-wrapper home-wrapper-2 py-4">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          <Carousel responsive={responsive}>
            {productState &&
              productState?.map((item, index) => {
                if (item?.tags === "popular") {
                  return (
                    <FeaturedCard
                      key={index}
                      index={index}
                      featuredData={item}
                    />
                  );
                }
                return null;
              })}
          </Carousel>
        </div>
      </Container>
      <Container class1="marquee-wrapper home-wrapper-2">
        {" "}
        <div className="row">
          <div className="col-lg-12 col-md-6 col-sm-3">
            <div className="marquee-inner-wrapper">
              <Marquee className="d-flex">
                {brandImages.map((item) => (
                  <div className="mx-4" key={item.image}>
                    <img src={item.image} alt="Brands" />
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="blog-wrapper home-wrapper-2 py-4">
        {" "}
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
        </div>
        <div className="row">
          <Carousel responsive={responsive}>
            {blogState &&
              blogState.map((item, index) => {
                return (
                  <div className="col-lg-12 col-md-9 col-sm-3" key={index}>
                    <BlogCard blogData={item} />
                  </div>
                );
              })}
          </Carousel>
        </div>
      </Container>
    </>
  );
};

export default Home;
