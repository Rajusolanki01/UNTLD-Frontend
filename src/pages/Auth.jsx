import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthMobileLogin from "./AuthMobileLogin";
import BreadCrum from "../components/BreadCrum";
import Meta from "../components/Meta";
import {
  Github,
  Instagram,
  Pinterest,
  Twitter,
  UNTLD,
  eyeClose,
  eyeOpen,
} from "../assets/assets";
import Container from "../components/Container";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");

  const toggleForm = () => {
    setIsSignUp((prev) => !prev);
    setPassword("");
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const passwordMatch = () => {
    return password === confirmPassword;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Meta title={"Login"} />
      <BreadCrum title="Login" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="d-md-none">
              {" "}
              <AuthMobileLogin />{" "}
            </div>
            <div
              className={`container d-none d-md-block ${
                isSignUp ? "active " : ""
              }`}
              id="container"
            >
              <div
                className={`form-container ${isSignUp ? "sign-up" : "sign-in"}`}
              >
                <form onSubmit={handleSubmit}>
                  <h1>{isSignUp ? "Create Account" : "Login"}</h1>
                  <div className="social-icon">
                    <Link href="/" className="icon">
                      <img
                        src={Github}
                        alt="social-icons"
                        className="w-75 img-fluid"
                      />
                    </Link>
                    <Link href="/" className="icon">
                      <img
                        src={Pinterest}
                        alt="social-icons"
                        className="w-75 img-fluid"
                      />
                    </Link>
                    <Link href="/" className="icon">
                      <img
                        src={Instagram}
                        alt="social-icons"
                        className="w-75 img-fluid"
                      />
                    </Link>
                    <Link href="/" className="icon">
                      <img
                        src={Twitter}
                        alt="social-icons"
                        className="w-75 img-fluid"
                      />
                    </Link>
                  </div>
                  <span>
                    {isSignUp
                      ? "or use your email for registration"
                      : "or use your email password"}
                  </span>
                  {isSignUp && (
                    <input
                      type="text"
                      placeholder="First Name"
                      className="form-control"
                    />
                  )}

                  {isSignUp && (
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="form-control"
                    />
                  )}

                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                    required
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={password}
                    className="form-control"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {isSignUp && (
                    <>
                      <div className="password-eye-signup">
                        <span onClick={togglePasswordVisibility}>
                          {showPassword ? (
                            <img src={eyeOpen} alt="" className="eye-btn" />
                          ) : (
                            <img src={eyeClose} alt="" className="eye-btn" />
                          )}
                        </span>
                      </div>
                      <input
                        className={`${
                          !passwordMatch() ? "text-bg-danger" : ""
                        }`}
                        type={showPassword ? "text" : "password"}
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />

                      <button
                        className="auth-button mt-3"
                        type="submit"
                        disabled={!passwordMatch()}
                      >
                        Sign Up
                      </button>
                    </>
                  )}

                  {!isSignUp && (
                    <Link to="/forget-password">Forget Your Password?</Link>
                  )}
                  {!isSignUp && (
                    <>
                      <div className="password-eyes-login">
                        <span onClick={togglePasswordVisibility}>
                          {showPassword ? (
                            <img src={eyeOpen} alt="" className="eye-btn" />
                          ) : (
                            <img src={eyeClose} alt="" className="eye-btn" />
                          )}
                        </span>
                      </div>
                      <button className="auth-button" type="submit">
                        Login
                      </button>
                    </>
                  )}
                </form>
              </div>
              <div className="toggle-container">
                <div className="toggle">
                  <div
                    className={`toggle-panel toggle-left ${
                      !isSignUp ? "hidden" : ""
                    }`}
                  >
                    <h1>Welcome Back!</h1>
                    <p>Enter your personal details to use all site features</p>
                    <button
                      className="auth-button"
                      onClick={toggleForm}
                      type="button"
                    >
                      Login
                    </button>
                  </div>
                  <div
                    className={`toggle-panel toggle-right ${
                      isSignUp ? "hidden" : ""
                    }`}
                  >
                    <div>
                      <img
                        src={UNTLD}
                        alt="Brand Name"
                        className="mb-4 brand-name"
                      />
                      <h2>
                        <b> में आपका स्वागत है</b>
                      </h2>
                    </div>
                    <p>Enter your personal details to use all site features</p>
                    <button
                      className="auth-button"
                      onClick={toggleForm}
                      type="button"
                    >
                      Sign up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Auth;
