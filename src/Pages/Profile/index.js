import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Grid, Paper, Container, Box, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import jwt_decode from "jwt-decode";
import WebStorage from "../../shared/LocalStorage";

import Menubar from "../../components/Clients/Menubar";
import "../../components/Clients/style.css";

import CMedicalHistory from "./MedicalHistory";
import CMedicalProfile from "./MedicalProfile";
import CAppointments from "./Appointments";
import CDashboard from "./Dashboard";
import CPayments from "./Payments";
import CSettings from "./Settings";
import CServices from "./ServiceRequests";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 87,
    marginBottom: 30,
    // background: '#e5e5e5',
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },

  page: {
    marginTop: 10,
  },

  main: {
    // background: '#d4d4d4',
    // padding: '0px 20px 20px 20px',
  },
}));

const ClientProfile = () => {
  const classes = useStyles();
  const history = useHistory();

  const token = WebStorage.get("user_token");
  const user = jwt_decode(token);

  useEffect(() => {
    autoScroll();
  }, []);

  const autoScroll = () => {
    return window.scrollTo(0, 0);
  };

  const pgHistory = history.location.pathname;
  // allows app to display full dashboard
  const currPage =
    history.location.pathname === "/profile/dashboard" ? true : false;

  const [pagepath, setPage] = useState({
    path: [
      { title: "Dashboard", path: "/dashboard" },
      { title: "Medical Profile", path: "/medicals" },
      { title: "Medical History", path: "/medical-history" },
      { title: "Service Requests", path: "/service-requests" },
      { title: "My Appointments", path: "/appointments" },
      { title: "Payments", path: "/payments" },
      { title: "Settings", path: "/settings" },
      { title: "Support", path: "/support" },
    ],
    page: "/profile/dashboard",
  });

  useEffect(() => {
    setPage((state) => ({ ...state, page: pgHistory }));
    return () => {
      // cleanup;
    };
  }, [pgHistory]);

  const switchPage = (pg) => {
    if (pg === pgHistory) {
      return;
    } else {
      setPage((state) => ({ ...state, page: pg }));
      history.push(pg);
    }
  };

  return (
    <>
      <Container fixed className={classes.root}>
        <Grid container spacing={2} direction="row">
          <Grid item md={2}>
            <Menubar pageparam={pagepath} switchPage={switchPage} />
          </Grid>
          {/* display main contents */}
          <Grid item xs={12} md={currPage ? 10 : 7}>
            {/* layout for a secondary navigation panel is optional /*}
            {/*<Container fixed className={classes}>
              <CNavBar /> 
            </Container>
              */}

            <Container fixed className={classes.main}>
              {
                {
                  "/dashboard": <CDashboard username={user} />,
                  "/medicals": <CMedicalProfile username={user} />,
                  "/medical-history": (
                    <CMedicalHistory username={user.full_name} />
                  ),
                  "/service-requests": <CServices username={user} />,
                  "/appointments": (
                    <CAppointments username={user.full_name} />
                  ),
                  "/payments": <CPayments username={user.full_name} />,
                  "/settings": <CSettings username={user.full_name} />,
                  "/support": <Box>Support</Box>,
                }[pagepath.page]
              }
            </Container>
          </Grid>

          {currPage ? (
            <></>
          ) : (
            <>
              <Grid item xs={12} md={3}>
                <Grid container direction="column">
                  <Grid item>
                    <Paper className={classes.paper} elevation={1}>
                      <div className="notification__title">
                        <p>Notification Menu</p>
                      </div>
                      <Divider />
                      <div className="notification__menu">
                        <p>No Notification Here</p>
                      </div>
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
            </>
          )}
        </Grid>
      </Container>
    </>
  );
};

export default ClientProfile;
