import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile } from "../Features/auth/authThunks";
import { logout } from "../Features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, userId, loading, error } = useSelector((state) => state.auth);


  useEffect(() => {
    if (userId) {
      dispatch(fetchUserProfile(userId));
    }
  }, [dispatch, userId]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };


  if (loading) {
    return (
      <div className="profile-container">
        <p>Loading user data</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="profile-container">
        <p style={{ color: "red" }}>Error: {error}</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="profile-container">
        <p>No user data available.</p>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2>
          Welcome, {user.firstName} {user.lastName}
        </h2>
        <img
          src={user.image}
          alt={user.firstName}
          width="130"
          height="130"
          className="profile-img"
        />

        <div className="profile-details">
          <p>
            Email: {user.email}
          </p>
          <p>
            Gender:{user.gender}
          </p>
          <p>
          Age: {user.age}
          </p>
          <p>
            Address: {user.address?.address},{" "}
            {user.address?.city}
          </p>
        </div>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
