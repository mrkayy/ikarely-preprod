import React from 'react';
import {Paper, Container} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}));

/* optional navigation menu for client platform */
const CNavbar = () => {
    const classes = useStyles();
    return (
      <>
        <Paper className={classes.root}>
          <Container maxWidth="sm"></Container>
        </Paper>
      </>
    );
}

export default CNavbar;