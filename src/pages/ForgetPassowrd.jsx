import React from "react";
import BreadCrum from "../components/BreadCrum";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { forgotUserPassword } from "../feature/user/userSlice";
import { Link } from "react-router-dom";

const forgotPasswordSchema = yup.object({
  email: yup.string().required("Email Should be Valid"),
});

const ForgetPassowrd = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: forgotPasswordSchema,
    onSubmit: async (values) => {
      dispatch(forgotUserPassword(values));
    },
  });

  return (
    <>
      <Meta title={"Forget Password"} />
      <BreadCrum title="Forget Password" />
      <Container class1="forget-password-wrapper home-wrapper-2 py-4">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Forgot Your Password </h3>
              <p className="text-center mb-3">
                We Will send your an email to reset your password...
              </p>
              <form
                action=""
                onSubmit={formik.handleSubmit}
                className="d-flex flex-column gap-4"
              >
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    className="form-control"
                    value={formik.values.email}
                    onChange={formik.handleChange("email")}
                    onBlur={formik.handleBlur("email")}
                  />
                  <div className="error text-danger my-1">
                    {formik.touched.email && formik.errors.email}
                  </div>
                </div>

                <div>
                  <div className="d-flex justify-content-center gap-3 align-items-center">
                    <button type="submit" className="buttons login">
                      Submit
                    </button>
                  </div>
                  <div className="d-flex justify-content-center">
                    <Link to="/login" className="text-center mt-3 mb-0">Cancel</Link>
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

export default ForgetPassowrd;
