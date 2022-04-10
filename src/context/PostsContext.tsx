/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, ReactNode, useEffect, useState } from "react";

import IPostItem from "../interfaces/post";

type IPostsContextProps = {
  children: ReactNode;
};

type IPostsContextType = {
  postList: IPostItem[];
  setPostList: (newState: []) => void;
  apiError: boolean;
  setApiError: (newState: boolean) => void;
};

const initialValue = {
  postList: [],
  setPostList: () => {},
  apiError: false,
  setApiError: () => {},
};

export const PostsContext = createContext<IPostsContextType>(initialValue);

export function PostContextProvider({ children }: IPostsContextProps) {
  const [postList, setPostList] = useState(initialValue.postList);
  const [apiError, setApiError] = useState(initialValue.apiError);

  const URL =
    "https://us-central1-squid-apis.cloudfunctions.net/test-front-basic";

  const fetchApi = fetch(URL)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      setApiError(true);
      console.log(error);
    });

  useEffect(() => {
    if (postList.length < 1 && !apiError) {
      fetchApi.then((data) => setPostList(data));
    }
  }, [postList, apiError]);

  return (
    <PostsContext.Provider
      value={{ postList, setPostList, apiError, setApiError }}
    >
      {children}
    </PostsContext.Provider>
  );
}
