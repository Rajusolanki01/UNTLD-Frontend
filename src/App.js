import React from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import OurStore from "./pages/OurStore";
import Blog from "./pages/Blog";
import CompareProducts from "./pages/CompareProducts";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Auth from "./pages/Auth";
import ForgetPassowrd from "./pages/ForgetPassowrd";
import ResetPassword from "./pages/ResetPassword";
import SingleBlog from "./pages/SingleBlog";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import TermAndCondition from "./pages/TermAndCondition";
import SingleProduct from "./pages/SingleProduct";
import Checkout from "./pages/Checkout";
import { Toaster } from "sonner";
import { KEY_ACCESS_TOKEN, getItem } from "./utils/localStoageManager";
import MyOrders from "./pages/MyOrders";
import Profile from "./pages/Profile";

function App() {
  function RequireUser() {
    const user = getItem(KEY_ACCESS_TOKEN);
    return user ? <Outlet /> : <Navigate to="/login" />;
  }

  function OnlyIfLoggedIn() {
    const user = getItem(KEY_ACCESS_TOKEN);
    return user ? <Navigate to={"/"} /> : <Outlet />;
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="store" element={<OurStore />} />
            <Route path="orders" element={<MyOrders />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="blog/:id" element={<SingleBlog />} />
            <Route path="product/:id" element={<SingleProduct />} />
            <Route path="compare-products" element={<CompareProducts />} />{" "}
            <Route element={<RequireUser />}>
              <Route path="profile" element={<Profile />} />
              <Route path="wishlist" element={<Wishlist />} />
              <Route path="cart" element={<Cart />} />
              <Route path="checkout" element={<Checkout />} />
            </Route>{" "}
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="refund-policy" element={<RefundPolicy />} />
            <Route path="shipping-policy" element={<ShippingPolicy />} />
            <Route
              path="terms-and-conditions"
              element={<TermAndCondition />}
            />{" "}
          </Route>
          <Route element={<OnlyIfLoggedIn />}>
            <Route path="/" element={<Layout />}>
              <Route path="login" element={<Auth />} />
              <Route path="forget-password" element={<ForgetPassowrd />} />
              <Route path="reset-password/:token" element={<ResetPassword />} />
            </Route>
          </Route>{" "}
        </Routes>
      </BrowserRouter>
      <div>
        <Toaster position="top-center" expand={false} />
      </div>
    </>
  );
}

export default App;
