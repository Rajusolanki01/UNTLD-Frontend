import React, { useState } from "react";
import BreadCrum from "../components/BreadCrum";
import { Link } from "react-router-dom";
import Meta from "../components/Meta";
import Container from "../components/Container";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");

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
      <Meta title={"Reset Password"} />
      <BreadCrum title="Reset Password" />
      <Container class1="login-wrapper home-wrapper-2 py-4">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-4">Reset Password</h3>
              <form
                action=""
                className="d-flex flex-column gap-4 position-relative"
              >
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
                <div className="password-eye-reset">
                  <span onClick={togglePasswordVisibility}>
                    {showPassword ? (
                      <img
                        src="assets/eyeOpen.svg"
                        alt=""
                        className="eye-btn"
                      />
                    ) : (
                      <img
                        src="assets/eyeClose.svg"
                        alt=""
                        className="eye-btn"
                      />
                    )}
                  </span>
                </div>

                <input
                  className={`form-control ${
                    !passwordMatch() ? "text-bg-danger" : ""
                  }`}
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />

                <div>
                  <div className="mt-4 d-flex justify-content-center gap-3 align-items-center">
                    <button onClick={handleSubmit} className="buttons">
                      <Link to="/" className="signup text-white">
                        Create Password
                      </Link>
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
