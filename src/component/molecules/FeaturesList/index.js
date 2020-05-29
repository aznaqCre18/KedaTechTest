import React from "react";

import Feature from "./../../atoms/feature";

const FeatureList = () => {
  return (
    <>
      <div className="feature">
        <Feature
          title="Record incoming items"
          basic={true}
          business={true}
          entrepreneur={true}
          ease="fade-right"
          delay="100"
        />
        <Feature
          title="Record outcoming items"
          basic={true}
          business={true}
          entrepreneur={true}
          ease="fade-right"
          delay="300"
        />
        <Feature
          title="Record profits"
          basic={true}
          business={true}
          entrepreneur={true}
          ease="fade-right"
          delay="500"
        />
        <Feature
          title="Support 7 x 24 hours"
          basic={false}
          business={true}
          entrepreneur={true}
          ease="fade-right"
          delay="700"
        />
        <Feature
          title="Analyze results with CHART"
          basic={false}
          business={true}
          entrepreneur={true}
          ease="fade-right"
          delay="900"
        />
        <Feature
          title="Export data to excel"
          basic={false}
          business={false}
          entrepreneur={true}
          ease="fade-right"
          delay="1100"
        />
        <Feature
          title="AI prediction of income"
          basic={false}
          business={false}
          entrepreneur={true}
          ease="fade-right"
          delay="1300"
        />
      </div>
    </>
  );
};

export default FeatureList;
