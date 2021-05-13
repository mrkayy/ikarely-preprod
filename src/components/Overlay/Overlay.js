import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import ReactDom from 'react-dom';
import './Overlay.css';
import AuthStore from '../../stores/AuthStore';

function Overlay({slide, showMenu, setSlide}) {
  const authcontext = useContext(AuthStore);
  const {logout, currUser} = authcontext;
  // console.log(currUser);

  const links = [
    {
      value: 'Home',
      directory: '/',
    },
    {
      value: 'Services',
      directory: '/service',
    },
    // {
    //   value: "Blog",
    //   directory: "/blog",
    // },

    {
      value: 'About Us',
      directory: '/about',
    },
    {
      value: 'Contact Us',
      directory: '/contact',
    },
  ];

  const viewLink = (slide) => {
    showMenu(slide);
    window.scrollTo(0, 0);
  };
  const content = (
    <div className={`overlay ${slide && 'slide'}`}>
      <div onClick={() => setSlide(false)} className="close__button">
        X
      </div>

      <img
        src="images/ikarely_logo_overlay.png"
        alt="ikarely_logo"
        className="overlay__logo"
      />

      <div className="hamburger__menus">
        <ul>
          {links.map(({value, directory}, index) => {
            return (
              <li
                className="navbar__slide"
                onClick={() => viewLink(slide)}
                key={index}
              >
                <Link to={directory}>{value}</Link>{' '}
              </li>
            );
          })}
        </ul>
        <ul className="more__links">
          {!currUser && (
            <>
              <li className="navbar__slide" onClick={() => viewLink(slide)}>
                <button className="login__link__btn">
                  <Link to={'/signin'}>{'Login'}</Link>{' '}
                </button>
              </li>

              <li className="navbar__slide" onClick={() => viewLink(slide)}>
                <button className="register__link__btn"></button>
              </li>
            </>
          )}
          {currUser && (
            <>
              <li className="navbar__slide" onClick={() => viewLink(slide)}>
                <Link to="/profile">Account</Link>
              </li>
              <li className="navbar__slide" onClick={logout}>
                <button className="register__link__btn">Logout</button>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );

  return ReactDom.createPortal(content, document.getElementById('overlay'));
}

export default Overlay;
