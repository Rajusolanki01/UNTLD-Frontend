import React, { useState } from "react";
import BreadCrum from "../components/BreadCrum";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { eyeClose, eyeOpen } from "../assets/assets";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { resetUserPassword } from "../feature/user/userSlice";

const resetPasswordSchema = yup.object({
  password: yup.string().required("password is Required"),
  confirmPassword: yup.string().required("Confirm Password is Required"),
});

const ResetPassword = () => {
  const dispatch = useDispatch();
  const naviagte = useNavigate();
  const { token } = useParams();
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: resetPasswordSchema,
    onSubmit: async (values) => {
      dispatch(resetUserPassword({ token: token, password: values.password }));

      setTimeout(() => {
        naviagte("/login");
      }, 1000);
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const passwordMatch = () => {
    return formik.values.password === formik.values.confirmPassword;
  };

  return (
    <>
      <Meta title={"Reset Password"} />
      <BreadCrum title="Reset Password" />
      <Container class1="login-wrapper home-wrapper-2 py-4">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-4">Reset Password</h3>
              <form
                action=""
                onSubmit={formik.handleSubmit}
                className="d-flex flex-column gap-2 position-relative"
              >
                <div>
                  <input
                    className="form-control"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={formik.values.password}
                    onChange={formik.handleChange("password")}
                    onBlur={formik.handleBlur("password")}
                  />
                  <div className="error text-danger my-2">
                    {formik.touched.password && formik.errors.password}
                  </div>
                </div>
                <div className="password-eye-reset">
                  <span onClick={togglePasswordVisibility}>
                    {showPassword ? (
                      <img src={eyeOpen} alt="" className="eye-btn" />
                    ) : (
                      <img src={eyeClose} alt="" className="eye-btn" />
                    )}
                  </span>
                </div>

                <input
                  className={`form-control mb-0 ${
                    !passwordMatch() ? "text-bg-danger" : ""
                  }`}
                  name="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange("confirmPassword")}
                  onBlur={formik.handleBlur("confirmPassword")}
                />
                <div className="error text-danger">
                  {formik.touched.confirmPassword &&
                    formik.errors.confirmPassword}
                </div>
                <div>
                  <div className="mt-4 d-flex justify-content-center gap-3 align-items-center">
                    <button type="submit" className="buttons">
                      Create Password
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

export default ResetPassword;
