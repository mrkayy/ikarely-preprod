import React, {useState, useEffect} from 'react';
import './Client.css';
import {Grid, Paper, Container, Box,Divider} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {useHistory} from 'react-router-dom';

import CSideBar from './Components/ClientSideBar';
// import CNavBar from './Components/ClientNavbar';
// import InfoBar from '../Components/ClientInfoBar';

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 87,
    marginBottom: 30,
    // background: '#e5e5e5',
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  page: {
    marginTop: 10,
  },
  main: {
    background: '#d4d4d4',
    // padding: '0px 20px 20px 20px',
  },
}));

const ClientLayout = ({children, user}) => {
  const classes = useStyles();
  const history = useHistory();

  const pgHistory = history.location.pathname;
  // allows app to display full dashboard
  const currPage =
    history.location.pathname === '/profile' ||
    history.location.pathname === '/profile/dashboard'
      ? true
      : false;

  const [pagepath, setPage] = useState({
    path: [
      {title: 'Dashboard', path: '/dashboard'},
      {title: 'Medical Profile', path: '/medicals'},
      {title: 'Medical History', path: '/medical-history'},
      {title: 'My Appointments', path: '/appointments'},
      {title: 'Payments', path: '/payments'},
      {title: 'Settings', path: '/settings'},
      {title: 'Support', path: '/support'},
    ],
    page: '/profile/dashboard',
  });

  useEffect(() => {
    setPage((state) => ({...state, page: pgHistory}));
    return () => {
      // cleanup;
    };
  }, [pgHistory]);

  const switchPage = (pg) => {
    setPage((state) => ({...state, page: pg}));
    console.log(pg);
    history.push(`/profile${pg}`);
  };

  return (
    <>
      <Container fluid className={classes.root}>
        <Grid container spacing={3} direction="row">
          <Grid item xs={0} md={2}>
            <CSideBar pageparam={pagepath} switchPage={switchPage} />
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
                  '/profile/dashboard': (
                    <Box className={{padding: '20px'}}>User Dashboard</Box>
                  ),
                  '/profile/medicals': (
                    <Box className={{padding: '20px'}}>Medical Records</Box>
                  ),
                  '/profile/medical-history': (
                    <Box className={{padding: '20px'}}>Medical History</Box>
                  ),
                  '/profile/appointments': (
                    <Box className={{padding: '20px'}}>Appointments</Box>
                  ),
                  '/profile/payments': (
                    <Box className={{padding: '20px'}}>Payments</Box>
                  ),
                  '/profile/settings': (
                    <Box className={{padding: '20px'}}>Settings</Box>
                  ),
                  '/profile/support': (
                    <Box className={{padding: '20px'}}>Support</Box>
                  ),
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
                      {/* </Paper>
                  </Grid>

                  <Grid item className={classes.infoCard}>
                    <Paper className={classes.paper} elevation={1}> */}
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

export default ClientLayout;
