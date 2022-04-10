import React from "react";

import { DescriptionCards } from "../DescriptionCards";

import "./style.scss";

export function MetricDescription() {
  return (
    <div id="metric-description">
      <h1>Benefits.</h1>
      <div className="metrics-description-cards">
        <DescriptionCards
          cardObj={{
            title: "Trustworthy",
            description: "Our programs are frequently tested",
            imgLink:
              "https://i.pinimg.com/originals/e3/87/10/e38710382163b203d59b53ce3e6ca5bb.jpg",
          }}
        />
        <DescriptionCards
          cardObj={{
            title: "Scalable",
            description:
              "Squid designs, produces and constructs a website that fits your taste and requirements. ",
            imgLink:
              "https://cdn.dribbble.com/users/3490676/screenshots/10191310/image.png",
          }}
        />
        <DescriptionCards
          cardObj={{
            title: "Assertive",
            description:
              "We have been in the market for years, providing the best service",
            imgLink:
              "https://cdn5.vectorstock.com/i/1000x1000/74/29/flat-design-goal-achievement-teamwork-vector-37167429.jpg",
          }}
        />
      </div>
    </div>
  );
}
