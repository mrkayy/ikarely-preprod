import React from 'react';
import './Profile.css';
import {Redirect} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import WebStorage from '../../shared/LocalStorage';
import ClientLayout from './Clients';

function Profile(props) {
  const {currentUser} = props;
  const token = WebStorage.get('user_token');
  const user_details = jwt_decode(token);

  // redirect to login if user logs out of the system
  if (!currentUser) {
    return <Redirect to={'/signin'} />;
  }
// remember to implement professionals platform
  return <ClientLayout user={user_details} />;
}

export default Profile;
