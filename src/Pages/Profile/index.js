import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
// import { Grid, Paper, Container, Box, Divider } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";

import jwt_decode from "jwt-decode";
import WebStorage from "../../shared/LocalStorage";

import "../../Components/Clients/style.css";


const ClientProfile = () => {
  const history = useHistory();

  const token = WebStorage.get("user_token");
  const user = jwt_decode(token);

  useEffect(() => {
    autoScroll();
  }, []);

  const autoScroll = () => {
    return window.scrollTo(0, 0);
  };

  // allows app to display full dashboard

  return (
    <>
    <h1>Hello every one!</h1>
    </>
  );
};

export default ClientProfile;
