import React from "react";

import "./style.scss";

const MenuNav = () => {
  return (
    <div className="menu-container">
      <div className="inner-menu">
        <div className="menu-big">
          <ul>
            <li>About</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="sub-menu">
          <div className="about solution">
            <h3>Solution</h3>
            <ul>
              <li>Marketing</li>
              <li>Analytics</li>
              <li>Insight</li>
            </ul>
          </div>
          <div className="about support">
            <h3>Support</h3>
            <ul>
              <li>Pricing</li>
              <li>Documentation</li>
              <li>Guides</li>
            </ul>
          </div>
          <div className="about company">
            <h3>Company</h3>
            <ul>
              <li>About</li>
              <li>Blog</li>
              <li>Jobs</li>
              <li>Press</li>
              <li>Partners</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuNav;
