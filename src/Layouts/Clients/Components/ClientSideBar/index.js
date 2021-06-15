import React from 'react';
import {Paper, Box} from '@material-ui/core'; 
import {makeStyles} from '@material-ui/core/styles';
import './SideBar.css'

const useStyles = makeStyles((theme) => ({
  root: {
  },
  sidebar: {
    padding: theme.spacing(2)
  }
}));

const SideBar = ({pageparam, switchPage}) => {
  const classes = useStyles();
  return (
    <>
      <Box fixed className={classes.root}>
        <Paper className={classes.sidebar} elevation={1}>
          <ul className="sidebar__list">
            {pageparam.path.map((e, index) => {
              return (
                <li onClick={() => switchPage(e.path)} key={index}>
                  <div className="sidebar__menu">
                    <p>{e.title}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </Paper>
      </Box>
    </>
  );
};

export default SideBar;
