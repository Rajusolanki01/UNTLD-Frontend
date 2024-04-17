import React, { useCallback, useEffect, useState } from "react";
import BreadCrum from "../components/BreadCrum";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getUserProductWishlist } from "../feature/user/userSlice";
import { addProductWishlist } from "../feature/product/productSlice";
import LoadingCart from "../components/LoadingCart";
import NotFound from "../components/NotFound";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlistState = useSelector((state) => state.auth.wishlist.wishList);
  const loadingState = useSelector((state) => state.auth);

  const { isLoading } = loadingState;

  const [wishlist, setWishlist] = useState(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    return storedWishlist ? JSON.parse(storedWishlist) : {};
  });

  const getWishlist = useCallback(() => {
    dispatch(getUserProductWishlist());
  }, [dispatch]);

  const removeFromWishlist = (id) => {
    const updatedWishlist = { ...wishlist, [id]: !wishlist[id] };
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    dispatch(addProductWishlist(id));
    setTimeout(() => {
      dispatch(getUserProductWishlist());
    }, 1000);
  };
  useEffect(() => {
    getWishlist();
  }, [getWishlist]);

  if (isLoading) {
    return (
      <div className="LoadingBar">
        <LoadingCart />
      </div>
    );
  }
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrum title="Wishlist" />

      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          {wishlistState?.length === 0 && (
            <>
              <NotFound />
            </>
          )}
          {wishlistState?.map((item, index) => {
            return (
              <div className="col-3 col-66 mb-3" key={index}>
                <div className="wishlist-card product-card position-relative">
                  <div
                    className="position-absolute cross"
                    onClick={() => removeFromWishlist(item?._id)}
                  >
                    <lord-icon
                      src="https://cdn.lordicon.com/nqtddedc.json"
                      trigger="hover"
                      style={{ width: "23px", height: "23px" }}
                    ></lord-icon>
                  </div>
                  <div className="wishlist-card-image product-image">
                    <img
                      src={item?.images[0]?.url}
                      alt={item?.title}
                      className="img-fluid w-100"
                    />
                    <img
                      src={item?.images[1]?.url}
                      alt={item?.title}
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="py-3">
                    <h5 className="title">
                      {item?.title.substr(0, 18) + "..."}
                    </h5>
                    <h6 className="price">
                      {" "}
                      ₹{parseFloat(item.price).toLocaleString("en-IN")}/-
                    </h6>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default Wishlist;
