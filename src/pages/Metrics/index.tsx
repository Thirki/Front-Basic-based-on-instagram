import React, { useContext } from "react";

import { ApiError } from "../../components/ApiError";
import { HeroImageAnimation } from "../../components/HeroImageAnimation";
import { Loading } from "../../components/Loading";
import { MetricContainer } from "../../components/MetricContainer";
import { MetricsPostContainer } from "../../components/MetricsPostContainer";
import { PostsContext } from "../../context/PostsContext";

import "./style.scss";

export function Metrics() {
  const { postList, apiError } = useContext(PostsContext);

  if (apiError) {
    return <ApiError />;
  }

  if (postList.length < 1) {
    return <Loading />;
  }
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
      <MetricsPostContainer />
    </>
  );
}
