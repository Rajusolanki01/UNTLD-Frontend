import React, { useState } from "react";
import { Link } from "react-router-dom";
import { eyeClose, eyeOpen } from "../assets/assets";
import { useFormik } from "formik";
import * as yup from "yup";
import CustomsInput from "../components/CustomsInput";

const loginSchema = yup.object({
  email: yup.string().required("Email Should be Valid"),
  password: yup.string().required("Password is Required"),
});

const AuthMobileLogin = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      <div className="auth-card">
        <h3 className="text-center mb-4">Login</h3>
        <form action="" className="d-flex flex-column gap-4 position-relative">
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
            <div
              className={`password-eye-mobile-login ${
                formik.errors.password ? "with-error-login" : ""
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
          </div>

          <div>
            <Link to="/forget-password" className="text-dark ">
              Forget Password?
            </Link>
            <div className="mt-4 d-flex justify-content-center gap-3 align-items-center">
              <button
                className="buttons login"
                type="submit"
                onClick={formik.handleSubmit}
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
