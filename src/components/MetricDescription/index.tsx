import React from "react";

import { DescriptionCards } from "../DescriptionCards";

import "./style.scss";

export function MetricDescription() {
  return (
    <div id="metric-description">
      <h1>Vantagens de utilizar.</h1>
      <div className="metrics-description-cards">
        <DescriptionCards
          cardObj={{
            title: "Confiavel",
            description: "Nossos programas são testados frequentementes",
            imgLink:
              "https://i.pinimg.com/originals/e3/87/10/e38710382163b203d59b53ce3e6ca5bb.jpg",
          }}
        />
        <DescriptionCards
          cardObj={{
            title: "Escalavel",
            description:
              "Podemos adaptar sempre ao seu gosto, com nosso time de devs",
            imgLink:
              "https://cdn.dribbble.com/users/3490676/screenshots/10191310/image.png",
          }}
        />
        <DescriptionCards
          cardObj={{
            title: "Acertivo",
            description:
              "Estamos a anos no mercado, prestando o melhor serviço",
            imgLink:
              "https://cdn5.vectorstock.com/i/1000x1000/74/29/flat-design-goal-achievement-teamwork-vector-37167429.jpg",
          }}
        />
      </div>
    </div>
  );
}
