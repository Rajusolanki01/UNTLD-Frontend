import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar } from "../assets/assets";
import BreadCrum from "../components/BreadCrum";
import Container from "../components/Container";
import LoadingCart from "../components/LoadingCart";
import * as yup from "yup";
import { useFormik } from "formik";
import {
  deleteUserProfile,
  updateUserProfile,
} from "../feature/user/userSlice";
import {
  KEY_ACCESS_TOKEN,
  KEY_USER_ID,
  removeItem,
} from "../utils/localStoageManager";
import { useNavigate } from "react-router-dom";

const updateSchema = yup.object({
  firstname: yup.string().required("First Name is Required"),
  lastname: yup.string().required("Last Name is Required"),
  email: yup.string().required("Email Should be Valid"),
  mobile: yup.string().required("Mobile Number is Required"),
});

export const changeDateFormat = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString().slice(-2);
  const hours = date.getHours() % 12 || 12;
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const time = `${hours}:${minutes} ${date.getHours() >= 12 ? "pm" : "am"}`;
  return `${day}/${month}/${year} ${time}`;
};

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [updateProfile, setUpdateProfile] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const singleUserState = useSelector((state) => state.auth.singleUser);
  const loadingState = useSelector((state) => state.auth.isLoading);

  const formik = useFormik({
    initialValues: {
      firstname: singleUserState.firstname,
      lastname: singleUserState.lastname,
      email: singleUserState.email,
      mobile: singleUserState.mobile,
    },
    validationSchema: updateSchema,
    onSubmit: async (values) => {
      dispatch(
        updateUserProfile({
          firstname: values.firstname,
          lastname: values.lastname,
          email: values.email,
          mobile: values.mobile,
        })
      );

      setUpdateProfile(false);
    },
  });

  const updateProfileActive = () => {
    setUpdateProfile(!updateProfile);
  };

  const handleDeleteConfirm = () => {
    setShowDeleteConfirm(true);
  };

  const handleDeleteCancel = () => {
    setShowDeleteConfirm(false);
  };

  const deleteprofileHandle = () => {
    dispatch(deleteUserProfile(singleUserState._id));
    setTimeout(() => {
      removeItem(KEY_ACCESS_TOKEN);
      removeItem(KEY_USER_ID);
      removeItem("wishlist");
      navigate("/login");
    }, 2000);
  };

  if (loadingState) {
    return (
      <div className="LoadingBar">
        <LoadingCart />
      </div>
    );
  }

  return (
    <>
      <BreadCrum
        title={`${singleUserState.firstname} ${singleUserState.lastname}`}
      />
      <Container class1="home-wrapper-2 py-4 d-flex">
        <div className="row gap-3 profile-card">
          <div className="col-3">
            <div className="card profile-card-1 position-relative">
              <div className="card__img">
                <svg width="100%" xmlns="http://www.w3.org/2000/svg">
                  <rect height={400} width={540} fill="#ffffff" />
                  <defs>
                    <linearGradient
                      gradientTransform="rotate(222,648,379)"
                      y2="100%"
                      y1={0}
                      x2={0}
                      x1={0}
                      gradientUnits="userSpaceOnUse"
                      id="a"
                    >
                      <stop stopColor="#ffffff" offset={0} />
                      <stop stopColor="#FC726E" offset={1} />
                    </linearGradient>
                    <pattern
                      viewBox="0 0 1080 900"
                      y={0}
                      x={0}
                      height={250}
                      width={300}
                      id="b"
                      patternUnits="userSpaceOnUse"
                    >
                      <g fillOpacity="0.5">
                        <polygon points="90 150 0 300 180 300" fill="#444" />
                        <polygon points="90 150 180 0 0 0" />
                        <polygon points="270 150 360 0 180 0" fill="#AAA" />
                        <polygon points="450 150 360 300 540 300" fill="#DDD" />
                        <polygon points="450 150 540 0 360 0" fill="#999" />
                        <polygon points="630 150 540 300 720 300" />
                        <polygon points="630 150 720 0 540 0" fill="#DDD" />
                        <polygon points="810 150 720 300 900 300" fill="#444" />
                        <polygon points="810 150 900 0 720 0" fill="#FFF" />
                        <polygon
                          points="990 150 900 300 1080 300"
                          fill="#DDD"
                        />
                        <polygon points="990 150 1080 0 900 0" fill="#444" />
                        <polygon points="90 450 0 600 180 600" fill="#DDD" />
                        <polygon points="90 450 180 300 0 300" />
                        <polygon points="270 450 180 600 360 600" fill="#666" />
                        <polygon points="270 450 360 300 180 300" fill="#AAA" />
                        <polygon points="450 450 360 600 540 600" fill="#DDD" />
                        <polygon points="450 450 540 300 360 300" fill="#999" />
                        <polygon points="630 450 540 600 720 600" fill="#999" />
                        <polygon points="630 450 720 300 540 300" fill="#FFF" />
                        <polygon points="810 450 720 600 900 600" />
                        <polygon points="810 450 900 300 720 300" fill="#DDD" />
                        <polygon
                          points="990 450 900 600 1080 600"
                          fill="#AAA"
                        />
                        <polygon
                          points="990 450 1080 300 900 300"
                          fill="#444"
                        />
                        <polygon points="90 750 0 900 180 900" fill="#222" />
                        <polygon points="270 750 180 900 360 900" />
                        <polygon points="270 750 360 600 180 600" fill="#DDD" />
                        <polygon points="450 750 540 600 360 600" />
                        <polygon points="630 750 540 900 720 900" />
                        <polygon points="630 750 720 600 540 600" fill="#444" />
                        <polygon points="810 750 720 900 900 900" fill="#AAA" />
                        <polygon points="810 750 900 600 720 600" fill="#666" />
                        <polygon
                          points="990 750 900 900 1080 900"
                          fill="#999"
                        />
                        <polygon points="180 0 90 150 270 150" fill="#999" />
                        <polygon points="360 0 270 150 450 150" fill="#444" />
                        <polygon points="540 0 450 150 630 150" fill="#FFF" />
                        <polygon points="900 0 810 150 990 150" />
                        <polygon points="0 300 -90 450 90 450" fill="#222" />
                        <polygon points="0 300 90 150 -90 150" fill="#FFF" />
                        <polygon points="180 300 90 450 270 450" fill="#FFF" />
                        <polygon points="180 300 270 150 90 150" fill="#666" />
                        <polygon points="360 300 270 450 450 450" fill="#222" />
                        <polygon points="360 300 450 150 270 150" fill="#FFF" />
                        <polygon points="540 300 450 450 630 450" fill="#444" />
                        <polygon points="540 300 630 150 450 150" fill="#222" />
                        <polygon points="720 300 630 450 810 450" fill="#AAA" />
                        <polygon points="720 300 810 150 630 150" fill="#666" />
                        <polygon points="900 300 810 450 990 450" fill="#FFF" />
                        <polygon points="900 300 990 150 810 150" fill="#999" />
                        <polygon points="0 600 -90 750 90 750" />
                        <polygon points="0 600 90 450 -90 450" fill="#666" />
                        <polygon points="180 600 90 750 270 750" fill="#AAA" />
                        <polygon points="180 600 270 450 90 450" fill="#444" />
                        <polygon points="360 600 270 750 450 750" fill="#444" />
                        <polygon points="360 600 450 450 270 450" fill="#999" />
                        <polygon points="540 600 630 450 450 450" fill="#666" />
                        <polygon points="720 600 630 750 810 750" fill="#222" />
                        <polygon points="900 600 810 750 990 750" fill="#FFF" />
                        <polygon points="900 600 990 450 810 450" fill="#222" />
                        <polygon points="0 900 90 750 -90 750" fill="#DDD" />
                        <polygon points="180 900 270 750 90 750" fill="#444" />
                        <polygon points="360 900 450 750 270 750" fill="#FFF" />
                        <polygon points="540 900 630 750 450 750" fill="#AAA" />
                        <polygon points="720 900 810 750 630 750" fill="#FFF" />
                        <polygon points="900 900 990 750 810 750" fill="#222" />
                        <polygon
                          points="1080 300 990 450 1170 450"
                          fill="#222"
                        />
                        <polygon
                          points="1080 300 1170 150 990 150"
                          fill="#FFF"
                        />
                        <polygon points="1080 600 990 750 1170 750" />
                        <polygon
                          points="1080 600 1170 450 990 450"
                          fill="#666"
                        />
                        <polygon
                          points="1080 900 1170 750 990 750"
                          fill="#DDD"
                        />
                      </g>
                    </pattern>
                  </defs>
                  <rect height="100%" width="100%" fill="url(#a)" y={0} x={0} />
                  <rect height="100%" width="100%" fill="url(#b)" y={0} x={0} />
                </svg>
              </div>

              <div className="image-cricle">
                <img src={Avatar} alt="" className="avatar-image" />
              </div>
              <div className="card__title">{`${singleUserState.firstname} ${singleUserState.lastname}`}</div>
              <div className="card__subtitle">{singleUserState.email}</div>
              <div className="card__wrapper d-flex align-singleUserStates-center gap-4">
                <button
                  type="submit"
                  className="buttons deny-text mt-3"
                  onClick={updateProfileActive}
                >
                  Update Profile
                </button>
                <button
                  className="delete-buttons mt-3"
                  onClick={handleDeleteConfirm}
                >
                  Delete Account
                </button>
                {showDeleteConfirm && (
                  <div className="delete-confirm-overlay">
                    <div className="delete-block-modal">
                      <div className="delete-confirm-modal">
                        <p className="delete-text-modal mt-2">
                          Are you sure you want to delete your account ?<br />
                          We Missed You{" "}
                        </p>
                        <div className="inside-button">
                          <button
                            className="delete-buttons login"
                            onClick={deleteprofileHandle}
                          >
                            Confirm
                          </button>
                          <button
                            className="buttons deny-text login"
                            onClick={handleDeleteCancel}
                          >
                            Deny
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="col-8 profile-card-2">
            <div className="card-2">
              <div className="heading m-2 flex-grow-1">
                <div className="customer py-2">
                  {!updateProfile ? (
                    <div className="customer-details d-flex flex-wrap flex-column m-1">
                      <div className="d-flex gap-2 mb-0">
                        <h6 className="mt-0">Name : </h6>
                        <p>
                          {`${singleUserState.firstname} ${singleUserState.lastname}`}{" "}
                        </p>
                      </div>
                      <div className="d-flex gap-2">
                        <h6>Email : </h6>
                        <p>{singleUserState.email}</p>
                      </div>
                      <div className="d-flex gap-2">
                        <h6>Mobile : </h6>
                        <p className="unblocked">{singleUserState.mobile}</p>
                      </div>
                      <div className="d-flex gap-2">
                        {singleUserState &&
                          Array.isArray(singleUserState.address) &&
                          singleUserState.address.length > 0 &&
                          singleUserState.address.map((item, index) => (
                            <div className="" key={index}>
                              <div className="d-flex gap-2">
                                <h6 className="mb-0">Address :</h6>
                                <p className="add-p">{item.address}</p>
                              </div>
                              <div className="d-flex gap-2">
                                <h6 className="mb-0">Appartment :</h6>
                                <p>{item.appartment}</p>
                              </div>
                              <div className="d-flex gap-2">
                                <h6 className="mb-0">City :</h6>
                                <p>{item.city}</p>
                              </div>
                              <div className="d-flex gap-2">
                                <h6 className="mb-0">State :</h6>
                                <p>{item.state}</p>
                              </div>{" "}
                              <div className="d-flex gap-2">
                                <h6 className="mb-0">Pincode :</h6>
                                <p>{item.pincode}</p>
                              </div>
                              <div className="d-flex gap-2">
                                <h6 className="mb-0">Country :</h6>
                                <p>{item.country}</p>
                              </div>
                            </div>
                          ))}
                      </div>
                      <div className="d-flex gap-2">
                        <h6 className="mb-0">Created At : </h6>
                        <p>{changeDateFormat(singleUserState.createdAt)}</p>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={formik.handleSubmit} className="p-2">
                      <div className="mb-2">
                        <label
                          htmlFor="exampleInputPassword1"
                          className="form-label"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          name="firstname"
                          className="form-control"
                          value={formik.values.firstname}
                          onChange={formik.handleChange("firstname")}
                          onBlur={formik.handleBlur("firstname")}
                        />
                        <div className="error text-danger my-1">
                          {formik.touched.firstname && formik.errors.firstname}
                        </div>
                      </div>
                      <div className="mb-2">
                        <label
                          htmlFor="exampleInputPassword1"
                          className="form-label"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="lastname"
                          className="form-control"
                          value={formik.values.lastname}
                          onChange={formik.handleChange("lastname")}
                          onBlur={formik.handleBlur("lastname")}
                        />
                        <div className="error text-danger my-1">
                          {formik.touched.lastname && formik.errors.lastname}
                        </div>
                      </div>
                      <div className="mb-2">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          Email address
                        </label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          value={formik.values.email}
                          onChange={formik.handleChange("email")}
                          onBlur={formik.handleBlur("email")}
                          aria-describedby="emailHelp"
                        />
                        <div className="error text-danger my-1">
                          {formik.touched.email && formik.errors.email}
                        </div>
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          Mobile Number
                        </label>
                        <input
                          type="number"
                          name="mobile"
                          className="form-control"
                          value={formik.values.mobile}
                          onChange={formik.handleChange("mobile")}
                          onBlur={formik.handleBlur("mobile")}
                          aria-describedby="emailHelp"
                        />
                        <div className="error text-danger my-1">
                          {formik.touched.mobile && formik.errors.mobile}
                        </div>
                      </div>
                      <button type="submit" className="buttons login">
                        Save Details
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Profile;
