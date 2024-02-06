import React from "react";
import BreadCrum from "../components/BreadCrum";
import Meta from "../components/Meta";
import Container from "../components/Container";

const ForgetPassowrd = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Meta title={"Forget Password"} />
      <BreadCrum title="Forget Password" />
      <Container class1="forget-password-wrapper home-wrapper-2 py-4">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Reset Your Password </h3>
              <p className="text-center mb-3">
                We Will send your an email to reset your password...
              </p>
              <form action="" className="d-flex flex-column gap-4">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Password"
                    className="form-control"
                  />
                </div>

                <div>
                  <div className="d-flex justify-content-center gap-3 align-items-center">
                    <button onClick={handleSubmit} className="buttons login">
                      Submit
                    </button>
                  </div>
                  <div>
                    <p className="text-center mt-3 mb-0">Cancel</p>
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
