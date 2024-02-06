import React, { useState } from "react";
import { Link } from "react-router-dom";
import { eyeClose, eyeOpen } from "../assets/assets";

const AuthMobileLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="auth-card">
        <h3 className="text-center mb-4">Login</h3>
        <form action="" className="d-flex flex-column gap-4 position-relative">
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-control"
            />
          </div>
          <div>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={password}
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="password-eye-mobile-login">
            <span onClick={togglePasswordVisibility}>
              {showPassword ? (
                <img src={eyeOpen} alt="" className="eye-btn" />
              ) : (
                <img src={eyeClose} alt="" className="eye-btn" />
              )}
            </span>
          </div>
          <div>
            <Link to="/forget-password" className="text-dark ">
              Forget Password?
            </Link>
            <div className="mt-4 d-flex justify-content-center gap-3 align-items-center">
              <button
                className="buttons login"
                type="submit"
                onClick={handleSubmit}
              >
                Login
              </button>
              <Link to="/signup" className="buttons signup text-white">
                Sign up
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AuthMobileLogin;
