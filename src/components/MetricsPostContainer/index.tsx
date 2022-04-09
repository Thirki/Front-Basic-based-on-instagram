import React, { useContext } from "react";

import { PostsContext } from "../../context/PostsContext";
import { MetricsCard } from "../MetricsCard";

import "./style.scss";

export function MetricsPostContainer() {
  const { postList } = useContext(PostsContext);
  return (
    <div className="metrics-post-container">
      <div className="metrics-post-area">
        {postList.map((post) => (
          <MetricsCard postObject={post} key={post._id} />
        ))}
      </div>
    </div>
  );
}
