import React, { useCallback, useEffect } from "react";
import BreadCrum from "../components/BreadCrum";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getMyOrders } from "../feature/user/userSlice";
import LoadingCart from "../components/LoadingCart";
import NotFound from "../components/NotFound";

const MyOrders = () => {
  const dispatch = useDispatch();
  const orderState = useSelector((state) => state.auth.myOrders);
  const loadingState = useSelector((state) => state.auth.isLoading);

  const getMyOrder = useCallback(() => {
    dispatch(getMyOrders());
  }, [dispatch]);

  useEffect(() => {
    getMyOrder();
  }, [getMyOrder]);

  if (loadingState) {
    return (
      <div className="LoadingBar">
        <LoadingCart />
      </div>
    );
  }

  return (
    <>
      <Meta title={"My Orders"} />
      <BreadCrum title="My Orders" />
      <Container class1="myorder-wrapper home-wrapper-2 py-4">
        {orderState?.length === 0 ? (
          <>
            <NotFound />
          </>
        ) : (
          <div className="row">
            <div className="col-lg-12 col-md-6 col-sm-3">
              <div className="row">
                <div className="row-first d-flex gap-1 justify-content-between">
                  <div className="col-lg-3 col-md-3 col-sm-3">
                    <h5>Order Id</h5>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3">
                    <h5>Total Amount</h5>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3 ">
                    <h5>Total Amount After Discount</h5>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3 ">
                    <h5>Status</h5>
                  </div>
                </div>
              </div>
            </div>
            {orderState &&
              Array.isArray(orderState) &&
              orderState.length > 0 &&
              orderState.map((order, orderIndex) => (
                <div className="d-flex">
                  <div key={orderIndex} className="col-lg-12">
                    <div
                      className="row my-4 pt-3 mb-0"
                      style={{ backgroundColor: "#febd69" }}
                    >
                      <div className="row-first d-flex gap-1 justify-content-between">
                        <div className="heading-1 col-lg-3 col-md-3 col-sm-3">
                          <p style={{ fontSize: "15px", fontWeight: "400" }}>
                            {order?._id}
                          </p>
                        </div>
                        <div className="heading-1 col-lg-3 col-md-3 col-sm-3">
                          <p style={{ fontSize: "15px", fontWeight: "400" }}>
                            $
                            {parseFloat(order?.totalPrice).toLocaleString(
                              "en-IN"
                            )}{" "}
                            /-
                          </p>
                        </div>
                        <div className="heading-1 col-lg-3 col-md-3 col-sm-3">
                          <p style={{ fontSize: "15px", fontWeight: "400" }}>
                            $
                            {parseFloat(
                              order?.totalPriceAfterDiscount
                            ).toLocaleString("en-IN")}{" "}
                            /-
                          </p>
                        </div>
                        <div className="heading-1 col-lg-3 col-md-3 col-sm-3">
                          <p style={{ fontSize: "15px", fontWeight: "400" }}>
                            {order?.orderStatus}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div
                        className="row py-3"
                        style={{ backgroundColor: "#232f3e" }}
                      >
                        <div className="row-first d-flex gap-1 justify-content-between">
                        <div className="heading-1 col-lg-3 col-md-3 col-sm-3">
                            <h6 className="text-white">Product Name</h6>
                          </div>
                          <div className="heading-1 col-lg-3 col-md-3 col-sm-3">
                            <h6 className="text-white">Quantity</h6>
                          </div>
                          <div className="heading-1 col-lg-3 col-md-3 col-sm-3">
                            <h6 className="text-white">Color</h6>
                          </div>
                          <div className="heading-1 col-lg-3 col-md-3 col-sm-3">
                            <h6 className="text-white">Price</h6>
                          </div>
                        </div>
                      </div>
                      {order.orderItems.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="row"
                          style={{ backgroundColor: "#232f3e" }}
                        >
                          <div className="row-first d-flex gap-1 justify-content-between">
                          <div className="heading-2 col-lg-3 col-md-3 col-sm-3">
                              <p className="text-white para-1">
                                {item?.product?.title}
                              </p>
                            </div>
                            <div className="heading-1 col-lg-3 col-md-3 col-sm-3">
                              <p className="text-white">{item?.quantity}</p>
                            </div>
                            <div className="heading-1 col-lg-3 col-md-3 col-sm-3">
                              <p
                                style={{
                                  display: "inline-block",
                                  width: "15px",
                                  height: "15px",
                                  color: "white",
                                  marginTop: "2px",
                                  backgroundColor: item?.color,
                                  borderRadius: "50%",
                                  marginRight: "5px",
                                }}
                              ></p>
                            </div>
                            <div className="heading-1 col-lg-3 col-md-3 col-sm-3">
                              <p className="text-white">
                                $
                                {parseFloat(
                                  item?.price * item?.quantity
                                ).toLocaleString("en-IN")}{" "}
                                /-
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </Container>
    </>
  );
};

export default MyOrders;
