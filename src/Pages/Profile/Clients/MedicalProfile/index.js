import React, {useState, useEffect} from 'react';
import './MProfile.css';
import {makeStyles} from '@material-ui/core/styles';

import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  main: {
    margin: '20px 0px',
    flexGrow: 1,
  },
  medImg: {
    padding: theme.spacing(2),
    background: 'rgba(8, 60, 99, 0.247)',
  },
  medProfile: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  medForm: {
    marginTop: '20px',
    justifyItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
  },
  
}));

const MedicalProfile = ({user}) => {
  const classes = useStyles();

  return (
    <>
      <div className="main">
        <div className="client__title">
          <h3>Medical Profile</h3>
        </div>
        <Divider />
        <Grid container spacing={1} direction="row" className={classes.main}>
          <Grid item xs={12} md={4}>
            <Paper className={classes.medImg} elevation={0}>
                <div className="med__image">

                </div>

            </Paper>
          </Grid>
          <Grid item xs={12} md={8}>
            <div className={classes.medProfile}>skdlk</div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item md={12} xs={12}>
            <div className={classes.medForm} elevation={0}>skdlk</div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default MedicalProfile;
