import React from "react";
import { Link } from "react-router-dom";
import ReactDom from "react-dom";
import "./Overlay.css";

function Overlay({ slide, showMenu, setSlide}) {


  const links = [
    {
      value: 'Home',
      directory: '/'
    },
    {
      value: 'Services',
      directory: '/service'
    },
    {
      value: 'Blog',
      directory: '/blog'
    },
  
    {
      value: 'About Us',
      directory: '/about'
    },
    {
      value: 'Contact Us',
      directory: '/contact'
    },
    {
      value: 'Sign Up',
      directory: '/register'
    },
    {
      value: 'Sign in',
      directory: '/signin'
    },
  ]
const viewLink = (slide) => {
  showMenu(slide)
  window.scrollTo(0,0)
}
  const content = (
    <div className={`overlay ${slide && "slide"}`}>

      <img src={`images/icons/close-button.svg`} alt="" onClick={() => setSlide(false)} className="close__button"/>
  
      <div className="hamburger__menus">
        <ul>
          {links.map(({value, directory}) => {
            return (
              <li className="navbar__slide" onClick={() => viewLink(slide)}>
              <Link to={directory}>{value}</Link>{" "}
            </li>
            )
          })}
        </ul>
      </div>
    </div>
  );

  return ReactDom.createPortal(content, document.getElementById("overlay"));
}

export default Overlay;
