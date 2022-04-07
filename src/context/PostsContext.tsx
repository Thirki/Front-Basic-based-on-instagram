/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, ReactNode, useEffect, useState } from "react";

type IPostsContextProps = {
  children: ReactNode;
};

type IPostsContextType = {
  postList: string[];
  setPostList: (newState: []) => void;
};

const initialValue = {
  postList: [],
  setPostList: () => {},
};

export const PostsContext = createContext<IPostsContextType>(initialValue);

export function PostContextProvider({ children }: IPostsContextProps) {
  const [postList, setPostList] = useState(initialValue.postList);

  const URL =
    "https://us-central1-squid-apis.cloudfunctions.net/test-front-basic";

  const fetchApi = fetch(URL)
    .then((response) => response.json())
    .then((data) => data);

  useEffect(() => {
    if (postList.length < 1) {
      fetchApi.then((data) => setPostList(data));
    }
  }, [postList]);

  return (
    <PostsContext.Provider value={{ postList, setPostList }}>
      {children}
    </PostsContext.Provider>
  );
}
