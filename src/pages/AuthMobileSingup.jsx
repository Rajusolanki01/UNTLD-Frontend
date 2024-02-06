import React, { useState } from "react";
import { Link } from "react-router-dom";
import BreadCrum from "../components/BreadCrum";
import Meta from "../components/Meta";
import { eyeClose, eyeOpen } from "../assets/assets";
import Container from "../components/Container";

const AuthMobileSingup = () => {
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
      <Meta title={"Sign up"} />
      <BreadCrum title="Sign up" />
      <Container class1="login-wrapper home-wrapper-2 py-4">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-4">Create An Account</h3>
              <form
                action=""
                className="d-flex flex-column gap-4 position-relative"
              >
                <div>
                  <input
                    type="text"
                    name="text"
                    placeholder="First Name"
                    className="form-control"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="text"
                    placeholder="Last Name"
                    className="form-control"
                  />
                </div>
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
                <div className="password-eye-mobile-signup">
                  <span onClick={togglePasswordVisibility}>
                    {showPassword ? (
                      <img src={eyeOpen} alt="" className="eye-btn" />
                    ) : (
                      <img src={eyeClose} alt="" className="eye-btn" />
                    )}
                  </span>
                </div>

                <div>
                  <div className="mt-4 d-flex justify-content-center gap-3 align-items-center">
                    <button onClick={handleSubmit} className="auth-button">
                      <Link to="/signup" className=" signup text-white">
                        Create
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

export default AuthMobileSingup;
