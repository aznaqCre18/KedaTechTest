import React from "react";

import "./../../_style/Pricing/style.scss";
import CategoryCard from "./../../component/molecules/categoryCard";
import FeatureList from "./../../component/molecules/FeaturesList";
import BannerPricing from "./../../component/molecules/BannerPricing";

const Pricing = () => {
  return (
    <section id="pricing-container">
      <div className="title">
        <h1 data-aos="fade-up">
          Choose Your Best <br /> Category
        </h1>
      </div>

      <CategoryCard />
      <FeatureList />
      <BannerPricing />
    </section>
  );
};

export default Pricing;
