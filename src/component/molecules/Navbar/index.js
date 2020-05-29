import React, { useState } from "react";
import { TweenMax, TweenLite, Power3 } from "gsap";
import { Link } from "react-router-dom";

import Logo from "./../../../assets/icon/logo-name.svg";
import Burger from "./../../atoms/Burger";
import MenuNav from "./../../molecules/MenuNav";

const Navbar = () => {
  const [redirect, setRedirect] = useState(false);

  const x = window.matchMedia("(max-width: 768px)");
  const handleGoLogin = () => {
    if (x.matches) {
      setRedirect(true);
    } else {
      TweenMax.to("#login-container", 1, {
        x: 0,
        opacity: 1,
        display: "block",
        ease: Power3.easeOut,
      });
      TweenMax.to(".login-box", 1, { opacity: 1, ease: Power3.easeOut });

      const Body = document.getElementsByTagName("body");
      Body[0].style.overflow = "hidden";
    }
  };

  const showHide = (item, duration, yFrom, yTo, display, dFrom) => {
    TweenLite.fromTo(
      item,
      duration,
      {
        opacity: 0,
        y: yFrom,
        display: dFrom,
      },
      {
        opacity: 1,
        y: yTo,
        ease: Power3.easeOut,
        display,
      }
    );
  };

  const setToActive = () => {
    const burgerIcon = document.querySelector(".burger-container");
    const navMenu = document.querySelector(".menu-container");

    if (burgerIcon.classList.contains("active")) {
      burgerIcon.classList.remove("active");
      navMenu.classList.remove("show");
      showHide(navMenu, 0.3, 0, "-100vh", "none", "block");
    } else {
      burgerIcon.classList.add("active");
      navMenu.classList.add("show");
      showHide(navMenu, 0.5, "-100vh", 0, "block", "none");
    }
  };

  return (
    <>
      <MenuNav />
      <div className="navbar-container">
        <div className="left-nav">
          <div className="wrapper-logo">
            <img src={Logo} alt="techPreneur" className="logo" />
          </div>
        </div>
        <div className="right-nav">
          <div className="main-menu">
            <ul>
              <li>ABOUT</li>
              <li>PRICING</li>
              <li>CONTACT</li>
            </ul>
          </div>
          {redirect ? (
            <Link to="/login">
              <div className="login-btn">Login</div>
            </Link>
          ) : (
            <div className="login-btn" onClick={handleGoLogin}>
              Login
            </div>
          )}
        </div>
        <Burger change={setToActive} />
      </div>
    </>
  );
};

export default Navbar;
