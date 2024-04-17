import React, { useCallback, useEffect, useState } from "react";
import BreadCrum from "../components/BreadCrum";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserCart,
  removeProductFromTheCart,
  updateProductQuantityFromTheCart,
} from "../feature/user/userSlice";
import NotFound from "../components/NotFound";

const Cart = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state?.auth?.userCart);
  const [totalPriceCheckout, setTotalPriceCheckout] = useState(null);

  const getTheUserCart = useCallback(() => {
    dispatch(getUserCart());
  }, [dispatch]);

  const updateQuantity = (itemId, quantity) => {
    dispatch(
      updateProductQuantityFromTheCart({
        cartItem: itemId,
        quantity: quantity,
      })
    );
  };

  useEffect(() => {
    getTheUserCart();
  }, [getTheUserCart]);

  useEffect(() => {
    let totalCartPrice = 0;
    for (let index = 0; index < cartState.length; index++) {
      totalCartPrice =
        totalCartPrice +
        Number(cartState[index].quantity * cartState[index].price);

      setTotalPriceCheckout(totalCartPrice);
    }
  }, [cartState]);

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
      <Meta title={"Cart"} />
      <BreadCrum title="Cart" />
      <Container class1="cart-wrapper home-wrapper-2 py-4">
        <div className="container-xxl">
          <div className="row">
            {cartState?.length === 0 && (
              <>
                <NotFound />
              </>
            )}

            <div className="col-12">
              {cartState && cartState?.lenght > 0 && (
                <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                  <h4 className="cart-col-1">Product</h4>
                  <h4 className="cart-col-2">Price</h4>
                  <h4 className="cart-col-3">Quantity</h4>
                  <h4 className="cart-col-4">Total</h4>
                </div>
              )}

              {cartState &&
                Array.isArray(cartState) &&
                cartState.length > 0 &&
                cartState.map((item, index) => {
                  return (
                    <div
                      className="cart-data py-3 mb-2 d-flex justify-content-between  align-items-center"
                      key={index}
                    >
                      <div className="cart-col-1 d-flex  align-items-center gap-3">
                        <div className="w-25 cart-image">
                          <img
                            src={item?.productId?.images[0]?.url}
                            alt={item?.productId?.title}
                            className="img-fluid"
                          />
                        </div>
                        <div className="w-75 cart-image">
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                item?.productId?.title.substr(0, 20) + "...",
                            }}
                          ></p>

                          <div className="d-flex gap-2">
                            {" "}
                            <p>Color: </p>
                            <span className="cart-color"
                              style={{
                                display: "inline-block",
                                width: "20px",
                                height: "20px",
                                backgroundColor: item?.color,
                                borderRadius: "50%",
                                marginRight: "5px",
                              }}
                            ></span>
                          </div>
                        </div>
                      </div>
                      <div className="cart-col-2">
                        <h5 className="price">
                          {" "}
                          ₹ {parseFloat(item?.price).toLocaleString("en-IN")} /-
                        </h5>
                      </div>
                      <div className="cart-col-3 d-flex align-items-center gap-2">
                        <div className="form-input">
                          <input
                            className="form-control form-width"
                            type="number"
                            value={item?.quantity}
                            onChange={(e) =>
                              updateQuantity(item?._id, e.target.value)
                            }
                            min={1}
                            max={10}
                            name=""
                            id=""
                          />
                        </div>
                        <div>
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
                      </div>
                      <div className="cart-col-4">
                        {" "}
                        <h5 className="price">
                          {" "}
                          ₹{" "}
                          {parseFloat(
                            item?.price * item?.quantity
                          ).toLocaleString("en-IN")}{" "}
                          /-
                        </h5>
                      </div>
                    </div>
                  );
                })}
            </div>
            {cartState && cartState?.length > 0 && (
              <div className="col-12 py-2 mt-4">
                <div className="d-flex justify-content-between align-align-items-baseline">
                  <div>
                    <Link to="/store" className="buttons continue-head">
                      Continue to Shopping
                    </Link>
                  </div>
                  <div className="check-head d-flex flex-column align-items-end">
                    <h4>
                      {" "}
                      ₹ {parseFloat(totalPriceCheckout).toLocaleString(
                        "en-IN"
                      )}{" "}
                      /-
                    </h4>
                    <p>Taxes and shipping calculated at checkout</p>
                    <Link to="/checkout" className="buttons continue-head">
                      Checkout
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
