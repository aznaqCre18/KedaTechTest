import React from "react";

const FormLogin = () => {
  const handleShow = () => {
    const Ip = document.getElementById("pass");

    if (Ip.type === "password") {
      Ip.type = "text";
    } else {
      Ip.type = "password";
    }
  };

  return (
    <div className="form-inner">
      <div className="input email">
        <label>Email</label>
        <input type="email" placeholder="Enter email here" />
      </div>
      <div className="input password">
        <label>Password</label>
        <input type="password" placeholder="Enter password here" id="pass" />
        <label className="show-hide">
          Show Password
          <input type="checkbox" onClick={handleShow} />
          <span className="checkmark"></span>
        </label>
      </div>
      <div className="login-btn">Login</div>
    </div>
  );
};

export default FormLogin;
