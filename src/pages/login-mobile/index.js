import React from "react";

import "./style.scss";
import FormLogin from "./../../component/atoms/formLogin";
import RightBox from "./../../component/atoms/rightBoxLogin";

const LoginPage = () => {
  return (
    <div id="container-login-page">
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

export default LoginPage;
