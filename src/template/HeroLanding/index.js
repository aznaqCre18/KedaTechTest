import React, { useEffect } from "react";
import { TweenMax, Power3 } from "gsap";
import { Link } from "react-router-dom";

import "./../../_style/LandingHero/style.scss";
import Navbar from "./../../component/molecules/Navbar";
import Person from "./../../assets/image/hero-landing.svg";
import LoginModal from "./../../component/molecules/LoginModal";

const HeroLanding = () => {
  const animationOnCome = (target, duration, Xfrom, Yfrom, Xto, Yto, stag) => {
    TweenMax.fromTo(
      target,
      duration,
      { y: Yfrom, x: Xfrom, opacity: 0 },
      { y: Yto, x: Xto, opacity: 1, ease: Power3.easeOut, stagger: stag }
    );
  };

  // handleShowModal

  useEffect(() => {
    animationOnCome(".title-hero", 1, 0, 100, 0, 0, 0.5);
    animationOnCome(".hero-img", 1, "100%", 0, 0, 0, 0);
  });
  return (
    <>
      <LoginModal />
      <section id="landing-container">
        <Navbar />
        <div className="hero">
          <div className="title-container">
            <h1 className="title-hero">
              The right plan to make your business grow fast
            </h1>
            <p className="title-hero">
              Yes you can do that, by making all your sales data neatly
              organized and stored safely
            </p>
          </div>
          <div className="hero-img">
            <img src={Person} alt="person" />
          </div>
        </div>
        <div className="wrapper-btn-login">
          <Link to="/login">
            <div className="btn-login-hero">Login</div>
          </Link>
        </div>
      </section>
    </>
  );
};

export default HeroLanding;
