import React, { useEffect, useState } from "react";
import BreadCrum from "../components/BreadCrum";
import Meta from "../components/Meta";
import { UNTLD, Watch2 } from "../assets/assets";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import LoadingCart from "../components/LoadingCart";
import * as yup from "yup";
import { useFormik } from "formik";
import { toast } from "sonner";
import { axiosClient } from "../utils/axiosConfig";
import {
  createTheOrder,
  removeProductFromTheCart,
} from "../feature/user/userSlice";

const checkoutSchema = yup.object({
  firstname: yup.string().required("First Name is Required"),
  lastname: yup.string().required("Last Name is Required"),
  address: yup.string().required("Address is Required"),
  appartment: yup.string().required("appartment is Required"),
  city: yup.string().required("City is Required"),
  state: yup.string().required("State is Required"),
  mobile: yup.string().required("Mobile Number should be Valid"),
  country: yup.string().required("Country is Required"),
  pincode: yup.string().required("Pincode is Required"),
});

const Checkout = () => {
  const dispatch = useDispatch();
  const [totalPriceCheckout, setTotalPriceCheckout] = useState(null);
  const [orderItemsDetails, setOrderItemsDetails] = useState([]);
  const [checkoutCartId, setCheckoutCartId] = useState([]);
  const [isMobileView, setIsMobileView] = useState(null);
  const cartState = useSelector((state) => state?.auth?.userCart);
  const loadingState = useSelector((state) => state.auth.isLoading);

  console.log(checkoutCartId);

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      address: "",
      appartment: "",
      city: "",
      state: "",
      mobile: "",
      country: "",
      pincode: "",
    },
    validationSchema: checkoutSchema,
    onSubmit: async (values) => {
      if (values !== null) {
        setTimeout(() => {
          checkoutHandler(values);
        }, 100);
      } else {
        toast.error("Somthing Went Wrong...");
      }

      formik.resetForm();
    },
  });

  useEffect(() => {
    let totalCartPrice = 0;
    let cartId = [];
    for (let index = 0; index < cartState.length; index++) {
      totalCartPrice =
        totalCartPrice +
        Number(cartState[index].quantity * cartState[index].price);

      cartId.push({ id: cartState[index]._id });

      setTotalPriceCheckout(totalCartPrice);
      setCheckoutCartId(cartId);
    }
  }, [cartState]);

  useEffect(() => {
    const items = [];
    for (let index = 0; index < cartState?.length; index++) {
      items.push({
        product: cartState[index].productId._id,
        quantity: cartState[index].quantity,
        color: cartState[index].color,
        price: cartState[index].price,
      });
    }

    setOrderItemsDetails(items);
  }, [cartState]);

  useEffect(() => {
    renderScreenSize();

    window.addEventListener("resize", renderScreenSize);

    return () => window.removeEventListener("resize", renderScreenSize);
  }, []);

  const renderScreenSize = () => {
    setIsMobileView(window.innerWidth <= 768);
  };

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const checkoutHandler = async (values) => {
    const response = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!response) {
      toast.error("Razorpay SDK failed to load");
      return;
    }

    const result = await axiosClient.post("user/order/checkout", {
      amount: totalPriceCheckout,
    });

    if (!result) {
      toast.error(result.result.message);
      return;
    }

    const { amount, id: order_id, currency } = result.result;

    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID,
      amount: amount,
      currency: currency,
      name: "UNTLD.",
      description: "Test Transaction",
      image: { UNTLD },
      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        const result = await axiosClient.post(
          "user/order/paymentVerifiction",
          data
        );

        toast.success("Payment Successful");

        dispatch(
          createTheOrder({
            totalPrice: totalPriceCheckout,
            totalPriceAfterDiscount: totalPriceCheckout,
            orderItems: orderItemsDetails,
            paymentInfo: result.result,
            shippingInfo: values,
          })
        );
      },

      prefill: {
        name: "Raju Solanki",
        email: "rajusolanki787@gmail.com",
        contact: "8700026451",
      },
      notes: {
        address: "UNTLD. Office Faridabad",
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  if (loadingState) {
    return (
      <div className="LoadingBar">
        <LoadingCart />
      </div>
    );
  }

  return (
    <>
      <Meta title={"Checkout"} />
      <BreadCrum title="Checkout" />

      <Container class1="checkout-wrapper home-wrapper-2 py-3">
        <div className="row">
          <div className="col-7 bg-white py-4">
            <div className="checkout-left-data">
              <img
                src={UNTLD}
                alt=""
                style={{ width: "130px", height: "28px" }}
              />
              <div className="mt-2">
                {" "}
                <nav
                  aria-label="breadcrumb"
                  style={{
                    "--bs-breadcrumb-divider": "var(--divider-url)",
                  }}
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item total-price">
                      <Link to="/cart" className="text-dark">
                        Cart
                      </Link>
                    </li>
                    <li className="breadcrumb-item active total-price">
                      Information
                    </li>
                    <li className="breadcrumb-item active total-price">
                      Shipping
                    </li>
                    <li
                      className="breadcrumb-item active total-price"
                      aria-current="page"
                    >
                      Payments
                    </li>
                  </ol>
                </nav>
              </div>
              <h4 className="title total">Contact Information</h4>
              <p className="user-detail total">
                Raju Solanki (rajusolanki787@gmail.com)
              </p>
              <h4 className="mb-3">Shipping Address</h4>
              <form
                action=""
                onSubmit={formik.handleSubmit}
                className="d-flex gap-2 flex-wrap justify-content-between"
              >
                <div className="w-100">
                  <select
                    name="country"
                    id="floatingInput"
                    className="form-control form-select"
                    value={formik.values.country}
                    onChange={formik.handleChange("country")}
                    onBlur={formik.handleBlur("country")}
                  >
                    {" "}
                    <option value="" id="floatingInput">
                      Country/Region
                    </option>
                    <option value="India">India</option>
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                    <option value="Japan">Japan</option>
                    <option value="Brazil">Brazil</option>
                    <option value="South Africa">South Africa</option>
                  </select>

                  <div className="error text-danger my-1">
                    {formik.touched.country && formik.errors.country}
                  </div>
                </div>

                <div className="flex-grow-1">
                  <input
                    type="firstname"
                    className="form-control info-control"
                    placeholder="First Name"
                    value={formik.values.firstname}
                    onChange={formik.handleChange("firstname")}
                    onBlur={formik.handleBlur("firstname")}
                  />

                  <div className="error text-danger my-1">
                    {formik.touched.firstname && formik.errors.firstname}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="lastname"
                    className="form-control  info-control"
                    placeholder="Last Name"
                    value={formik.values.lastname}
                    onChange={formik.handleChange("lastname")}
                    onBlur={formik.handleBlur("lastname")}
                  />

                  <div className="error text-danger my-1">
                    {formik.touched.lastname && formik.errors.lastname}
                  </div>
                </div>

                <div className="w-100">
                  <input
                    type="address"
                    className="form-control  info-control"
                    placeholder="Your Address"
                    value={formik.values.address}
                    onChange={formik.handleChange("address")}
                    onBlur={formik.handleBlur("address")}
                  />

                  <div className="error text-danger my-1">
                    {formik.touched.address && formik.errors.address}
                  </div>

                  <input
                    type="number"
                    name="mobile"
                    className="form-control  info-control"
                    placeholder="Your Mobile Number"
                    value={formik.values.mobile}
                    onChange={formik.handleChange("mobile")}
                    onBlur={formik.handleBlur("mobile")}
                  />

                  <div className="error text-danger my-1">
                    {formik.touched.mobile && formik.errors.mobile}
                  </div>
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    name="appartment"
                    className="form-control  info-control"
                    placeholder="Appartment, suite, etc (optional)"
                    value={formik.values.appartment}
                    onChange={formik.handleChange("appartment")}
                    onBlur={formik.handleBlur("appartment")}
                  />

                  <div className="error text-danger my-1">
                    {formik.touched.appartment && formik.errors.appartment}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    className="form-control  info-control"
                    value={formik.values.city}
                    onChange={formik.handleChange("city")}
                    onBlur={formik.handleBlur("city")}
                  />

                  <div className="error text-danger my-1">
                    {formik.touched.city && formik.errors.city}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <select
                    name="state"
                    id=""
                    className="form-control form-select"
                    value={formik.values.state}
                    onChange={formik.handleChange("state")}
                    onBlur={formik.handleBlur("state")}
                  >
                    <option value="">State</option>
                    <option value="Haryana">Haryana</option>
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                  </select>
                  <div className="error text-danger my-1">
                    {formik.touched.state && formik.errors.state}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    name="pincode"
                    className="form-control info-control"
                    placeholder="Pincode"
                    value={formik.values.pincode}
                    onChange={formik.handleChange("pincode")}
                    onBlur={formik.handleBlur("pincode")}
                  />
                  <div className="error text-danger my-1">
                    {formik.touched.pincode && formik.errors.pincode}
                  </div>
                </div>
                <div className="w-100 mt-4">
                  <div className="d-flex flex-wrap gap-3 justify-content-between align-items-center">
                    <Link
                      to="/cart"
                      className="font d-flex align-items-center gap-2 text-dark"
                    >
                      <BiArrowBack
                        style={{ fontSize: "20px" }}
                        className="font"
                      />
                      Return to Cart
                    </Link>

                    <Link to="/store">
                      <button type="button" className="buttons font-2">
                        Continue to Shipping
                      </button>
                    </Link>

                    <button type="submit" className="buttons font-2">
                      Place Order
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bottom py-0">
              {cartState &&
                Array.isArray(cartState) &&
                cartState.length > 0 &&
                cartState.map((item, index) => {
                  return (
                    <div
                      className="d-flex  justify-content-between  flex-wrap mb-2 gap-4"
                      key={index}
                    >
                      <div className="w-75 side-card d-flex flex-wrap gap-4 mb-1">
                        <div className="side-card w-25 position-relative">
                          <span
                            style={{ top: "-8%", left: "-5%" }}
                            className="badge bg-secondary text-white rounded-circle position-absolute"
                          >
                            {item?.quantity}
                          </span>

                          {isMobileView && (
                            <span
                              className="position-absolute"
                              onClick={() => {
                                dispatch(removeProductFromTheCart(item?._id));
                              }}
                              style={{ top: "-8%", right: "-5%" }}
                            >
                              <lord-icon
                                src="https://cdn.lordicon.com/nqtddedc.json"
                                trigger="hover"
                                style={{
                                  width: "23px",
                                  height: "23px",
                                }}
                              ></lord-icon>
                            </span>
                          )}
                          <div className="p-1 border bg-white ">
                            <img
                              src={
                                item?.productId?.images[0]?.url < 0
                                  ? Watch2
                                  : item?.productId?.images[0]?.url
                              }
                              alt={item?.productId?.title}
                              className="img-fluid"
                            />
                          </div>
                        </div>
                        <div>
                          <h5
                            className="title mt-1 checkout-title"
                            dangerouslySetInnerHTML={{
                              __html:
                                item?.productId?.title.substr(0, 20) + "...",
                            }}
                          ></h5>

                          <p
                            className="mb-0 mt-1 checkout-price"
                            dangerouslySetInnerHTML={{
                              __html:
                                item?.productId?.description.substr(0, 30) +
                                "...",
                            }}
                          ></p>
                          <div className="d-flex gap-2">
                            {" "}
                            <p>Color: </p>
                            <span
                              className="checkout-color"
                              style={{
                                display: "inline-block",
                                width: "15px",
                                height: "15px",
                                marginTop: "2px",
                                backgroundColor: item?.color,
                                borderRadius: "50%",
                                marginRight: "5px",
                              }}
                            ></span>
                            <div className="checkout-price">
                              <h6 style={{ fontSize: "15px" }}>
                                {" "}
                                ₹{" "}
                                {parseFloat(
                                  item?.price * item?.quantity
                                ).toLocaleString("en-IN")}{" "}
                                /-
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      {!isMobileView && (
                        <div className="d-flex mt-2">
                          <button
                            className="delete-button"
                            onClick={() => {
                              dispatch(removeProductFromTheCart(item?._id));
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 69 14"
                              className="svgIcon bin-top"
                            >
                              <g clipPath="url(#clip0_35_24)">
                                <path
                                  fill="black"
                                  d="M20.8232 2.62734L19.9948 4.21304C19.8224 4.54309 19.4808 4.75 19.1085 4.75H4.92857C2.20246 4.75 0 6.87266 0 9.5C0 12.1273 2.20246 14.25 4.92857 14.25H64.0714C66.7975 14.25 69 12.1273 69 9.5C69 6.87266 66.7975 4.75 64.0714 4.75H49.8915C49.5192 4.75 49.1776 4.54309 49.0052 4.21305L48.1768 2.62734C47.3451 1.00938 45.6355 0 43.7719 0H25.2281C23.3645 0 21.6549 1.00938 20.8232 2.62734ZM64.0023 20.0648C64.0397 19.4882 63.5822 19 63.0044 19H5.99556C5.4178 19 4.96025 19.4882 4.99766 20.0648L8.19375 69.3203C8.44018 73.0758 11.6746 76 15.5712 76H53.4288C57.3254 76 60.5598 73.0758 60.8062 69.3203L64.0023 20.0648Z"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_35_24">
                                  <rect fill="white" height={14} width={69} />
                                </clipPath>
                              </defs>
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 69 57"
                              className="svgIcon bin-bottom"
                            >
                              <g clipPath="url(#clip0_35_22)">
                                <path
                                  fill="black"
                                  d="M20.8232 -16.3727L19.9948 -14.787C19.8224 -14.4569 19.4808 -14.25 19.1085 -14.25H4.92857C2.20246 -14.25 0 -12.1273 0 -9.5C0 -6.8727 2.20246 -4.75 4.92857 -4.75H64.0714C66.7975 -4.75 69 -6.8727 69 -9.5C69 -12.1273 66.7975 -14.25 64.0714 -14.25H49.8915C49.5192 -14.25 49.1776 -14.4569 49.0052 -14.787L48.1768 -16.3727C47.3451 -17.9906 45.6355 -19 43.7719 -19H25.2281C23.3645 -19 21.6549 -17.9906 20.8232 -16.3727ZM64.0023 1.0648C64.0397 0.4882 63.5822 0 63.0044 0H5.99556C5.4178 0 4.96025 0.4882 4.99766 1.0648L8.19375 50.3203C8.44018 54.0758 11.6746 57 15.5712 57H53.4288C57.3254 57 60.5598 54.0758 60.8062 50.3203L64.0023 1.0648Z"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_35_22">
                                  <rect fill="white" height={57} width={69} />
                                </clipPath>
                              </defs>
                            </svg>
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p className="checkout-price">Subtotal</p>
                <p className="checkout-price">
                  {" "}
                  ₹{" "}
                  {parseFloat(
                    totalPriceCheckout ? totalPriceCheckout : 0
                  ).toLocaleString("en-IN")}{" "}
                  /-
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 checkout-price">Shipping</p>
                <p className="mb-0 checkout-price">
                  ₹ <strike> 500 </strike> /-{" "}
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center border-bottom py-4">
              <h4 className="checkout-total-title">Total</h4>
              <h4 className="checkout-total-price">
                {" "}
                ₹{" "}
                {parseFloat(
                  totalPriceCheckout ? totalPriceCheckout : 0
                ).toLocaleString("en-IN")}{" "}
                /-
              </h4>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
