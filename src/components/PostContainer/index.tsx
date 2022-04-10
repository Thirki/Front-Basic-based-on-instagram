import React, { useContext } from "react";

import { PostsContext } from "../../context/PostsContext";
import { ApiError } from "../ApiError";
import { Loading } from "../Loading";
import { PostCard } from "../PostCard";

import "./style.scss";

export function PostContainer() {
  const { postList, apiError } = useContext(PostsContext);

  if (apiError) {
    return <ApiError />;
  }

  if (postList.length < 1) {
    return <Loading />;
  }

  return (
    <main id="post-container">
      {postList.map((post) => (
        <PostCard postObject={post} key={post._id} />
      ))}
    </main>
  );
}
