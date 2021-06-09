import React from 'react';
import './Profile.css';
import {Redirect} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import WebStorage from '../../shared/LocalStorage';
import ClientLayout from '../../Layouts/Clients/Client';

function Profile(props) {
  const {currentUser} = props;
  const token = WebStorage.get('user_token');
  const user_details = jwt_decode(token);
  console.log({user_details});

  const {full_name, email, exp} = user_details;

  // redirect to login if user logs out of the system
  if (!currentUser) {
    return <Redirect to={'/signin'} />;
  }
  
  return (
    <ClientLayout>
      <div className="profile">
        <h3 className="">Welcome {full_name}</h3>
        <div className="user_details">
          <p className="user_info">
            <span>Email: </span> {email}
          </p>
          <p className="user_info">
            <span>Last Login: </span> {exp}
          </p>
        </div>
      </div>
    </ClientLayout>
  );
}

export default Profile;
