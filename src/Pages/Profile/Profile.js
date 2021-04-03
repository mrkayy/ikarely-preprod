import React from "react";
import "./Profile.css";
import { Redirect } from "react-router-dom";

function Profile(props) {
  const { currentUser } = props;

  // redirect to login if user logs out of the system
  if (!currentUser) {
    return <Redirect to={"/signin"} />;
  }
  return (
    <div className="">
      <h4 className="">Welcome to your profile</h4>
    </div>
  );
}

export default Profile;
