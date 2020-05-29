import React from "react";

import "./style.scss";

const Switch = () => {
  const handleActive = (e) => {
    const switches = document.querySelectorAll(".switch");
    switches.forEach((s) => s.classList.remove("active"));
    e.target.classList.add("active");
  };

  return (
    <div className="wrapper-switch">
      <div
        className="switch month active"
        onClick={handleActive}
        data-aos="fade-right"
      >
        Monthly
      </div>
      <div className="switch year" onClick={handleActive} data-aos="fade-left">
        Yearly
      </div>
    </div>
  );
};

export default Switch;
