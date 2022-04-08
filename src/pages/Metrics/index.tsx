import React from "react";

import { HeroImageAnimation } from "../../components/HeroImageAnimation";
import { MetricContainer } from "../../components/MetricContainer";

import "./style.scss";

export function Metrics() {
  return (
    <>
      <div id="metrics">
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
      </div>
      <MetricContainer />
    </>
  );
}
