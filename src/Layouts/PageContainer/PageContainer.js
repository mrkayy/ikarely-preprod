import React, {useState} from 'react';
import Overlay from '../../components/Overlay/Overlay';
import NavBar from '../../components/Navbar/NavBar';
import Footer from '../../components/Footer/Footer';
import {makeStyles} from '@material-ui/core/styles';

const useStyle = makeStyles({});

// all pages are passed in as children props to the PageContainer component
const PageContainer = ({children, user}) => {
  const [slide, setSlide] = useState(false);
  // console.log({ user });

  const showMenu = (slide) => {
    setSlide(!slide);
  };

  // using materal styling
  const classes = useStyle();

  return (
    <>
      <div className={classes.root}>
        <Overlay slide={slide} showMenu={showMenu} setSlide={setSlide} />
        <NavBar slide={slide} user={user} showMenu={showMenu} />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default PageContainer;
