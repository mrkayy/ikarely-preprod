import React from "react";
import "./Profile.css";
import { Redirect } from "react-router-dom";
import jwt_decode from 'jwt-decode';
import WebStorage from '../../shared/LocalStorage';

function Profile(props) {
  const {currentUser} = props;
  const token = WebStorage.get('user_token');
  const user_details = jwt_decode(token);
  console.table(user_details);

  // redirect to login if user logs out of the system
  if (!currentUser) {
    return <Redirect to={'/signin'} />;
  }
  return (
    <div className="profile">
      <h4 className="border">Welcome to your profile</h4>
    </div>
  );
}

export default Profile;
