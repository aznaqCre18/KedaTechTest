import React from "react";

import "./style.scss";
import { CheckM } from "./../../../assets/icon/_index";

const CardCategory = (props) => {
  return (
    <>
      <div className="wrapper-card" onClick={props.click}>
        <div className="title">{props.title}</div>
        <div className="price">
          <div className="value">${props.value}</div>
          <div className="desc">Per Month</div>
          <div className="desc-mobile">/ Month</div>
        </div>
        <div className="in-card-feature">
          <ul>
            {props.feature.map((f, index) => (
              <li key={index}>
                <img src={CheckM} alt="check" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="get-started">Get Started</div>
      </div>
    </>
  );
};

export default CardCategory;
