import React from "react";

import { HeroImageAnimation } from "../../components/HeroImageAnimation";

import "./style.scss";

export function Metrics() {
  return (
    <main id="metrics">
      <div className="text-container">
        <h1>
          Acompanhe suas mêtricas
          <br />
          Utilizando nosso site!
        </h1>
        <p>
          Utilizamos as teclonogias e calculos mais modernos para trazer as
          mêtricas mais precisas para você!
        </p>
      </div>
      <div className="hero-image">
        <HeroImageAnimation />
      </div>
    </main>
  );
}
