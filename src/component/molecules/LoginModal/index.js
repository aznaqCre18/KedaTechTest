import React from "react";

import "./style.scss";
import FormLogin from "./../../atoms/formLogin";
import RightBox from "./../../atoms/rightBoxLogin";

const LoginModal = () => {
  return (
    <div id="login-container">
      <div className="login-box">
        <div className="form">
          <h1>Hello Future Holders</h1>
          <FormLogin />
        </div>
        <RightBox />
      </div>
    </div>
  );
};

export default LoginModal;
