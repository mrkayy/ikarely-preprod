import React, {useState} from 'react';
import './Client.css';
import {Grid, Paper, Container} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

// import SideBar from '../Components/ClientSideBar';
// import InfoBar from '../Components/ClientInfoBar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 80,
    marginBottom: 30,
  },
  infoCard: {
    padding: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(2),

    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const ClientLayout = ({children, user}) => {
  // const [slide, setSlide] = useState(false);
  // const showMenu = (slide) => {
  //   setSlide(!slide);
  // };

  console.log({user});

  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3} direction="row">
          <Grid item xs={12} md={2}>
            <Paper className={classes.paper} elevation={1}>
              xs=12
            </Paper>
          </Grid>
          <Grid item xs={12} md={7}>
            <Container maxWidth={7}>
              <Paper className={classes.paper} elevation={0}>
                {/* {children} */}
              </Paper>
            </Container>
          </Grid>
          <Grid item xs={12} md={3}>
            <Grid container direction="column">
              <Grid item className={classes.infoCard}>
                <Paper className={classes.paper} elevation={1}>
                  xs=6
                </Paper>
              </Grid>

              <Grid item className={classes.infoCard}>
                <Paper className={classes.paper} elevation={1}>
                  xs=6
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default ClientLayout;
