import React from "react";
import { TweenMax, Power3 } from "gsap";

import Women from "./../../../assets/image/login-hero.svg";
import Cross from "./../../../assets/image/cross.svg";

const RightBox = () => {
  const handleClose = () => {
    TweenMax.to("#login-container", 1, {
      x: "-100%",
      opacity: 0,
      ease: Power3.easeOut,
    });

    const Body = document.getElementsByTagName("body");
    Body[0].style.overflow = "auto";
  };

  return (
    <div className="right-box">
      <div className="cross" onClick={handleClose}>
        <img src={Cross} alt="cross" />
      </div>
      <div className="hero-image">
        <img src={Women} alt="Ilustration" />
      </div>
    </div>
  );
};

export default RightBox;
