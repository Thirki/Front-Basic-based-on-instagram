import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highstock";
import React, { useContext, useEffect, useState } from "react";

import { PostsContext } from "../../context/PostsContext";
import { chartOptions } from "../../helpers/chartOptions";
import { ITarget } from "../../interfaces/metrics";
import IPostItem from "../../interfaces/post";

interface IPostChartProps {
  currentPost: IPostItem;
}

export function PostChart({ currentPost }: IPostChartProps) {
  const { postList } = useContext(PostsContext);
  const [target, setTarget] = useState<ITarget>({ like: 0, comments: 0 });

  useEffect(() => {
    if (postList.length >= 1) {
      const likeTarget = postList.reduce(
        (previousValue, currentValue) => previousValue + currentValue.upvotes,
        0
      );
      const commentTarget = postList.reduce(
        (previousValue, currentValue) =>
          previousValue + currentValue.comentarios,
        0
      );
      const reachMetrics = {
        like: Math.round(likeTarget / postList.length),
        comments: Math.round(commentTarget / postList.length),
      };
      setTarget(reachMetrics);
    }
  }, [postList]);

  const metrics = {
    reach: {
      like: currentPost.upvotes,
      comments: currentPost.comentarios,
    },
    target,
  };

  const options = chartOptions(metrics);

  return (
    <HighchartsReact
      highcharts={Highcharts}
      constructorType="chart"
      options={options}
      className="teste"
    />
  );
}
