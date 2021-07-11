import React from 'react';
import './dashboard.css';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    marginBottom: 18,
    padding: 10,
  },
  profile: {
    justifyContent: 'space-evenly',
    alignItems: 'start',
    marginTop: 8,
    marginBottom: 20,
    textAlign: 'center',
  },
  stats: {
    // width: 155,
    // height: 135,
    textAlign: 'center',
    // backgroundColor: '#083c63',
    // opacity: 0.2,
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'column',
  },
  title: {
    fontSize: 14,
  },
  value: {
    // fontSize: 32,
    color: '#083c63',
  },
  biodata: {
    marginTop: 10,
    marginBottom: 10,
  },
  biodata_item: {
    padding: theme.spacing(2),
  },
  med_summary: {
    display: 'grid',
    gridGap: 30,
    justifyItems: 'center',
    alignItems: 'center',
    marginBottom: 25,
    marginTop: 20,
  },
}));

const Dashboard = ({username}) => {
  console.log(username);
  const classes = useStyles();
  const {full_name, email, phone} = username;

  const services = [
    {
      icon: 'wound.svg',
      title: 'Wound Care',
      params: 'wound_care',
      word: 'Why go through the stress of going to and waiting in the hospital when dealing with wounds is enough stress on its own. We offer wound dressing services for patients with minor burns, pressure ulcer, diabetic foot and any other form of wounds at your utmost convenience.',
    },
    {
      icon: 'injection.svg',
      title: 'Vaccination',
      params: 'vaccination',
      word: "At ikarely, we believe you don't have to stay on a long queue in the hospital to receive vaccination. We simply help reduce the stress by providing vaccination from deadly diseases like, hepatitis, typhoid, polio etc at the comfort of your home. ",
    },
    {
      icon: 'Catherization.svg',
      title: 'Geriatric care',
      params: 'catheterization',
      word: "Elderly people don't always have to be hospitalized for minor health concerns that can be delivered to them at home. We provide care for the Elderly, from general checkup to catheterization and lots more.",
    },
    {
      icon: 'teeth-checkup.svg',
      title: 'Dental Care',
      params: 'dental_care',
      word: "We provide a wide range of dental services etc dental cleanings, Fillings, root canals, and extractions. Imagine the comfort of having a dentist come to your home for your dental care, that's exactly what we are offering you.",
    },
    {
      icon: 'healthcare.svg',
      title: 'General Check-up',
      params: 'general_checkup',
      word: 'You can request for our professional service for individual and family general check ups like Blood pressure, weight check, glucose check, malaria/HIV test, Body Mass Index (BMI) all at your convenience.',
    },
  ];

  const medStatistics = [
    {title: 'Service Requests', value: '22'},
    {title: 'General Checkups', value: '19'},
    {title: 'Appointments', value: '19'},
    {title: 'Health Rating', value: '70%'},
    // {title: '', value: ''},
  ];

  return (
    <>
      <Box component="div" className="main">
        <div className="client__title">
          <h3>Welcome</h3>
        </div>
        <Divider />
        <Box component="div">
          <Grid container spacing={2} direction={{sm: 'column', md: 'row'}}>
            <Grid item md={6} xs={12}>
              <Box component="div" className={classes.root}>
                <Box
                  component="div"
                  className={classes.profile}
                  display={{xs: 'block', sm: 'block', md: 'flex'}}
                >
                  <Box
                    component="div"
                    className="med__img"
                    marginBottom={{xs: 3, sm: 3, md: 0}}
                  >
                    image
                  </Box>
                  <Box
                    component="div"
                    className="med__profile"
                    marginBottom={{xs: 3, sm: 3, md: 0}}
                  >
                    <div>
                      <h5>Full Name:</h5>
                      <p> {full_name}</p>
                    </div>
                    <div>
                      <h5>Email:</h5>
                      <p>{email}</p>
                    </div>
                    <div>
                      <h5>Tel:</h5>
                      <p> {phone}</p>
                    </div>
                    <div>
                      <h5>Address:</h5>
                      <p> {'nill'}</p>
                    </div>
                    <div>
                      <h5>Unique ID:</h5>
                      <p> {'KAL-231-ID'}</p>
                    </div>
                  </Box>
                  {/* <Box
                    component="div"
                    marginBottom={{xs: 3, sm: 3, md: 0}}
                    className="med__summary"
                  >
                    <div>
                      <h5>EHR Status</h5>
                      <p>Complete</p>
                    </div>
                  </Box> */}
                </Box>
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box component="div" className={classes.root}>
                <div className="med__data">
                  <h4> Medical Profile</h4>
                </div>
                <Card variant="outlined" className={classes.biodata}>
                  <CardContent className={classes.biodata_item}>
                    {/* 
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                    ></Typography>
                    <Box
                      component="div"
                      display={{xs: 'block', sm: 'block', md: 'inline-flex'}}
                      flexDirection={{xs: 'column', sm: 'column', md: 'row'}}
                      className="med__data__info"
                    >
                      <div>
                        <p>
                          Gender: <span>Male</span>
                        </p>
                      </div>
                      <div>
                        <p>
                          DOB: <span>04/May/****</span>
                        </p>
                      </div>
                      <div>
                        <p>
                          Account Type: <span></span>
                        </p>
                      </div>
                    </Box>
                  */}
                  </CardContent>
                </Card>
                <Card variant="outlined" className={classes.biodata}>
                  <CardContent className={classes.biodata_item}>
                    {/* 
                    <Typography{/* 
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                    ></Typography>
                    <Box
                      component="div"
                      display={{xs: 'block', sm: 'block', md: 'inline-flex'}}
                      flexDirection={{xs: 'column', sm: 'column', md: 'row'}}
                      className="med__data__info"
                    >
                      <div>
                        <p>
                          Blood Type: <span></span>
                        </p>
                      </div>
                      <div>
                        <p>
                          Blood Group: <span></span>
                        </p>
                      </div>
                      <div>
                        <p>
                          Height: <span>93kg</span>
                        </p>
                      </div>
                      <div>
                        <p>
                          Current Weight: <span>183</span>
                        </p>
                      </div>
                    </Box>
                  */}
                  </CardContent>
                </Card>
              </Box>
            </Grid>

            <Grid item spacing={6} xs={12} sm={12} md={12}>
              <div className="client__title">
                <h4>Statistics</h4>
              </div>
              <Divider />
              <Box
                component="div"
                className={classes.med_summary}
                gridTemplateColumns={{
                  xs: 'auto auto',
                  sm: 'auto auto',
                  md: 'auto auto auto auto auto',
                }}
                gridTemplateRows={{
                  md: 'auto auto',
                }}
              >
                {medStatistics.map(({value, title}, index) => {
                  return (
                    <Card
                      className={classes.stats}
                      key={index}
                      variant="outlined"
                    >
                      <CardContent>
                        <Typography
                          className={classes.title}
                          color="textSecondary"
                          gutterBottom
                        >
                          {title}
                        </Typography>
                        <Typography
                          className={classes.value}
                          variant="h3"
                          component="p"
                        >
                          {value}
                        </Typography>
                      </CardContent>
                    </Card>
                  );
                })}
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Grid container>
          <div className="client__title">
            <h4>Services Requests</h4>
          </div>
          <Divider />
          <Box component="div" className="cl__service__lists">
            {services.map(({icon, title, word}) => {
              return (
                <Paper className="cl__service__list" key={title}>
                  <div className="cl__list__icon">
                    <img src={`../images/icons/${icon}`} alt="img.png" />
                  </div>
                  <p className="cl__list__title">{title}</p>
                  <div className="cl__list__word">
                    <p>{word}</p>
                  </div>
                  <div className="cl__service__btn">
                    <Button
                      variant="contained"
                      color="inherit"
                      disableElevation
                      size="small"
                    >
                      <Typography variant="caption">Request Service</Typography>
                    </Button>
                  </div>
                </Paper>
              );
            })}
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default Dashboard;
