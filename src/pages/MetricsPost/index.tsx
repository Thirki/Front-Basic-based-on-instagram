import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { ApiError } from "../../components/ApiError";
import { Loading } from "../../components/Loading";
import { PostChart } from "../../components/PostChart";
import { PostsContext } from "../../context/PostsContext";
import IPostItem from "../../interfaces/post";

import "./style.scss";

export function MetricsPost() {
  const { postList, apiError } = useContext(PostsContext);
  const [currentPost, setCurrentPost] = useState<IPostItem>();
  const { id } = useParams();

  useEffect(() => {
    if (postList.length >= 1) {
      const post = postList.find((ele) => ele._id === id);
      setCurrentPost(post);
    }
  }, [postList]);

  if (apiError) {
    return <ApiError />;
  }

  if (!currentPost) {
    return <Loading />;
  }

  return (
    <main id="metrics-dashboard">
      <h1>follow your engagementt</h1>
      <div className="chart-container">
        <div className="chart-comment">
          <h1>Resume</h1>
          <img
            src="https://www.insighttycoon.com/wp-content/uploads/2020/10/traditional-vs-digital-marketing.jpg"
            alt="thinking"
          />
          <p>
            analyze the performance of each post, and build actions on it to
            promote your brand!
          </p>
        </div>
        <div className="chart-area">
          <PostChart currentPost={currentPost} />
        </div>
      </div>
    </main>
  );
}
