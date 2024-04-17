import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { loginUser, registerUser } from "../feature/user/userSlice";
import LoadingCart from "../components/LoadingCart";
import { toast } from "sonner";

const signupSchema = yup.object({
  firstname: yup.string().required("First Name is Required"),
  lastname: yup.string().required("Last Name is Required"),
  email: yup.string().required("Email Should be Valid"),
  mobile: yup.string().required("Mobile Number is Required"),
  password: yup.string().required("Password is Required"),
});

const loginSchema = yup.object({
  email: yup.string().required("Email Should be Valid"),
  password: yup.string().required("Password is Required"),
});

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authState = useSelector((state) => state.auth);
  const { isLoading, isError, user } = authState;

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signupSchema,
    onSubmit: async (values) => {
      try {
        await dispatch(registerUser(values));
        setIsSignUp(false);
      } catch (error) {
        throw error;
      }
    },
  });

  const formikLogin = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      dispatch(loginUser(values));
    },
  });

  useEffect(() => {
    if (user !== null && isError === false) {
      navigate("/");
      toast.success("Welcome to UNTLD.");
    }
  }, [isError, navigate, user]);

  if (isLoading) {
    return (
      <div className="LoadingBar">
        <LoadingCart />
      </div>
    );
  }

  const toggleForm = () => {
    setIsSignUp((prev) => !prev);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const passwordMatch = () => {
    return formik.values.password === formik.values.confirmPassword;
  };

  return (
    <>
      <Meta title={"Account"} />
      <BreadCrum title="Account" />
      <Container class1="login-wrapper home-wrapper-2 py-4">
        <div className="row">
          <div className="col-12">
            <div
              className={`container "d-noned-md-block" ${
                isSignUp ? "active " : ""
              }`}
              id="container"
            >
              <div
                className={`form-container ${isSignUp ? "sign-up" : "sign-in"}`}
              >
                {isSignUp ? (
                  <form onSubmit={formik.handleSubmit}>
                    <h1 className="mb-0 heading">
                      {isSignUp ? "Create Account" : "Login"}
                    </h1>
                    <div className="social-icon mb-1">
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
                    <span className="mb-2">
                      {isSignUp
                        ? "or use your email for registration"
                        : "or use your email password"}
                    </span>
                    {isSignUp && (
                      <input
                        type="text"
                        name="firstname"
                        placeholder="First Name"
                        className="form-control"
                        value={formik.values.firstname}
                        onChange={formik.handleChange("firstname")}
                        onBlur={formik.handleBlur("firstname")}
                      />
                    )}

                    {isSignUp && (
                      <input
                        type="text"
                        name="lastname"
                        placeholder="Last Name"
                        className="form-control"
                        value={formik.values.lastname}
                        onChange={formik.handleChange("lastname")}
                        onBlur={formik.handleBlur("lastname")}
                      />
                    )}

                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                      value={formik.values.email}
                      onChange={formik.handleChange("email")}
                      onBlur={formik.handleBlur("email")}
                      required
                    />

                    {isSignUp && (
                      <input
                        name="mobile"
                        placeholder="Mobile Number"
                        className="form-control"
                        value={formik.values.mobile}
                        onChange={formik.handleChange("mobile")}
                        onBlur={formik.handleBlur("mobile")}
                      />
                    )}
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      className="form-control"
                      value={formik.values.password}
                      onChange={formik.handleChange("password")}
                      onBlur={formik.handleBlur("password")}
                    />
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
                          !passwordMatch() ? "bg-danger-subtle " : ""
                        }`}
                        type={showPassword ? "text" : "password"}
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange("confirmPassword")}
                        onBlur={formik.handleBlur("confirmPassword")}
                        required
                      />

                      <button
                        className="auth-button mt-3"
                        disabled={!passwordMatch()}
                        type="submit"
                      >
                        Sign Up
                      </button>
                    </>
                  </form>
                ) : (
                  <form onSubmit={formikLogin.handleSubmit}>
                    <h1 className="heading">Login</h1>
                    <div className="social-icon mb-1">
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
                    <span className="mb-2">"or use your email password"</span>

                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                      value={formikLogin.values.email}
                      onChange={formikLogin.handleChange("email")}
                      onBlur={formikLogin.handleBlur("email")}
                      required
                    />

                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      className="form-control"
                      value={formikLogin.values.password}
                      onChange={formikLogin.handleChange("password")}
                      onBlur={formikLogin.handleBlur("password")}
                    />

                    <div className="mb-2">
                      <Link to="/forget-password">Forget Your Password?</Link>
                    </div>

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
                  </form>
                )}
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
