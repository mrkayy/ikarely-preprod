import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import './MProfile.css';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  main: {
    margin: '20px 0px',
    flexGrow: 1,
  },
  medImg: {
    padding: theme.spacing(2),
    // background: 'rgba(8, 60, 99, 0.247)',
  },
  medForm: {
    flexGrow: 1,
    marginTop: '20px',
    justifyItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
  },
}));

const MedicalProfile = ({username}) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const {full_name,email,phone} = username;
  return (
    <>
      <div className="main">
        <div className="client__title">
          <h3>Medical Profile</h3>
        </div>
        <Divider />
        <Grid container spacing={1} direction="row" className={classes.main}>
          <Grid item xs={12} md={3}>
            <Paper className={classes.medImg} elevation={0}>
              <div className="med__image">
                <div className="med__profile__img">
                  <img src={`../images/user.png`} alt="user" />
                </div>
                <div className="med__profile">
                  <h6>edit</h6>
                </div>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} md={9}>
            <Container fixed>
              <div className="med__profile">
                <h4>My Profile</h4>
                <Divider />
                <p>
                  Name: <span>{full_name}</span>
                </p>
                <p>
                  Email: <span>{email}</span>
                </p>
                <p>
                  Name: <span>{phone}</span>
                </p>
              </div>
            </Container>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item md={12} xs={12}>
            <Paper className={classes.medForm} elevation={0}>
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
              >
                <Tab label="Medical Profile" />
                <Tab label="Medical History" />
                <Tab label="Appointment History" />
              </Tabs>
              <TabPanel value={value} index={0}>
                <p className="tab__caption">You have no Medical Profile at the moment</p>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <p className="tab__caption">You have no Medical History Record at the moment</p>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <p className="tab__caption">You have no Appointments Records at the moment </p>
              </TabPanel>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

function TabPanel({children, value, index, ...other}) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default MedicalProfile;
