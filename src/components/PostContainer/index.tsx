import React, { useContext } from "react";

import { PostsContext } from "../../context/PostsContext";
import { Loading } from "../Loading";
import { PostCard } from "../PostCard";

import "./style.scss";

export function PostContainer() {
  const { postList } = useContext(PostsContext);

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
