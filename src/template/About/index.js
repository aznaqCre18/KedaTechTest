import React from "react";

import "./../../_style/About/style.scss";
import { Ig, Twit, Fb } from "./../../assets/icon/_index";

const AboutSection = () => {
  return (
    <section id="about-container">
      <div className="top-section">
        <div className="list-about">
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
        <div className="subscribe">
          <h3>subscribe to our newslatter</h3>
          <p>
            The latest news, articles, and resources, sent to your inbox weekly
          </p>
          <div className="subs-input">
            <input
              type="email"
              placeholder="Enter your email"
              className="input-subs"
            />
            <div className="btn-subs">Subscribe</div>
          </div>
        </div>
      </div>
      <div className="bottom-section">
        <span className="copyrights">
          <i>&copy;</i> 2020 techPreneur,Inc. All rights reserved.
        </span>
        <div className="sosmed">
          <img src={Ig} alt="Instagram" />
          <img src={Fb} alt="Facebook" />
          <img src={Twit} alt="Twitter" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
