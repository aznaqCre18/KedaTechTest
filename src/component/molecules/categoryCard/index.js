import React from "react";

import Switch from "../../atoms/switch";
import CardCategory from "../../atoms/category";

const Category = () => {
  const handleSetCard = (e) => {
    const elemen = e.target;
    const Cards = document.querySelectorAll(".wrapper-card");
    Cards.forEach((c) => c.classList.remove("active"));
    elemen.classList.add("active");
  };

  return (
    <div className="category">
      <Switch />
      <div className="scrolling">
        <div className="card-category">
          <CardCategory
            title="Basic"
            value="0"
            click={handleSetCard}
            feature={[
              "Record incoming items",
              "Record outcoming items",
              "Record profits",
            ]}
          />
          <CardCategory
            title="Business"
            value="125"
            click={handleSetCard}
            feature={[
              "Record incoming items",
              "Record outcoming items",
              "Record profits",
              "Support 7 x 24 hours",
              "Analyze results with CHART",
            ]}
          />
          <CardCategory
            title="Entrepreneur"
            value="235"
            click={handleSetCard}
            feature={[
              "Record incoming items",
              "Record outcoming items",
              "Record profits",
              "Support 7 x 24 hours",
              "Analyze results with CHART",
              "Export data to excel",
              "AI prediction of income",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
