import React from "react";
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
} from "../assets/assets";
import Container from "../components/Container";
import { services, brandImages } from "../utils/Data";

const Home = () => {
  const setting = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <Container class1="home-wrapper-2 py-4">
        <div className="row">
          <div className="col-12">
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
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-4">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex flex-wrap align-items-center justify-content-between">
              {services.map((item, index) => (
                <div
                  key={item.title}
                  className="service-item d-flex  align-items-center gap-2"
                >
                  <img src={item.image} alt="Services" />
                  <div className="content-headings d-flex flex-column flex-wrap">
                    <span>{item.title}</span>
                    <p className="m-0">{item.tagline}</p>
                  </div>
                </div>
              ))}
            </div>
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
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
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
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </Container>
      <Container class1="popular-wrapper home-wrapper-2 py-4">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
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
          <div className="col-lg-3 col-md-6 col-sm-3">
            <BlogCard />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-3 ">
            <BlogCard />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-3">
            <BlogCard />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-3">
            <BlogCard />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
