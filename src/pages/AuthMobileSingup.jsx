import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BreadCrum from "../components/BreadCrum";
import Meta from "../components/Meta";
import { eyeClose, eyeOpen } from "../assets/assets";
import Container from "../components/Container";
import CustomsInput from "../components/CustomsInput";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import { registerUser } from "../feature/user/userSlice";
import LoadingCart from "../components/LoadingCart";

const signupSchema = yup.object({
  firstname: yup.string().required("First Name is Required"),
  lastname: yup.string().required("Last Name is Required"),
  email: yup.string().required("Email Should be Valid"),
  mobile: yup.string().required("Mobile Number is Required"),
  password: yup.string().required("Password is Required"),
});

const AuthMobileSingup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const authState = useSelector((state) => state.auth);
  const { isLoading } = authState;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      password: "",
    },
    validationSchema: signupSchema,
    onSubmit: (values) => {
      dispatch(registerUser(values));
      navigate("/login");
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  if (isLoading) {
    return (
      <div className="LoadingBar">
        <LoadingCart />
      </div>
    );
  }

  return (
    <>
      <Meta title={"Sign up"} />
      <BreadCrum title="Sign up" />
      <Container class1="login-wrapper home-wrapper-2 py-3 d-md-none">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-4">Create An Account</h3>
              <form
                onSubmit={formik.handleSubmit}
                action=""
                className="d-flex flex-column gap-4 position-relative"
              >
                <div>
                  <CustomsInput
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    value={formik.values.firstname}
                    onChange={formik.handleChange("firstname")}
                    onBlur={formik.handleBlur("firstname")}
                  />
                  <div className="error">
                    {formik.touched.firstName && formik.errors.firstname}
                  </div>
                </div>
                <div>
                  <CustomsInput
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    value={formik.values.lastname}
                    onChange={formik.handleChange("lastname")}
                    onBlur={formik.handleBlur("lastname")}
                  />
                  <div className="error">
                    {formik.touched.lastName && formik.errors.lastName}
                  </div>
                </div>
                <div>
                  <CustomsInput
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange("email")}
                    onBlur={formik.handleBlur("email")}
                  />
                  <div className="error">
                    {formik.touched.email && formik.errors.email}
                  </div>
                </div>
                <div>
                  <CustomsInput
                    type="tel"
                    name="mobile"
                    placeholder="Mobile Number"
                    value={formik.values.mobile}
                    onChange={formik.handleChange("mobile")}
                    onBlur={formik.handleBlur("mobile")}
                  />
                  <div className="error">
                    {formik.touched.mobile && formik.errors.mobile}
                  </div>
                </div>
                <div>
                  <CustomsInput
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={formik.values.password}
                    onChange={formik.handleChange("password")}
                    onBlur={formik.handleBlur("password")}
                  />
                  <div className="error">
                    {formik.touched.password && formik.errors.password}
                  </div>
                </div>
                <div
                  className={`password-eye-mobile-signup ${
                    formik.errors.password ? "with-error-signup" : ""
                  }`}
                >
                  <div onClick={togglePasswordVisibility}>
                    {showPassword ? (
                      <img src={eyeOpen} alt="" className="eye-btn" />
                    ) : (
                      <img src={eyeClose} alt="" className="eye-btn" />
                    )}
                  </div>
                </div>

                <div>
                  <div className="d-flex justify-content-center gap-3 align-items-center">
                    <button className="auth-button" type="SUBMIT">
                      <span className="signup text-white">Create</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default AuthMobileSingup;
