import React from "react";

import "./style.scss";
import Check from "./../../../assets/icon/check.svg";

const Feature = (props) => {
  return (
    <>
      <div className="wrapper-feature" data-aos={props.ease}>
        <p>{props.title}</p>
        <div className="check">
          <div className="basic">
            {props.basic ? <img src={Check} alt="check" /> : null}
          </div>

          <div className="business">
            {props.business ? <img src={Check} alt="check" /> : null}
          </div>

          <div className="entrepreneur">
            {props.entrepreneur ? <img src={Check} alt="check" /> : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
