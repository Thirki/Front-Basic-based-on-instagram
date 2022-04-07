import React, { useContext } from "react";

import { PostsContext } from "../../context/PostsContext";
import { Loading } from "../Loading";

import "./style.scss";

export function PostContainer() {
  const { postList } = useContext(PostsContext);
  console.log(postList);

  if (postList.length < 1) {
    return <Loading />;
  }

  return (
    <main id="post-container">
      <h1>Oi</h1>
    </main>
  );
}
