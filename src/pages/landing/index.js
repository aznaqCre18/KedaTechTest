import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./responsif.scss";
import { HeroLanding, Pricing, About } from "../../template";

const Landing = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);
  return (
    <>
      <HeroLanding />
      <Pricing />
      <About />
    </>
  );
};

export default Landing;
